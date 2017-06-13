'use strict';

var Weapons = require('./weapons.js');

function Warrior(hp)
{
    this._hp = parseInt(hp) > 30 ? 30 : parseInt(hp);
    this._weapon = 'barehand';
}

Warrior.prototype = {
    
    getHP: function() {
        return this._hp;
    },
    
    attack: function(anotherWarrior) {
        anotherWarrior.attackedBy(this._weapon);
    },
    
    attackedBy: function(weapon) {
        this._hp -= Weapons[weapon].attack;
    },
    
    setWeapon: function(weapon) {
        if (Weapons[weapon] != undefined) {
            this._weapon = weapon;
        }
    }
};

module.exports = Warrior;