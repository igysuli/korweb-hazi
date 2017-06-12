'use strict';

function Warrior(hp)
{
    this._hp = parseInt(hp) > 30 ? 30 : parseInt(hp);
}

Warrior.prototype.getHP = function () {
    return this._hp;
};

Warrior.prototype.attack = function (anotherWarrior) {
    anotherWarrior.decreaseHPByOne();
};

Warrior.prototype.decreaseHPByOne = function (anotherWarrior) {
    this._hp--;
};

module.exports = Warrior;