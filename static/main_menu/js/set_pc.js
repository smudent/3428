// Variables
var width = 0;
var height = 0;
var buttonW = 0;
var buttonH = 0;
var calendarX = 0;
var calendarY = 0;
var calendarWidth = 0;
var calendarHeight = 0;



// This method creates the display for PC window sizes.
//
// Author Bits & Bytes
function setPCDisplay(ctx, user, w, h)
{
    width = w;
    height = h;

    // Create the buttons
    ctx.lineWidth="3";
    ctx.strokeStyle = user.display.buttonLight;
    ctx.fillStyle = user.display.buttonDark;

    buttonW = (width/8)*3;
    buttonH = (height/3)-40;

    ctx.beginPath();
    ctx.rect(10, 70, buttonW, buttonH);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(10, buttonH+90, buttonW, buttonH);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(10, (buttonH*2)+110, buttonW, buttonH);
    ctx.fill();
    ctx.stroke();

    // Display graphics on buttons
    var plansImg = new Image();
    plansImg.src = static_dir+"graphics/planner"+user.display.extension;
    plansImg.onload = function() {
        ctx.drawImage(plansImg, (buttonW/3)+10, 70, buttonH, buttonH);
    }
    var notesImg = new Image();
    notesImg.src = static_dir+"graphics/notes"+user.display.extension;
    notesImg.onload = function() {
        ctx.drawImage(notesImg, (buttonW/3)+10, buttonH+90, buttonH, buttonH);
    }
    var lifesImg = new Image();
    lifesImg.src = static_dir+ "graphics/lifestyle"+user.display.extension;
    lifesImg.onload = function() {
        ctx.drawImage(lifesImg, (buttonW/3)+10, (buttonH*2)+110, buttonH, buttonH);
    }

    // Display the user's name
    ctx.font = "30px Arial";
    ctx.fillStyle = user.display.textDark;
    ctx.fillText(user.name, 10, 40);

    // Create the Calendar
    calendarX = (buttonW+30);
    calendarY = 70;
    calendarWidth = (width-(buttonW+40))/7;
    calendarHeight = (height-80)/6;

    ctx.fillStyle = user.display.buttonDark;
    ctx.beginPath();
    ctx.rect(calendarX, calendarY, calendarWidth*7, calendarHeight*6);
    ctx.fill();

    // Draw the Calendar
    for (i = 0; i < 7; i++) {
        for (j = 0; j < 6; j++) {
            ctx.beginPath();
            ctx.rect(calendarX+(calendarWidth*i), calendarY+(calendarHeight*j), calendarWidth, calendarHeight);
            ctx.stroke();
        }
    }

    // Call setCalendar to apply proper dates
    setCalendar(ctx, user, calendarX, calendarY, calendarWidth, calendarHeight);
}

// This method defines the button press events for the PC display settings
//
// Author Bits & Bytes
function PCPress(mouseX, mouseY) {
    // Execute Planner Button
    if (mouseX > 10 && mouseX < 10+buttonW && mouseY > 70 && mouseY < 70+buttonH) {
        window.location.href = '/events/';
    }

    // Execute Notes Button
    if (mouseX > 10 && mouseX < 10+buttonW && mouseY > 90+buttonH && mouseY < 90+(buttonH*2)) {
        window.location.href = '/notes/';
        //window.open("note_menu.html", "_self");
    }

    // Execute Lifestyle Button
    if (mouseX > 10 && mouseX < 10+buttonW && mouseY > 110+(buttonH*2) && mouseY < 110+(buttonH*3)) {
        window.location.href = '/lifestyle/';
        //window.open("lifestyle_menu.html", "_self");
    }

    // Execute Calendar Interaction
    if (mouseX > calendarX && mouseX < calendarX+(calendarWidth*8) && mouseY > calendarY && mouseY < calendarY+(calendarHeight*6)) {
        calendarInteract(mouseX-calendarX, mouseY-calendarY, calendarWidth, calendarHeight);
    }
}
