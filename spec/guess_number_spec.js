describe('guess number', function() {
    beforeEach(function() {
        spyOn(window, 'get_random').and.returnValue(1234);
    });

    it('should remind user input again when previous input number has repeat', function() {
        expect(is_input_number_has_repeat(1123)).toEqual(true);
    });

    it('should remind user input again when previous input first number is 0 repeat', function() {
        expect(is_first_number_zero(0123)).toEqual(true);
    });

    it('should response user win the game when user input number equal to random and guess times less than 7', function() {
        expect(is_guess_number_win(random, 1234)).toEqual(true);
        expect(guess_time()).toBeLessThan(7);
    });

    it('should response user lost the game when user input number not equal to random and guess times greater than 6', function() {
        expect(is_guess_number_win(random, 1234)).toEqual(false);
        expect(guess_time()).toBeGreaterThan(6);
    });

    it('should response guess_result and remind user input again when the previous number not equal random but guess times less than 7', function() {
        expect(is_guess_number_win(random, 2341)).toEqual(false);
        expect(guess_number(get_random(), 2341)).toEqual('0A4B');
        expect(guess_time()).toBeLessThan(6);
    });

});