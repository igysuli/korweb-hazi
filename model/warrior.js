'use strict';

function Warrior(life)
{
    this._life = parseInt(life) > 30 ? 30 : parseInt(life);
}

Warrior.prototype.getLife = function () {
    return this._life;
};

Warrior.prototype.attack = function (anotherWarrior) {
    anotherWarrior.decreaseLifeByOne();
};

Warrior.prototype.decreaseLifeByOne = function (anotherWarrior) {
    this._life--;
};

module.exports = Warrior;