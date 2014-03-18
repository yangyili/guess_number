describe('run guess number', function() {
    beforeEach(function() {
        spyOn(window, 'get_random').and.returnValue(1234);
    });

    it('remind user input again', function() {
        expect(game_run(get_random, 1379)).toEqual('1A1B input again');
    });

    it('', function() {
        expect(game_run(get_random, [1379, 2345, 1345, 1234])).toEqual('win! game over');
    });

    it('', function() {
        expect(game_run(get_random, [1379, 2345, 1345, 1534, 1536, 2389])).toEqual('lose! game over');
    });

});