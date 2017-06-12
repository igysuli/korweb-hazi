var Warrior = require('./warrior.js');
var expect = require('chai').expect;

describe('Warrior', function() {
    
    describe('#getLife', function() {
        
        it('creating the warrior with number will return that number as his life point', function() {
            var warrior = new Warrior(20);
            expect(warrior.getLife()).to.eql(20);
        });
        
    });

});