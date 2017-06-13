'use strict';

function Battle(warrior1, warrior2)
{
    this._warrior1 = warrior1;
    this._warrior2 = warrior2;
}

Battle.prototype = {
    
    getWinner: function() {
        while (this._warrior1.getHP() > 0 && this._warrior2.getHP() > 0) {
            this._warrior2.attackedBy(this._warrior1.getWeapon());
            if (this._warrior2.getHP() > 0) {
                this._warrior1.attackedBy(this._warrior2.getWeapon());
            }
        }
        return this._warrior1.getHP() > 0 ? 0 : 1;
    }
};

module.exports = Battle;