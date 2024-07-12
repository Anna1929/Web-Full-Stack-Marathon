describe("checkBrackets", function() {
    it("should return -1 if the parameter is invalid ", function() {
        assert.equal(checkBrackets(5), -1);
        assert.equal(checkBrackets([]), -1);
        assert.equal(checkBrackets('324'), -1);
        assert.equal(checkBrackets(undefined), -1);
        assert.equal(checkBrackets(null), -1);
        assert.equal(checkBrackets('hello world'), -1);
    });

    it('should return the number of brackets to be added for strings with unmatched brackets', function() {
        assert.equal(checkBrackets('('), 1);
        assert.equal(checkBrackets(')'), 1);
        assert.equal(checkBrackets('(()(((('), 5);
        assert.equal(checkBrackets('())'), 1);
        assert.equal(checkBrackets(')('), 2);
        assert.equal(checkBrackets(')()('), 2);
        assert.equal(checkBrackets('()'), 0);
        assert.equal(checkBrackets('(()))'), 1);
        assert.equal(checkBrackets('()()()()'), 0);
        assert.equal(checkBrackets(')()(()('), 3);
    });
})