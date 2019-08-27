/*Introduction to javascript.Basic syntax and concepts.
 *variables and statements.
 */
//console.log("Hello World");
// Factory Function
function createRectangle(length, width) {
    return {
        length: length,
        width: width,

        area: function() {

            console.log(length * width);
        }

    };

}
let newRectangle = createRectangle(4, 6);
newRectangle.area();

// Using a Constructor function

function Rectangle(length, width) {
    this.length = length,
        this.width = width,
        this.area = function() {
            console.log(length * width);
        }
}
let anotherRectangle = new Rectangle(20, 10);
anotherRectangle.area();

//ADDING PROPERTIES TO AN EXISTING OBJECT
Rectangle.perimeter = { p: 66 };
// ANOTHER WAY
Rectangle['perimeter'] = { p: 665 };

//DELETING A PROPERTY
delete Rectangle.perimeter;
// OR 
delete Rectangle['perimeter'];