describe("Guess", function() {
    it("should return true", function() {
        expect(compare("1234", "1234")).toEqual("4A0B");
    });

    it("should return true", function() {
        expect(compare("1234", "2341")).toEqual("0A4B");
    });

    it("should return true", function() {
        expect(compare("1234", "1243")).toEqual("2A2B");
    });

    it("should return true", function() {
        expect(compare("1234", "1678")).toEqual("1A3B");
    });

    it("should return true", function() {
        expect(compare("1234", "5678")).toEqual("0A0B");
    });
});
