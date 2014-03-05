describe("get a random number which has four digit", function() {
    it("number is random", function() {
        expect(is_random(get_random)).toEqual(true);
    });
    it("the random number should has four digit", function() {
        expect(get_random().toString.length).toEqual(4);
    });
    it("the four digit of random number should different", function() {
        expect(is_every_digit_different(get_random())).toEqual(true);
    });
});