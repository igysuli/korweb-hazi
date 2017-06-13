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
                    'warrior': {
                        '_hp': 30,
                        '_originalHP': 30,
                        '_weapon': 'magic_stick'
                    }
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
                    'warrior': {
                        '_hp': 30,
                        '_originalHP': 30,
                        '_weapon': 'magic_stick'
                    }
                },
                {
                    'id': 2,
                    'type': 'warrior',
                    'warrior': {
                        '_hp': 10,
                        '_originalHP': 10,
                        '_weapon': 'barehand'
                    }
                }
            ]));
        });
        
    });

});