'use strict';

var Warriors = require('./warriors.js');
var expect = require('chai').expect;

describe('Warriors', function() {

    describe('#getWarriors', function() {
        
        it('getting warriors without adding before will result an empty array', function() {
            var warriors = new Warriors();
            
            expect(warriors.getWarriors()).to.eql([]);
        });
        
        it('getting warriors after adding one before will result array with one warrior', function() {
            var warriors = new Warriors();
            warriors.addWarrior('priest', 40, 'magic_stick');

            expect(JSON.stringify(warriors.getWarriors())).to.eql(JSON.stringify([
                {
                    'id': 1,
                    'type': 'priest',
                    'hp': 30,
                    'weapon': 'magic_stick'
                }
            ]));
        });
        
        it('getting warriors after adding two before will result array with two warriors', function() {
            var warriors = new Warriors();
            warriors.addWarrior('priest', 40, 'magic_stick');
            warriors.addWarrior('warrior', 10);

            expect(JSON.stringify(warriors.getWarriors())).to.eql(JSON.stringify([
                {
                    'id': 1,
                    'type': 'priest',
                    'hp': 30,
                    'weapon': 'magic_stick'
                },
                {
                    'id': 2,
                    'type': 'warrior',
                    'hp': 10,
                    'weapon': 'barehand'
                }
            ]));
        });
        
    });
    
    describe('#getWarriorByID', function() {
        
        it('given 3 newly added warriors: asking for the one with id 2 will return it', function() {
            var warriors = new Warriors();
            warriors.addWarrior('warrior', 10, 'magic_stick');
            warriors.addWarrior('priest', 20, 'dagger');
            warriors.addWarrior('priest', 30, 'sword');

            expect(JSON.stringify(warriors.getWarriorByID(2))).to.eql(JSON.stringify({
               '_type': 'priest',
               '_hp': 20,
                '_originalHP': 20,
                '_weapon': 'dagger',
                '_id': 2
            }));
        });
        
    });

});