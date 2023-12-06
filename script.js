//complete this code
class Rectangle {
	constructor(width, height) {
		this.width = width;
		this.height = height;
	}
	get width() {
		return this.width;
	}
	get height() {
		return this.height;
	}

	getArea: function() {
		let area = (this.width * this.height);
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
