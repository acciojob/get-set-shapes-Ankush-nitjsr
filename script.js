//complete this code
class Rectangle {
	constructor(width, height) {
		this._width = width;
		this._height = height;
	}
	get width() {
		return this._width;
	}
	get height() {
		return this._height;
	}

	getArea: function() {
		let area = (this._width * this._height);
		return area;
	}
}

class Square extends Rectangle {
	Rectangle.call(this, width, height);
	getPerimeter: function() {
		let perimeter = 4 * this.width;
		return perimeter;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
