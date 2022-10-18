import Style, { stylesheet } from '../../index.js'

const FancyButtons = new Style('', ['button'], `
    background: none;
    border: solid 2px blue;
`)

stylesheet.genSheet().then(gen => console.log(gen))

console.log('exit')