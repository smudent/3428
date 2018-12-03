// Variables
var buttonX = 0;
var buttonY = 0;
var buttonW = 0;
var buttonH = 0;



// Main method behind window set up. Gets the window Width and Height and
// prepares the screen accordingly. This method also takes data from user.js
// which acts as a sample user input
//
// Author Bits & Bytes

function setNoteWindow(user)
{
    // Get the window size, and adjust resolution of canvas
    windowW = window.innerWidth-20;
    windowH = window.innerHeight-20;

    // Define the canvas where the graphics are drawn to.
    var canvas = document.getElementById('canvas');
    canvas.width = windowW;
    canvas.height = windowH;
    var ctx = canvas.getContext('2d');

    // Set the display
    ctx.font = "30px Arial";
    ctx.fillStyle = user.display.textDark;
    ctx.fillText(user.name, 10, 40);
    ctx.font = "20px Arial";
    ctx.fillText("Saved Notes:", 10, 70);

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

    // Display the note list
    noteX = 10;
    noteY = 110;
    noteW = windowW-20;
    noteH = (windowH-(windowH/10)-130)/8;

    ctx.font = createFont(noteW, noteH, 3);
    for (i=0; i<user.notes.length; i++) {
        ctx.fillStyle = user.display.buttonDark;
        ctx.beginPath();
        ctx.rect(noteX, noteY+(noteH*i), noteW, noteH);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = user.display.textDark;
        ctx.fillText(user.notes[i].title, noteX+25, noteY+(noteH*i)+textOffset+3);
        ctx.fillText(user.notes[i].description, noteX+10, noteY+(noteH*i)+(textOffset*2)+8);
    }
}

function ButtonPress(event) {
    // Get X and Y positions of mouse
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    // Match button areas
    if (mouseX > buttonX && mouseX < buttonX+buttonW && mouseY > buttonY && mouseY < buttonY+buttonH) {
        window.location.href = "/home/";
        //window.open("Main_Menu.html", "_self");
    }
    if (mouseX > buttonX+buttonW+20 && mouseX < buttonX+(buttonW*2)+20 && mouseY > buttonY && mouseY < buttonY+buttonH) {
        window.location.href = "/home/";
        //window.open("Main_Menu.html", "_self");
    }
}
