'use strict';

var Weapons = require('./weapons.js');
var Warrior = require('./warrior.js');

function Priest() {
    Priest.super_.apply(this, arguments);
    this._type = 'priest';
}

Priest.super_ = Warrior;

Priest.prototype = Object.create(Warrior.prototype);

Priest.prototype.heal = function() {
    if (this._hp < this._originalHP) {
        this._hp++;
    }
};

Priest.prototype.attack = function(anotherWarrior) {
    this.heal();
    anotherWarrior.attackedBy(this._weapon);
};

module.exports = Priest;