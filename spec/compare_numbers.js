describe("compare_numbers", function() {
    it("should pass when compare all number is same", function() {
        expect(compare("1234", "1234")).toEqual("4A0B");
        expect(compare("1234", "2341")).toEqual("0A4B");
    });
    it("should return 0A4B when compare different numbers", function() {
        expect(compare("1234", "5678")).toEqual("0A0B");
    });
    it("should return 2A2B when compare '1234' and '1243", function() {
        expect(compare("1234", "1243")).toEqual("2A2B");
    });
    it("should pass when compare two numbers which has part same", function() {
        expect(compare("1234", "1678")).toEqual("1A0B");
        expect(compare("1234", "1278")).toEqual("2A0B");
        expect(compare("1234", "1230")).toEqual("3A0B");
    });
});
describe("get random number more than 10000", function() {
    it("number is random", function() {
        expect(compare(get_random(), get_random())).not.toEqual('4A0B');
    });
    it("should get four random numbers", function() {
        expect(get_random().length).toEqual(4);
    });
    it("should get four different random numbers", function() {
        expect(is_different(get_random())).toEqual(true);
    });
});
