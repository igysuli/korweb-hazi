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
        var id = this.getNewID();
        var warrior = this.createWarrior(type, hp, weapon, id);
        this.pushWarriorToList(warrior);
        return id;
    },
    
    getWarriorByID: function(id) {
        var warrior = undefined;
        var i = 0;
        while (warrior == undefined && i < this._warriors.length) {
            if (this._warriors[i].getID() == id) {
                warrior = this._warriors[i];
            }
            i++;
        }
        return warrior;
    },
    
    getWarriors: function() {
        var output = [];
        for (var i in this._warriors) {
            output.push({
                id: this._warriors[i].getID(),
                type: this._warriors[i].getType(),
                hp: this._warriors[i].getHP(),
                weapon: this._warriors[i].getWeapon()
            });
        }
        return output;
    },
    
    createWarrior: function(type, hp, weapon, id) {
        if (type == 'priest') {
            var warrior = new Priest(hp);
        } else {
            var warrior = new Warrior(hp);
        }
        warrior.setWeapon(weapon);
        warrior.setID(id);
        return warrior;
    },
    
    getNewID: function() {
        return this._lastID++;
    },
    
    pushWarriorToList: function(warrior) {
        this._warriors.push(warrior);
    }
};

module.exports = Warriors;