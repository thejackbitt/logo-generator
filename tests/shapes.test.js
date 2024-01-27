const { writeShape } = require('../index');

describe('writeShape function tests', () => {

    test('returns correct SVG for square', () => {
        const squareSVG = '<rect x="50.5" y="0.5" class="st0" width="199" height="199"/>';
        expect(writeShape('square')).toBe(squareSVG);
    });

    test('returns correct SVG for circle', () => {
        const circleSVG = '<circle class="st0" cx="150.5" cy="99.5" r="99.5"/>';
        expect(writeShape('circle')).toBe(circleSVG);
    });

    test('returns correct SVG for triangle', () => {
        const triangleSVG = '<polygon class="st0" points="250 200 50 200 150 0 250 200"/>';
        expect(writeShape('triangle')).toBe(triangleSVG);
    });

    test('returns empty string for invalid shape', () => {
        expect(writeShape('invalidShape')).toBe('');
    });

});
