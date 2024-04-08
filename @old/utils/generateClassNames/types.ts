export interface IMods {
    [key: string]: string | boolean | undefined;
}

export interface IGenerateClassNamesParams {
    block: string;
    elem?: string;
    mods?: IMods;
    className?: string;
}