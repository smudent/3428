// This method returns the amount of days in the provided month. February Leap Years don't
// return 29 days, which is an issue that someone should probably fix...
//
// Author Bits & Bytes

function getDays(month)
{
    switch(month) {
        case 0:
            return 31;
            break;
        case 1:
            return 28;
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
// Author Bits & Bytes

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
