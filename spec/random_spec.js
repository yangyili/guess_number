describe("get a random number which has four digit", function() {
    it("the random type should be number", function() {
        expect(typeof get_random()).toEqual('number');
    });
    it("the random number should has four digit", function() {
        expect(get_random().toString.length).toEqual(4);
    });
    it("number is random", function() {
        expect(is_random(get_random)).toEqual(true);
    });
    it("the four digit of random number should different", function() {
        expect(is_every_digit_different(get_random())).toEqual(true);
    });
});