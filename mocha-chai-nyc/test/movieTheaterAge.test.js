function movieTheaterAge(string) {
    var age = 12;
    var accomp = true;
    var currentAge = 13;
    if (currentAge >= age) {
        console.log('You can see the movie');
    } else if (currentAge <= age && accomp == true) {
        console.log('You can see the movie');
    } else {
        console.log('You cant see the movie');
    }
    return console.log;
}

describe('movieTheaterAge()', function() {
    var expect = require('chai').expect;
    require('mocha-sinon');

    beforeEach(function() {
        this.sinon.stub(console, 'log');
    });

    it('return approved correct age', function() {
        movieTheaterAge(12 <= (currentAge = 13));
        expect(console.log.calledOnce).to.be.true;
        expect(console.log.calledWith('You can see the movie')).to.be.true;
    });

    it('return approved due to accomp', function() {
        movieTheaterAge((currentAge = 11) && (accomp = true));
        expect(console.log.calledOnce).to.be.true;
        expect(console.log.calledWith('You can see the movie')).to.be.true;
    });

    it('return declined due to age and accomp', function() {
        movieTheaterAge(11, (currentAge = 11) && (accomp = false));
        expect(console.log.calledOnce).to.be.true;
        expect(console.log.calledWith('You cant see the movie')).to.be.false;
    });
});