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
    
    describe('#attackedBy', function() {

        it('warrior attacked by another, its hp decreases by the attack point of the enemy minus its own defense point', function() {
            var jon = new Warrior(30);
            var theon = new Warrior(20);
            jon.setWeapon('dagger');
            theon.setWeapon('dagger');
            jon.attack(theon);

            expect(theon.getHP()).to.eql(19);
        });

        it('given a dagger to a warrior, its attack value will be subtrackted from the enemy\'s hp when attacking', function() {
            var jon = new Warrior(30);
            var theon = new Warrior(20);
            jon.setWeapon('dagger');
            jon.attack(theon);

            expect(theon.getHP()).to.eql(15);
        });
        
        it('given a sword to a warrior, its attack value will be subtrackted from the enemy\'s hp when attacking', function() {
            var jon = new Warrior(30);
            var theon = new Warrior(20);
            jon.setWeapon('sword');
            jon.attack(theon);

            expect(theon.getHP()).to.eql(13);
        });
        
        it('given a magic_stick to a warrior, its attack value will be subtrackted from the enemy\'s hp when attacking', function() {
            var jon = new Warrior(30);
            var theon = new Warrior(20);
            jon.setWeapon('magic_stick');
            jon.attack(theon);

            expect(theon.getHP()).to.eql(12);
        });
        
        it('given a not existing weapon (in the system) to a warrior, the original 1 value will be subtrackted from the enemy\'s hp when attacking', function() {
            var jon = new Warrior(30);
            var theon = new Warrior(20);
            jon.setWeapon('shovel');
            jon.attack(theon);

            expect(theon.getHP()).to.eql(19);
        });
        
        it('when attacking with sword someone holding a sword, the damage should be less by the defense point of the sword', function() {
            var jon = new Warrior(30);
            var theon = new Warrior(20);
            jon.setWeapon('sword');
            theon.setWeapon('sword');
            jon.attack(theon);

            expect(theon.getHP()).to.eql(15);
        });
        
        it('when attacking with sword someone holding a magic stick, the damage should be less by the defense point of the magic stick', function() {
            var jon = new Warrior(30);
            var theon = new Warrior(20);
            jon.setWeapon('sword');
            theon.setWeapon('magic_stick');
            jon.attack(theon);

            expect(theon.getHP()).to.eql(14);
        });

    });
    
    describe('#setWeapon', function() {
        
        it('not setting a weapon will leave the warrior with barehand', function() {
            var jon = new Warrior(30);
            var theon = new Warrior(20);

            expect(jon._weapon).to.eql('barehand');
        });
        
        it('setting an existing weapon will give it to the warrior', function() {
            var jon = new Warrior(30);
            var theon = new Warrior(20);
            jon.setWeapon('sword');

            expect(jon._weapon).to.eql('sword');
        });
        
        it('setting a not-existing weapon will leave the warrior with barehand', function() {
            var jon = new Warrior(30);
            var theon = new Warrior(20);
            jon.setWeapon('tiger');

            expect(jon._weapon).to.eql('barehand');
        });
        
    });    

});