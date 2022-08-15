// https://duncan-mcardle.medium.com/solid-principle-3-liskov-substitution-javascript-fdb6af8ee1ea

//https://stackoverflow.com/questions/56860/what-is-an-example-of-the-liskov-substitution-principle#answer-584732
// A great example illustrating LSP (given by Uncle Bob in a podcast I heard recently) was how sometimes something that sounds right in natural language doesn't quite work in code.

// In mathematics, a Square is a Rectangle. Indeed it is a specialization of a rectangle. The "is a" makes you want to model this with inheritance. However if in code you made Square derive from Rectangle, then a Square should be usable anywhere you expect a Rectangle. This makes for some strange behavior.

// Imagine you had SetWidth and SetHeight methods on your Rectangle base class; this seems perfectly logical. However if your Rectangle reference pointed to a Square, then SetWidth and SetHeight doesn't make sense because setting one would change the other to match it. In this case Square fails the Liskov Substitution Test with Rectangle and the abstraction of having Square inherit from Rectangle is a bad one.

//There is no issue if it's immutable. The real issue here is that we are not modeling rectangles, but rather "reshapable rectangles," i.e., rectangles whose width or height can be modified after creation (and we still consider it to be the same object). If we look at the rectangle class in this way, it is clear that a square is not a "reshapable rectangle", because a square cannot be reshaped and still be a square (in general). Mathematically, we don't see the problem because mutability doesn't even make sense in a mathematical context. 

export class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    setHeight(newHeight) {
        this.height = newHeight;
    }
}

export class Square extends Rectangle { }

// export default Rectangle class;
export default Square;

// In this example we initialise a Rectangle and Square, and output their dimensions. We then call the Rectangle.setHeight() on the Square object, and output its dimensions again. What we find is that the square now has a different height than its length, which of course makes for an invalid square.
// This can be solved, using polymorphism, an if statement in the Rectangle class, or a variety of other methods. But the real cause of the issue is that Square is not a good child class of Rectangle, and that in reality, perhaps both shapes should inherit from a Shape class instead.