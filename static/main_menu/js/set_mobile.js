// Variables
var width = 0;
var height = 0;
var buttonW = 0;
var buttonH = 0;
var plannerX = 0;
var plannerY = 0;
var plannerW = 0;
var plannerH = 0;
var plannerIndex = 0;



// This method creates the display for mobile window sizes.
//
// Author Bits & Bytes

function setMobileDisplay(ctx, user, w, h)
{
    width = w;
    height = h;

    // Create the buttons
    ctx.lineWidth="3";
    ctx.strokeStyle = user.display.buttonLight;
    ctx.fillStyle = user.display.buttonDark;

    buttonW = (width/3)-20;
    buttonH = (height/4)-20;

    ctx.beginPath();
    ctx.rect(10, 70, buttonW, buttonH);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(buttonW+30, 70, buttonW, buttonH);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.rect((buttonW*2)+50, 70, buttonW, buttonH);
    ctx.fill();
    ctx.stroke();

    // Display graphics on buttons
    var plansImg = new Image();
    plansImg.src = static_dir+"graphics/planner"+user.display.extension;
    plansImg.onload = function() {
        if (buttonH > buttonW) {
            ctx.drawImage(plansImg, 10, 70, buttonW, buttonW);
        }
        else {
            ctx.drawImage(plansImg, 10, 70, buttonH, buttonH);
        }
    }
    var notesImg = new Image();
    notesImg.src = static_dir+"graphics/notes"+user.display.extension;
    notesImg.onload = function() {
        if (buttonH > buttonW) {
            ctx.drawImage(notesImg, buttonW+30, 70, buttonW, buttonW);
        }
        else {
            ctx.drawImage(notesImg, buttonW+30, 70, buttonH, buttonH);
        }
    }
    var lifesImg = new Image();
    lifesImg.src = static_dir+"graphics/lifestyle"+user.display.extension;
    lifesImg.onload = function() {
        if (buttonH > buttonW) {
            ctx.drawImage(lifesImg, (buttonW*2)+50, 70, buttonW, buttonW);
        }
        else {
            ctx.drawImage(lifesImg, (buttonW*2)+50, 70, buttonH, buttonH);
        }
    }

    // Display the user's name
    ctx.font = "30px Arial";
    ctx.fillStyle = user.display.textDark;
    ctx.fillText(user.name, 10, 40);

    // Display the date
    var date = new Date();
    ctx.font = "20px Arial";
    ctx.fillText(getMonthName(date.getMonth())+" "+date.getDate(), 10, buttonH+100);

    // Create the Planner List
    plannerX = 10;
    plannerY = (buttonH+110);
    plannerW = (buttonW*3)+50;
    plannerH = ((height-(height/4))-100)/6;
    plannerIndex = 0;

    // Find index of first event for the list
    plannerIndex = 0;
    while (user.events[plannerIndex].date < date.getDate() || user.events[plannerIndex].month < date.getMonth()) {
        plannerIndex++;
    }

    ctx.font = createFont(plannerW, plannerH, 3);
    for (i=0; i<6; i++) {
        ctx.fillStyle = user.display.buttonDark;
        ctx.beginPath();
        ctx.rect(plannerX, plannerY+(plannerH*i), plannerW, plannerH);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = user.display.textDark;
        ctx.fillText(getMonthName(user.events[i+plannerIndex].month)+" "+user.events[i+plannerIndex].date, plannerX+25, plannerY+(plannerH*i)+textOffset+3);
        ctx.fillText(user.events[i+plannerIndex].title, plannerX+10, plannerY+(plannerH*i)+(textOffset*2)+8);
    }
}

// This method defines the button press events for the PC display settings
//
// Author Bits & Bytes
function MobilePress(mouseX, mouseY) {
    // Execute Planner Button
    if (mouseX > 10 && mouseX < 10+buttonW && mouseY > 70 && mouseY < 70+buttonH) {
        window.location.href = '/events/';
        //window.open("planner_menu.html", "_self");
    }

    // Execute Notes Button
    if (mouseX > buttonW+30 && mouseX < (buttonW*2)+30 && mouseY > 70 && mouseY < 70+buttonH) {
        window.location.href = '/notes/';
        //window.open("note_menu.html", "_self");
    }

    // Execute Lifestyle Button
    if (mouseX > (buttonW*2)+50 && mouseX < (buttonW*3)+50 && mouseY > 70 && mouseY < 70+buttonH) {
        window.location.href = '/lifestyle/';
        //window.open("lifestyle_menu.html", "_self");
    }

    // Execute Calendar Interaction
    if (mouseX > plannerX && mouseX < plannerX+plannerW && mouseY > plannerY && mouseY < plannerY+(plannerH*6)) {
        var eventSelect = (mouseY-plannerY)/plannerH;
        window.location.href = '/events/' + (eventSelect + plannerIndex);
        //window.open("event_view.html?"+(eventSelect+plannerIndex), "_self");
    }
}
