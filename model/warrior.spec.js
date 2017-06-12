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

});