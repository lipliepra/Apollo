FROM node:24.21.0-bookworm-slim@sha256:0e0ff40c39bc087845bfb27465a0df4ea419520094bc35842ff83dd8cbe6f9b6 AS development
WORKDIR /app
COPY package.json package-lock.json .npmrc ./
RUN --mount=type=cache,target=/root/.npm npm ci
COPY . .
EXPOSE 6006
CMD ["npm", "run", "dev"]

FROM development AS verification
CMD ["npm", "run", "check"]

FROM development AS package
RUN npm run typecheck && npm run build && npm run check:package \
    && mkdir -p artifacts && npm pack --ignore-scripts --pack-destination artifacts

FROM development AS release
RUN npm run check \
    && mkdir -p artifacts && npm pack --ignore-scripts --pack-destination artifacts
ENTRYPOINT ["node", "scripts/publish.mjs"]
CMD []

FROM scratch AS artifact
COPY --from=package /app/artifacts/ /
