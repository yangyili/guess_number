describe("compare_numbers", function() {
    it("should return 4A0B when compare '1234' and '1234'", function() {
        expect(compare("1234", "1234")).toEqual("4A0B");
    });

    it("should return 0A4B when compare '1234' and '2341", function() {
        expect(compare("1234", "2341")).toEqual("0A4B");
    });

    it("should return 2A2B when compare '1234' and '1243", function() {
        expect(compare("1234", "1243")).toEqual("2A2B");
    });

    it("should return 1A0B when compare '1234' and '1678", function() {
        expect(compare("1234", "1678")).toEqual("1A0B");
    });

    it("should return 0A0B when compare '1234' and '5678", function() {
        expect(compare("1234", "5678")).toEqual("0A0B");
    });
});
