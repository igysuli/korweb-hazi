'use strict';

var Weapons = require('./weapons.js');
var Warrior = require('./warrior.js');

function Priest() {
    Priest.super_.apply(this, arguments);
}

Priest.super_ = Warrior;

Priest.prototype = Object.create(Warrior.prototype);

Priest.prototype.attackedBy = function(weapon) {
    this._hp -= (1 - Weapons[weapon].attack - Weapons[this._weapon].defense);
};

module.exports = Priest;