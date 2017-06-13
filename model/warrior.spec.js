var Weapons = require('./weapons.js');
var Warrior = require('./warrior.js');
var expect = require('chai').expect;

describe('Warrior', function() {

    describe('#getHP', function() {

        it('creating the warrior with number will return that number as his health point', function() {
            var warrior = new Warrior(20);

            expect(warrior.getHP()).to.eql(20);
        });

        it('creating the warrior with number will return 30 if the number is higher than 30', function() {
            var warrior = new Warrior(40);

            expect(warrior.getHP()).to.eql(30);
        });

    });

    describe('#attack', function() {

        it('one warrior attacks another will decrease its hp by one', function() {
            var jon = new Warrior(30);
            var theon = new Warrior(20);
            jon.attack(theon);

            expect(theon.getHP()).to.eql(19);
        });

    });
    
    describe('#setWeapon', function() {

        it('given a dagger to a warrior, its attack value will be subtrackted from the enemy\'s hp when attacking', function() {
            var jon = new Warrior(30);
            var theon = new Warrior(20);
            jon.setWeapon('dagger');
            jon.attack(theon);

            expect(theon.getHP()).to.eql(20 - Weapons['dagger']);
        });
        
        it('given a sword to a warrior, its attack value will be subtrackted from the enemy\'s hp when attacking', function() {
            var jon = new Warrior(30);
            var theon = new Warrior(20);
            jon.setWeapon('sword');
            jon.attack(theon);

            expect(theon.getHP()).to.eql(20 - Weapons['sword']);
        });
        
        it('given a magic_stick to a warrior, its attack value will be subtrackted from the enemy\'s hp when attacking', function() {
            var jon = new Warrior(30);
            var theon = new Warrior(20);
            jon.setWeapon('magic_stick');
            jon.attack(theon);

            expect(theon.getHP()).to.eql(20 - Weapons['magic_stick']);
        });
        
        it('given a not existing weapon (in the system) to a warrior, the original 1 value will be subtrackted from the enemy\'s hp when attacking', function() {
            var jon = new Warrior(30);
            var theon = new Warrior(20);
            jon.setWeapon('shovel');
            jon.attack(theon);

            expect(theon.getHP()).to.eql(19);
        });

    });

});