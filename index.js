const inquirer = require('inquirer');

function writeText(t) {
    console.log('The text for the logo is ' + t)
}

function writeColor(tc) {
    console.log('The text color for the logo is ' + tc)
}

function writeShape(s) {
    console.log('The shape for the logo is ' + s)
}

function writeShapeColor(sc) {
    console.log('The shape color for the logo is ' + sc)
}

inquirer
    .prompt([
        {
            type: "input",
            message: "Please enter a three-letter acronym that describes your logo",
            name: "text"
        },
        {
          type: "input",
          message: "Please enter a hex code for the text color (e.g. #424242)",
          name: "tColor"
        },
        {
            type: "list",
            message: "Please select a shape from the list of options",
            name: "shape",
            choices: [
                { key: 'square', name: 'Square', value: 'square' },
                { key: 'circle', name: 'Circle', value: 'circle' },
                { key: 'triangle', name: 'Triangle', value: 'triangle' }
            ]
        },
        {
            type: "input",
            message: "Please enter a hex code for the shape color (e.g. #424242)",
            name: "sColor",
        }
        ])
    .then((response) => {
            const { text, tColor, shape, sColor } = response;

        writeText(text);
        writeColor(tColor);
        writeShape(shape);
        writeShapeColor(sColor);

    })
    