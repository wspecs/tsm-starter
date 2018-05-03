export declare const CONFIG_PATH = "~/.tsm_starter";
export declare const TEMPLATE_FOLDER: string;
export declare const DEFAULT_CONFIG: {
    author: {
        name: string;
        email: string;
        url: string;
    };
};
export interface TsmConfig {
    name: string;
    destination: string;
    author: {
        name: string;
        email: string;
        url: string;
    };
    repository: string;
    help?: boolean;
}
export declare function validateConfig(config: TsmConfig): boolean;
export declare function readArgs(config: TsmConfig): {
    name: string;
    destination: string;
    author: {
        name: string;
        email: string;
        url: string;
    };
    repository: string;
    help?: boolean | undefined;
};
export declare function generate(config: TsmConfig): void;
