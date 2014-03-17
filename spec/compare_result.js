describe("compare one given four_digit_number to a random", function() {
    beforeEach(function() {
        spyOn(window, 'get_random').and.returnValue(1234);
    });

    it("should return 4A0B compare '1234' to 'a random'", function() {
        expect(guess_number(get_random(), '2341')).toEqual('0A4B');
    });
});