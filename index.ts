import yeast from 'yeast';

export interface Styles {
    [key: string]: string
}

export default class Style {
    styles: string;
    class: string;
    rules: string[];

    constructor(options: { parent?: string, rules?: string[], properties: string} ) {
        this.class = options.parent ?? 'c-' + yeast();
        this.styles = options.properties;
        options.parent === '@' && (this.class = '');
        this.rules = (options.rules ?? ['']).map(rule => `${(this.class.length > 0 ? '.' : '')}${this.class} ${rule}`);

        stylesheet.registerStyle(this);
    }
}

export class Stylesheet {
    styles: Style[];    

    constructor() {
        this.styles = [];
    }

    registerStyle(style: Style) {
        this.styles.push(style);
    }

    genSheet() {
        let output = '';

        for(const style of this.styles) {
            for(const rule of style.rules) {
                output += `${rule.trim()},\n`
            }
            output = output.substring(0, output.length - 2);
            output += ' {' + style.styles + '}\n';
        }

        return output;
    }
}

export const stylesheet: Stylesheet = new Stylesheet();

export const generate = () => new Promise(resolve => {
    resolve(stylesheet.genSheet())
})