// Variables
var buttonX = 0;
var buttonY = 0;
var buttonW = 0;
var buttonH = 0;



// Main method behind displaying a single event. This method takes in user
// information and an index value and displays the user's event at the
// provided index value
//
// Author Bits & Bytes

function setEventWindow(user, i)
{
    // Get the window size, and adjust resolution of canvas
    var windowW = window.innerWidth-20;
    var windowH = window.innerHeight-20;

    // Define the canvas where the graphics are drawn to.
    var canvas = document.getElementById('canvas');
    canvas.width = windowW;
    canvas.height = windowH;
    var ctx = canvas.getContext('2d');

    // Set the display
    ctx.font = "30px Arial";
    ctx.fillStyle = user.display.textDark;
    ctx.fillText(user.name, 10, 40);

    // Display the buttons
    ctx.fillStyle = user.display.buttonDark;

    buttonX = 10;
    buttonY = windowH-(windowH/10);
    buttonW = (windowW/2)-20;
    buttonH = windowH/10

    ctx.beginPath();
    ctx.rect(buttonX, buttonY, buttonW, buttonH);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(buttonX+(buttonW+20), buttonY, buttonW, buttonH);
    ctx.fill();
    ctx.stroke();

    // Display button graphics
    var newImg = new Image();
    newImg.src = static_dir+"graphics/new"+user.display.extension;
    newImg.onload = function() {
        ctx.drawImage(newImg, buttonX+(buttonW/3), buttonY, buttonH, buttonH);
    }

    var backImg = new Image();
    backImg.src = static_dir+"graphics/back"+user.display.extension;
    backImg.onload = function() {
        ctx.drawImage(backImg, buttonX+(buttonW+20)+(buttonW/3), buttonY, buttonH, buttonH);
    }

    // Display the event
    ctx.lineWidth="3";
    ctx.strokeStyle = user.display.buttonLight;
    ctx.fillStyle = user.display.buttonDark;
    ctx.beginPath();
    ctx.rect(10, 70, windowW, ((windowH-210)/3)*2);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = user.display.textDark;
    ctx.font = createFont(windowW, ((windowH-210)/3)*2, 12);
    ctx.fillText(user.events[i].title, 20, 80+textOffset);
    ctx.font = createFont(windowW, ((windowH-210)/3)*2, 18);
    ctx.fillText(user.events[i].description, 20, 100+(textOffset*2));
    ctx.fillText("This event is scheduled for "+getMonthName(user.events[i].month)+" "+user.events[i].date, 20, 120+(textOffset*3.5));
}

function ButtonPress(event) {
    // Get X and Y positions of mouse
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    // Match button areas
    if (mouseX > buttonX && mouseX < buttonX+buttonW && mouseY > buttonY && mouseY < buttonY+buttonH) {
       window.location.href = '/home/';
    }
    if (mouseX > buttonX+buttonW+20 && mouseX < buttonX+(buttonW*2)+20 && mouseY > buttonY && mouseY < buttonY+buttonH) {
        window.location.href = '/home/';
    }
}
