var Warrior = require('./warrior.js');
var Battle = require('./battle.js');
var expect = require('chai').expect;

describe('Battle', function() {

    describe('#getWinner', function() {

        it('given two warriors with the same hp, the first one wins', function() {
            var warrior1 = new Warrior(5);
            var warrior2 = new Warrior(5);
            
            var battle = new Battle(warrior1, warrior2);
            
            expect(battle.getWinner()).to.eql(0);
        });

    });

});