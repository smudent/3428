// Main method behind window set up. Gets the window Width and Height and
// prepares the screen accordingly. This method also takes data from user.js
// which acts as a sample user input
//
// Author Douglas Wetmore (A00395869)

function setWindow()
{
    // Get user information (currently takes from user.js)
    var user = new UserTest();

    // Set screen background colour
    document.body.style.backgroundColor = user.display.mainBackground;

    // Get the window size, and adjust resolution of canvas
    var windowWidth = window.innerWidth-20;
    var windowHeight = window.innerHeight-20;

    // Define the canvas where the graphics are drawn to.
    var canvas = document.getElementById('canvas');
    canvas.width = windowWidth;
    canvas.height = windowHeight;
    var ctx = canvas.getContext('2d');

    // Set-up PC or Mobile Display based on resolution.
    if (windowWidth > windowHeight) {
        setPCDisplay(ctx, user, windowWidth, windowHeight)
    } else {
        setMobileDisplay(ctx, user, windowWidth, windowHeight)
    }
}
