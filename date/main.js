// year: number
function isLeapYear(year) {
    if (year < 0 || year != year || Number(year) != Number(year) || year == null || year == Infinity || year == -Infinity) {
        throw new Error('Invalid value of year');
    }

    return year % 4 == 0 && year % 100 != 0 || year % 400 == 0
}

// month: number
function monthLength(month) {
    if (month < 1 || month > 12) {
        throw new Error('Invalid value of month');
    }
    if ([4, 6, 9, 11].includes(month)) {
        return 30
    }
    if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
        return 31
    }
    if (month == 2) {
        return 28
    }
}

// date: string, format dd.MM.YYYY
function dayOfWeek(date) {
    let arr = "date".split(".");
    let day = arr[0];
    let month = arr[1];
    let year = arr[2];

    century = Math.round(year/100);

    if ([3, 7, 11, 15, 19].includes(century)) {
        centuryShift = 0
        }
    if ([4, 8, 12, 16, 20].includes(century)) {
        centuryShift = 6
        }
    if ([1, 5, 9, 13, 17, 21].includes(century)) {
        centuryShift = 4
        }
    if ([2, 6, 10, 14, 18].includes(century)) {
        centuryShift = 2
        }

    decimalYear = (year - (Math.round(year/100));
    
    yearShift = ((decimalYear + (decimalYear/4)) % 7);

    if ([01, 10].includes(month)) {
        monthShift = 0
        }
    if ([02, 03, 11].includes(month)) {
        monthShift = 3
        }
    if ([04, 07].includes(month)) {
        monthShift = 6
        }
    if ([05].includes(month)) {
        monthShift = 1
        }
    if ([06].includes(month)) {
        monthShift = 4
        }
    if ([08].includes(month)) {
        monthShift = 2
        }
    if ([09, 12].includes(month)) {
        monthShift = 5
        }

    dayShift = (day % 7);
    
    sumShift = (centuryShift + yearShift + monthShift + dayShift);
    dayOfWeek = Math.round(sumShift/7);

    if (dayOfWeek == 1) {
        return 'Monday'
        }
    if (dayOfWeek == 2) {
        return 'Tuesday'
        }
    if (dayOfWeek == 3) {
        return 'Wednesday'
        }
    if (dayOfWeek == 4) {
        return 'Thursday'
        }
    if (dayOfWeek == 5) {
        return 'Friday'
        }
    if (dayOfWeek == 6) {
        return 'Saturday'
        }
    if (dayOfWeek == 7) {
        return 'Sunday'
        }
}
