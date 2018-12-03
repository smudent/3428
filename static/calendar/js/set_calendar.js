// Variables
var date = new Date();
var startDate = 0;
var currentMonth = date.getMonth();
var daysInMonth = 0;



// This method sets up the calendar's dates using the collected dates from JS
// date methods. The Calendar does not take Leap Years into account, and should
// probably be fixed by someone.
//
// The Calendar is used for the PC Main Menu
//
// Author Bits & Bytes

function setCalendar(ctx, user, x, y, width, height)
{
    // Variables
    var currentDate = date.getDate();
    var currentDay = date.getDay();
    var currentRow = 0;
    var trueDate = currentDate;
    daysInMonth = getDays(currentMonth);

    // Reset the count to the first day of the month
    while (currentDate > 1) {
        currentDate--;
        currentDay--;
        if (currentDay == -1) {
            currentDay = 6;
        }
    }
    while (currentDay > 0) {
        currentDay--;
        currentDate--;
    }
    startDate = currentDate;

    // Display the dates
    ctx.font = createFont(width*7, 20, 1);
    ctx.fillStyle = user.display.textDark;

    ctx.fillText(getMonthName(currentMonth), x, y-10);

    // Set up pre-main loop assets
    ctx.font = createFont(width, height, 3);
    var stickyImg = new Image();
    stickyImg.src = "graphics/sticky.png";
    stickyImg.onload = function() {}
    var plannerIndex = 0;

    while (currentDate <= daysInMonth) {
        // Special Display for true current date
        if (currentDate == trueDate) {
            ctx.fillStyle = user.display.buttonLight;
            ctx.beginPath();
            ctx.rect(x+(width*currentDay), y+(height*currentRow), width, height);
            ctx.fill();
            ctx.fillStyle = user.display.textLight;
        } else {
            ctx.fillStyle = user.display.textDark;
        }

        // Draw the date
        if (currentDate > 0) {
            ctx.fillText(currentDate, (x+(width*currentDay))+5, (y+(height*currentRow))+textOffset);
        }

        // Check for notes (sample code, should be upgraded later on!)
        if (user.events[plannerIndex].date == currentDate && user.events[plannerIndex].month == currentMonth) {
            ctx.beginPath();
            ctx.rect((x+(width*currentDay))+textOffset+5, (y+(height*currentRow))+textOffset+5, width/2, height/2);
            ctx.fill();
            while (user.events[plannerIndex].date == currentDate) {
                plannerIndex++;
            }
        }

        // Update current date
        currentDate++;
        currentDay++;
        if (currentDay == 7) {
            currentDay = 0;
            currentRow++;
        }
    }

    // Display the following month dates
    currentDate = 1
    ctx.fillStyle = user.display.textDark;

    while (currentRow < 6) {
        // Draw the date
        ctx.fillText(currentDate, (x+(width*currentDay))+5, (y+(height*currentRow))+textOffset);

        if (user.events[plannerIndex].date == currentDate && user.events[plannerIndex].month == currentMonth+1) {
            ctx.beginPath();
            ctx.rect((x+(width*currentDay))+textOffset+5, (y+(height*currentRow))+textOffset+5, width/2, height/2);
            ctx.fill();
            while (user.events[plannerIndex].date == currentDate) {
                plannerIndex++;
            }
        }

        // Update current date
        currentDate++;
        currentDay++;
        if (currentDay == 7) {
            currentDay = 0;
            currentRow++;
        }
    }
}

// This method executes the click command for the calendar. It opens the
// selected date window to display all planner events for the day.
//
// Author Bits & Bytes
function calendarInteract(x, y, w, h)
{
    var rowClicked = y/h;
    var collumClicked = x/w;
    var currentDate = startDate;
    var currentRow = 0;
    var currentCollum = 0;

    // Match date to week clicked
    while (currentRow < rowClicked-1) {
        currentDate += 7;
        currentRow++;
    }
    // Match date to day clicked
    while (currentCollum < collumClicked-1) {
        currentDate++;
        currentCollum++;
    }

    // Open day notes
    if (currentDate > 0) {
        if (currentDate > daysInMonth) {
            window.location.href = '/dates/?'+(currentMonth+1)+'&'+(currentDate-daysInMonth)
            //window.open("Date_View.html?"+(currentMonth+1)+"&"+(currentDate-daysInMonth), "_self");
        }
        else {
            window.location.href = '/dates/?'+currentMonth+'&'+currentDate
            //window.open("Date_View.html?"+currentMonth+"&"+currentDate, "_self");
        }
    }
}
