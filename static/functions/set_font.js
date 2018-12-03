// Variables
var textOffset = 0;



// This method takes in a width and height area to work with along with an
// average size to work with, and outputs a font size to use for text
//
// Author Bits & Bytes

function createFont(w, h, i) {
    if (h < w) {
        textOffset = h/i;
    }
    else {
        textOffset = w/i;
    }

    return textOffset+"px Arial";
}
