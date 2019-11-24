describe("pow", function() {

    it("2 to the 3th power is 8", function() {
        assert.equal(pow(2, 3), 8);
    });

    it("3 to the 3th power is 27", function() {
        assert.equal(pow(3, 3), 27);
    });

    it("for negative n returns NaN", function() {
        assert.isNaN(pow(2, -1));
    });

    it("for fractional n returns NaN", function() {
        assert.isNaN(pow(2, 1.5));
    });
});