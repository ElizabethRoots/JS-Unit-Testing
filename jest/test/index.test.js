describe('MathLib', function() {
    var expect = require('chai').expect;
    var MathLib = require('../src/index.js');

    describe('add', function() {
        it('adds two numbers together', function() {
            var mathLib = new MathLib();
            var result = mathLib.add(1, 2);
            expect(result).to.equal(3);
        });
    });
});