#!/bin/sh
set -eu
cd "$(dirname "$0")"
case "${1:-help}" in
  dev) docker compose up --build playground ;;
  down) docker compose down ;;
  build) docker build --target artifact --output type=local,dest=artifacts . ;;
  check)
    docker build --target verification -t apollo-ui:verification .
    docker run --rm --init apollo-ui:verification
    ;;
  publish)
    if [ "$#" -gt 2 ] || { [ "$#" -eq 2 ] && [ "$2" != '--dry-run' ]; }; then
      printf '%s\n' 'Usage: ./dude.sh publish [--dry-run]' >&2
      exit 1
    fi
    if [ "${2:-}" != '--dry-run' ] && [ -z "${NPM_TOKEN:-}" ]; then
      printf '%s\n' 'Set NPM_TOKEN with publish access to @d.story/apollo-ui, or use publish --dry-run.' >&2
      exit 1
    fi
    docker build --target release -t apollo-ui:release .
    if [ "${2:-}" = '--dry-run' ]; then
      docker run --rm --init --network none --env NPM_TAG apollo-ui:release --dry-run
    else
      docker run --rm --init --env NPM_TOKEN --env NPM_CONFIG_OTP --env NPM_TAG apollo-ui:release
    fi
    ;;
  lock)
    docker run --rm -v "$PWD:/app" -w /app node:24.21.0-bookworm-slim@sha256:0e0ff40c39bc087845bfb27465a0df4ea419520094bc35842ff83dd8cbe6f9b6 \
      sh -c 'npm install --package-lock-only --ignore-scripts && npm install --prefix checks/consumer --package-lock-only --ignore-scripts --no-audit --no-fund'
    ;;
  help)
    printf '%s\n' 'Usage: ./dude.sh dev|down|build|check|lock|publish|help' \
      '       ./dude.sh publish [--dry-run]'
    ;;
  *) printf '%s\n' "Unknown command: $1" >&2; exit 1 ;;
esac
