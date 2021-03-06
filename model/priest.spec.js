'use strict';

var Weapons = {
    'barehand': {
        'attack': 1,
        'defense': 0
    },
    'sword': {
        'attack': 7,
        'defense': 2
    },
    'dagger': {
        'attack': 5,
        'defense': 4
    },
    'magic_stick': {
        'attack': 8,
        'defense': 1
    }
};
var Warrior = require('./warrior.js');
var Priest = require('./priest.js');
var Battle = require('./battle.js');
var expect = require('chai').expect;

describe('Priest', function() {

    describe('#attack', function() {
        
        it('creating a warrior against a priest, the priest heals itself before it attacks', function() {
            var warrior = new Warrior(10);
            var priest = new Priest(5);
            
            warrior.attack(priest);
            expect(priest.getHP()).to.eql(4);
            
            priest.attack(warrior);
            expect(priest.getHP()).to.eql(5);
        });
        
        it('creating a warrior against a priest, the priest heals itself before it attacks but not above its original hp', function() {
            var warrior = new Warrior(10);
            var priest = new Priest(5);
            
            priest.attack(warrior);
            expect(priest.getHP()).to.eql(5);
        });
        
        it('creating a warrior against a priest in a battle, the priest heals itself before each time it attacks', function() {
            var warrior = new Warrior(10);
            var priest = new Priest(5);
            
            var battle = new Battle(warrior, priest);
            
            expect(battle.getWinner()).to.eql(priest);
        });
        
    });

});