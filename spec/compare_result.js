describe("compare one given four_digit_number to a random", function() {
    var foo;
    beforeEach(function() {
        foo = {
                compare: function() {
                return "0A1B";
            }
        }
    });
    spyOn(foo, 'compare');
    it("should return 0A1B compare '3798' to '1234'", function() {
        expect(foo().toEqual('0A1B'));
    });
});