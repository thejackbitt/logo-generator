const inquirer = require('inquirer');
const fs = require('fs');

function writeShape(s) {
    // console.log('The shape for the logo is ' + s)
    if (s === 'square') {
        return '<rect x="50.5" y="0.5" class="st0" width="199" height="199"/>'
    } else if (s === 'circle') {
        return '<circle class="st0" cx="150.5" cy="99.5" r="99.5"/>'
    } else if (s === 'triangle') {
        return '<polygon class="st0" points="250 200 50 200 150 0 250 200"/>'
    }
};

function validateHexColor(value) {
    if (!value.startsWith('#') || value.length !== 7) {
        return 'Please enter a valid hex code (e.g. #424242)';
    }
    return true;
}

function validateTextLength(value) {
    if (value.length > 3) {
        return 'Please enter a maximum of three characters';
    }
    return true;
}

inquirer
    .prompt([
        {
            type: "input",
            message: "Please enter a three-letter acronym that describes your logo",
            name: "text",
            validate: validateTextLength
        },
        {
            type: "input",
            message: "Please enter a hex code for the text color (e.g. #424242)",
            name: "tColor",
            validate: validateHexColor
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
            validate: validateHexColor
        }
    ])
    .then((response) => {
        const { text, tColor, shape, sColor } = response;

        const shapeCode = writeShape(shape);

        fs.writeFile(
            `./logo.svg`,
            `<?xml version="1.0" encoding="utf-8"?>
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 300 200" style="enable-background:new 0 0 300 200;" xml:space="preserve">
            <style type="text/css">
                .st0{fill:${sColor};}
                .st1{fill:none;}
                .st2{fill:${tColor};}
                .st3{font-family:'Verdana-Bold';}
                .st4{font-size:115.7074px;}
            </style>
            ${shapeCode}
            <rect y="40" class="st1" width="300" height="135"/>
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" class="st2 st3 st4">${text}</text>
            </svg>`,
            function (err) {
                if (err) {
                    return console.log(err);
                }
                console.log('SVG logo created successfully.');
            }
        )
    });
