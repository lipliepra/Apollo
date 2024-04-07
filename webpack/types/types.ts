export type TBuildMode = ('production' | 'development');

export interface IBuildPaths {
    entry: string;
    build: string;
}

export interface IBuildOptions {
    mode: TBuildMode;
    paths: IBuildPaths;
}
