describe("Card number validation", function() {

    it("4242424242424242 is valid card number", function() {
        assert.isTrue(cardNumberValidation('4242424242424242'));
    });

    it("5168755450326695 is valid card number", function() {
        assert.isTrue(cardNumberValidation('5168755450326695'));
    });

    it("1111111111111111 is not valid card number", function() {
        assert.isFalse(cardNumberValidation('1111111111111111'));
    });

    describe("throw exception on invalid value", function() {

        let invalidValue = ['2345678909876543456789', 'qwertyuiopjjasdf', ''];

        function makeTest(x) {
            it(`${x} throws exception`, function() {
                assert.throws(() => cardNumberValidation(x), 'Invalid card number');
            });
        }

        for (let i = 0; i < invalidValue.length; i++) {
            makeTest(invalidValue[i]);
        }

    });
});
