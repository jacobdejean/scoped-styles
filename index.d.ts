export interface Styles {
    [key: string]: string;
}
export default class Style {
    styles: string;
    class: string;
    rules: string[];
    constructor(options: {
        parent?: string;
        rules?: string[];
        properties: string;
    });
}
export declare class Stylesheet {
    styles: Style[];
    constructor();
    registerStyle(style: Style): void;
    genSheet(): string;
}
export declare const stylesheet: Stylesheet;
export declare const generate: () => Promise<unknown>;
