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
    //TODO
    // for inspiration
    // https://artofmemory.com/blog/how-to-calculate-the-day-of-the-week-4203.html
    // https://wpcalc.com/kak-uznat-den-nedeli-lyuboj-daty/
}
