// This method creates the display for mobile window sizes.
// 
// Author Douglas Wetmore (A00395869)

function setMobileDisplay(ctx, user, width, height)
{
    // Create the buttons
    ctx.lineWidth="3";
    ctx.strokeStyle = user.display.buttonLight;
    ctx.fillStyle = user.display.buttonDark;

    // Buttons are essentially drawn rectangles. Ideally, the same width
    // and height could be used to define the mouse click area.

    ctx.beginPath();
    ctx.rect(10, 70, (width/2)-20, (height/4)-10); 
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(width/2, 70, (width/2)-20, (height/4)-10); 
    ctx.fill();
    ctx.stroke();

    // Display text on buttons. Should be deleted and replaced with
    // something else.
    ctx.font = "30px Arial";
    ctx.fillStyle = user.display.textDark;
    ctx.fillText("Notes", 40, 100);
    ctx.fillText("Lifestyle", (width/2)+30, 100);

    // Display the user's name
    ctx.fillText(user.name, 10, 40);

    // Create the Calendar
    var calendarX = 10;
    var calendarY = ((height/4)+90);
    var calendarWidth = (width-40)/7;
    var calendarHeight = ((height-(height/4))-100)/6;

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
