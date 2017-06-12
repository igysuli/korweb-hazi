var Warrior = require('./warrior.js');
var expect = require('chai').expect;

describe('Warrior', function() {

    describe('#getLife', function() {

        it('creating the warrior with number will return that number as his life point', function() {
            var warrior = new Warrior(20);

            expect(warrior.getLife()).to.eql(20);
        });

        it('creating the warrior with number will return 30 if the number is higher than 30', function() {
            var warrior = new Warrior(40);

            expect(warrior.getLife()).to.eql(30);
        });

    });

    describe('#attack', function() {

        it('one warrior attacks another will decrease its life by one', function() {
            var jon = new Warrior(30);
            var theon = new Warrior(20);
            jon.attack(theon);

            expect(theon.getLife()).to.eql(19);
        });

    });

});