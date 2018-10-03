// This method sets up the calendar's dates using JS date methods.
// 
// Author Douglas Wetmore (A00395869)

function setCalendar(ctx, user, x, y, width, height)
{
    // Collect and Save Date information
    var date = new Date();

    var currentDate = date.getDate();
    var currentDay = date.getDay();
    var currentMonth = date.getMonth();
    var currentYear = date.getFullYear();
    alert(getDays(1, 2100));
    var currentRow = 0;
    var trueDate = currentDate;

    // Reset the count to the first day of the month
    while (currentDate > 1) {
        currentDate--;
        currentDay--;
        if (currentDay == -1) {
            currentDay = 6;
        }
    }

    // Display the dates
    ctx.font = "20px Arial";
    ctx.fillStyle = user.display.textDark;

    ctx.fillText(getMonthName(currentMonth), x, y-10);

    while (currentDate <= getDays(currentMonth, currentYear)) {

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
        ctx.fillText(currentDate, (x+(width*currentDay))+20, (y+(height*currentRow))+20);

        // Check for notes (sample code, should be upgraded later on!)
        for (i = 0; i < user.notes.length; i++) {
            if (user.notes[i].date == currentDate) {
                ctx.font = "10px Arial";
                ctx.fillText(user.notes[i].description, (x+(width*currentDay))+5, (y+(height*currentRow))+40);
                ctx.font = "20px Arial";
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

// This method returns the amount of days in the provided month.
// 
// Author Douglas Wetmore (A00395869)

function getDays(month, year)
{
    switch(month) {
        case 0:
            return 31;
            break;
        case 1:
            return (year%4 == 0 && year%100 != 0 || year%400 == 0) ? 29 : 28;
            break;
        case 2:
            return 31;
            break;
        case 3:
            return 30;
            break;
        case 4:
            return 31;
            break;
        case 5:
            return 30;
            break;
        case 6:
            return 31;
            break;
        case 7:
            return 31;
            break;
        case 8:
            return 30;
            break;
        case 9:
            return 31;
            break;
        case 10:
            return 30;
            break;
        case 11:
            return 31;
            break;
        default:
            return 0;
    }
}

// This method returns the name of the provided month.
// 
// Author Douglas Wetmore (A00395869)

function getMonthName(month)
{
    switch(month) {
        case 0:
            return "January";
            break;
        case 1:
            return "February";
            break;
        case 2:
            return "March";
            break;
        case 3:
            return "April";
            break;
        case 4:
            return "May";
            break;
        case 5:
            return "June";
            break;
        case 6:
            return "July";
            break;
        case 7:
            return "August";
            break;
        case 8:
            return "September";
            break;
        case 9:
            return "October";
            break;
        case 10:
            return "November";
            break;
        case 11:
            return "December";
            break;
        default:
            return "INVALID MONTH";
    }
}
