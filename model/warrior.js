'use strict';

var Weapons = require('./weapons.js');

function Warrior(hp)
{
    this._hp = parseInt(hp) > 30 ? 30 : parseInt(hp);
    this._originalHP = this._hp;
    this._weapon = 'barehand';
}

Warrior.prototype = {
    
    getHP: function() {
        return this._hp;
    },
    
    getWeapon: function() {
        return this._weapon;
    },
    
    isAlive: function() {
        return this._hp > 0;
    },
    
    attack: function(anotherWarrior) {
        anotherWarrior.attackedBy(this._weapon);
    },
    
    attackedBy: function(weapon) {
        this._hp -= (Weapons[weapon].attack - Weapons[this._weapon].defense);
    },
    
    setWeapon: function(weapon) {
        if (Weapons[weapon] != undefined) {
            this._weapon = weapon;
        }
    }
};

module.exports = Warrior;