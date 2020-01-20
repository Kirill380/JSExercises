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

function isNumber(num) {
        if (Number(num) != Number(num) || num != num || num < 0 || num == null || num == Infinity || num == -Infinity || num == 0) {
            throw new Error('Invalid value of date')
            }
}

// date: string, format dd.MM.YYYY
function dayOfWeek(date) {

        if (!date) {
            throw new Error('Invalid value of date')
            };

    let arr = date.split(".");
    let dayNumber = Number(arr[0]);
    let monthNumber = Number(arr[1]);
    let yearNumber = Number(arr[2]);

    isNumber(dayNumber);
    isNumber(monthNumber);
    isNumber(yearNumber);
    if (dayNumber > 31) {
    throw new Error('Invalid value of day')
    };
    if (monthNumber > 12){
    throw new Error('Invalid value of month')
    };

    let century = Math.floor(yearNumber/100);
    let centuryShift;

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

    let decimalYear = (yearNumber % 100);

    let yearShift = ((decimalYear + (decimalYear/4)) % 7);
    yearShift = Math.floor (yearShift);

    let monthShifts = [0,3,3,6,1,4,6,2,5,0,3,5];
    let monthShift = monthShifts[monthNumber-1];


     let leap = isLeapYear(yearNumber)*([1,2].includes(monthNumber))
     let sumShift = (centuryShift + yearShift + monthShift + dayNumber - leap);
     let weekIndex = Math.floor(sumShift % 7);

     let day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
     return day[weekIndex];
}

function getDate(dd,mm,yyyy) {return `${dd}.${mm}.${yyyy}`}

let yyyy = 1997;
do {
  dayOfWeek(getDate(13,7,yyyy));
  if (dayOfWeek(getDate(13,07,yyyy)) == 'Friday') {
  alert (yyyy);
  };
  yyyy++
} while (yyyy !== 2117);