'use strict';

var Warrior = require('./warrior.js');
var Battle = require('./battle.js');
var expect = require('chai').expect;

describe('Battle', function() {

    describe('#getWinner', function() {

        it('given two warriors with the same hp, the first one wins', function() {
            var warrior1 = new Warrior(5);
            var warrior2 = new Warrior(5);
            
            var battle = new Battle(warrior1, warrior2);
            
            expect(battle.getWinner()).to.eql(warrior1);
        });
        
        it('given two warriors, if the first has more hp, the first one wins', function() {
            var warrior1 = new Warrior(6);
            var warrior2 = new Warrior(5);
            
            var battle = new Battle(warrior1, warrior2);
            
            expect(battle.getWinner()).to.eql(warrior1);
        });
        
        it('given two warriors, if the second has more hp, the second one wins', function() {
            var warrior1 = new Warrior(5);
            var warrior2 = new Warrior(6);
            
            var battle = new Battle(warrior1, warrior2);
            
            expect(battle.getWinner()).to.eql(warrior2);
        });
        
    });

});