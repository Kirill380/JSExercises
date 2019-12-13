describe("is leap year", function() {

    it("2020 is leap year", function() {
        assert.isTrue(isLeapYear(2020));
    });

    it("2019 is leap year", function() {
        assert.isFalse(isLeapYear(2019));
    });

    it("1200 is leap year", function() {
        assert.isTrue(isLeapYear(1200));
    });

    it("1000 is not leap year", function() {
        assert.isFalse(isLeapYear(1000));
    });

    describe("throw exception on invalid value", function() {

        let invalidValue = [-1, NaN, 'text', Infinity, -Infinity, null];

        function makeTest(x) {
            it(`${x} throws exception`, function() {
                assert.throws(() => isLeapYear(x), 'Invalid value of year');
            });
        }

        for (let i = 0; i < invalidValue.length; i++) {
            makeTest(invalidValue[i]);
        }

    });
});

describe("month length", function() {

    it(`length of February is 28`, function() {
        assert.equal(monthLength(2), 28);
    });

    describe("return 30", function() {

        let months = [4, 6, 9, 11];

        function makeTest(x) {
            it(`length of ${x} is 30`, function() {
                assert.equal(monthLength(x), 30);
            });
        }

        for (let i = 0; i < months.length; i++) {
            makeTest(months[i]);
        }

    });

    describe("return 31", function() {

        let months = [1, 3, 5, 7, 8, 10, 12];

        function makeTest(x) {
            it(`length of ${x} is 31`, function() {
                assert.equal(monthLength(x), 31);
            });
        }

        for (let i = 0; i < months.length; i++) {
            makeTest(months[i]);
        }

    });


    describe("throw exception on invalid value", function() {

        let invalidValue = [0, 13];

        function makeTest(x) {
            it(`${x} throws exception`, function() {
                assert.throws(() => monthLength(x), 'Invalid value of month');
            });
        }

        for (let i = 0; i < invalidValue.length; i++) {
            makeTest(invalidValue[i]);
        }

    });
});



describe("get day of week by date", function() {

    //I missed a couple of cases on purpose, you can logically figure out them because I check them on our meet

    it('24.11.2019 is Sunday', function() {
        assert.equal(dayOfWeek('24.11.2019'), 'Sunday');
    });

    it('07.05.2016 is Saturday', function() {
        assert.equal(dayOfWeek('07.05.2016'), 'Saturday');
    });

    it('13.05.2016 is Friday', function() {
        assert.equal(dayOfWeek('13.05.2016'), 'Friday');
    });
    it('16.06.1910 is Thursday', function() {
        assert.equal(dayOfWeek('16.06.1910'), 'Thursday');
    });
    it('11.10.2006 is Wednesday', function() {
        assert.equal(dayOfWeek('11.10.2006'), 'Wednesday');
    });
    it('17.09.2019 is Tuesday', function() {
        assert.equal(dayOfWeek('17.09.2019'), 'Tuesday');
    });
    it('04.01.1999 is Monday', function() {
        assert.equal(dayOfWeek('04.01.1999'), 'Monday');
    });
    describe("throw exception on invalid value", function() {

        let invalidValue = ['12,2.01.1234','12.32.1006','32.2.00','','07.07.-1006','07.07.-1006','12..2.08','0.-.=','   '];
        function makeTest(x) {
            it(`${x} throws exception`, function() {
                assert.throws(() => dayOfWeek(x), 'Invalid value of month');
            });
        }

        for (let i = 0; i < invalidValue.length; i++) {
            makeTest(invalidValue[i]);
        }

    });

});