import yeast from 'yeast';

export interface Styles {
    [key: string]: string
}

export default class Style {
    styles: string;
    class: string;
    rules: string[];

    constructor(parent: string, rules: string[], properties: string) {
        this.class = parent;
        this.styles = properties;
        this.rules = [];

        parent === '' && (this.class = 'c-' + yeast());
        parent === '@' && (this.class = '');

        for(const rule of rules) {
            this.rules.push((this.class.length > 0 ? '.' : '') + this.class + rule);
        }

        stylesheet.registerStyle(this);
    }
}

export class Stylesheet {
    styles: Style[];
    exportedSheet: string;

    constructor() {
        this.styles = [];
        this.exportedSheet = '';
    }

    registerStyle(style: Style) {
        this.styles.push(style);
    }

    async genSheet() {
        let output = '';

        this.styles = this.styles.reverse();
        for(const style of this.styles) {
            for(const rule of style.rules) {
                output += rule + ',\n'
            }
            output = output.substring(0, output.length - 2);
            output += '{' + style.styles + '}\n';
        }

        this.exportedSheet = output;
    }
}

export const stylesheet: Stylesheet = new Stylesheet();