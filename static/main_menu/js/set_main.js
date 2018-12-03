// Variables
var windowW = 0;
var windowH = 0;

// Main method behind Main Menu set up. Gets the window Width and Height and
// prepares the screen accordingly. This method also takes data from user.js
// which acts as a sample user input
//
// Author Bits & Bytes

function setMainWindow(user)
{
    windowW = window.innerWidth-20;
    windowH = window.innerHeight-20;
    var canvas = document.getElementById('canvas');
    canvas.width = windowW;
    canvas.height = windowH;
    var ctx = canvas.getContext('2d');

    // Set-up PC or Mobile Display based on resolution
    if (windowW > windowH) {
        setPCDisplay(ctx, user, windowW, windowH);
    } else {
        setMobileDisplay(ctx, user, windowW, windowH);
    }
}

// This method defines the button press events for the Main Menu
//
// Author Bits & Bytes

function ButtonPress(event) {
    // Get X and Y positions of mouse
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    // Check whether PC or Mobile execution
    if (windowW > windowH) {
        PCPress(mouseX, mouseY);
    } else {
        MobilePress(mouseX, mouseY);
    }
}
