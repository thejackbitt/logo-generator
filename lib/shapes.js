class Square {
    static getSVG() {
        return '<rect x="50.5" y="0.5" class="st0" width="199" height="199"/>';
    }
}

class Circle {
    static getSVG() {
        return '<circle class="st0" cx="150.5" cy="99.5" r="99.5"/>';
    }
}

class Triangle {
    static getSVG() {
        return '<polygon class="st0" points="250 200 50 200 150 0 250 200"/>';
    }
}

module.exports = { Square, Circle, Triangle };