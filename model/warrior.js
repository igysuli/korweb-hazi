'use strict';

function Warrior(hp)
{
    this._hp = parseInt(hp) > 30 ? 30 : parseInt(hp);
}

Warrior.prototype = {
    
    getHP: function() {
        return this._hp;
    },
    
    attack: function(anotherWarrior) {
        anotherWarrior.decreaseHPByOne();
    },
    
    decreaseHPByOne: function() {
        this._hp--;
    }
};

module.exports = Warrior;