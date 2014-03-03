describe("compare_numbers", function() {
    it("should return true when compare '1234' and '1234'", function() {
        expect(compare("1234", "1234")).toEqual("4A0B");
    });

    it("should return true when compare '1234' and '2341", function() {
        expect(compare("1234", "2341")).toEqual("0A4B");
    });

    it("should return true when compare '1234' and '1243", function() {
        expect(compare("1234", "1243")).toEqual("2A2B");
    });

    it("should return true when compare '1234' and '1678", function() {
        expect(compare("1234", "1678")).toEqual("1A3B");
    });

    it("should return true when compare '1234' and '5678", function() {
        expect(compare("1234", "5678")).toEqual("0A0B");
    });
});
