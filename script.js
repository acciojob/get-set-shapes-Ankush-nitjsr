//complete this code
class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    // Getters for width and height
    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    // Method to calculate and return the area of the rectangle
    getArea() {
        return this._width * this._height;
    }
}

// Square class extends Rectangle
class Square extends Rectangle {
    constructor(side) {
        // Call the constructor of the parent class (Rectangle)
        super(side, side);
    }

    // Method to calculate and return the perimeter of the square
    getPerimeter() {
        return 4 * this.width;
    }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
