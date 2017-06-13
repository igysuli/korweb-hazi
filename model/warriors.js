'use strict';

var Warrior = require('./warrior.js');
var Priest = require('./priest.js');

function Warriors()
{
    this._warriors = [];
    this._lastID = 1;
}

Warriors.prototype = {
    
    addWarrior: function(type, hp, weapon) {
        var warrior = this.createWarrior(type, hp, weapon);
        var id = this.getNewID();
        this.pushWarriorToList(id, type, warrior);
        return id;
    },
    
    getWarriors: function() {
        return this._warriors;
    },
    
    createWarrior: function(type, hp, weapon) {
        if (type == 'priest') {
            var warrior = new Priest(hp);
        } else {
            var warrior = new Warrior(hp);
        }
        warrior.setWeapon(weapon);
        return warrior;
    },
    
    getNewID: function() {
        return this._lastID++;
    },
    
    pushWarriorToList: function(id, type, warrior) {
        this._warriors.push({
            'id': id,
            'type': type,
            'warrior': warrior
        });
    }
};

module.exports = Warriors;