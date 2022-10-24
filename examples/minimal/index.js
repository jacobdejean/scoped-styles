import Style, { stylesheet, generate } from '../../index.js'

// normal scoped style
const FancyButton = new Style({rule: ['button'], properties: `
    background: none;
    border: solid 2px blue;
`})

// should affect all divs
const FancyDiv = new Style({parent: '@', rules: ['div'], properties: `
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
`})

// combinators
const FancyInput = new Style({parent: '@', rules: ['div + input'], properties: `
    font-size: 1.5rem;
`})

// parent class
const FancyList = new Style({parent: FancyButton.class, properties: `
    color: red;
`})

/*
    <button class={ FancyButton.class }>submit</button>
*/

console.time('gen')
generate().then(output => complete(output))

function complete(output) {
     console.timeEnd('gen')
     console.log(output)
}

console.log('exit')