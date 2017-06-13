'use strict';

function Battle(warrior1, warrior2)
{
    this._warrior1 = warrior1;
    this._warrior2 = warrior2;
}

Battle.prototype = {
    
    getWinner: function() {
        while (this._warrior1.getHP() > 0 && this._warrior2.getHP() > 0) {
            this._warrior1.attack(this._warrior2);
            if (this._warrior2.getHP() > 0) {
                this._warrior2.attack(this._warrior1);
            }
        }
        return this._warrior1.getHP() > 0 ? this._warrior1 : this._warrior2;
    }
};

module.exports = Battle;