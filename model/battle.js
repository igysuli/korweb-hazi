'use strict';

function Battle(warrior1, warrior2)
{
    this._warrior1 = warrior1;
    this._warrior2 = warrior2;
}

Battle.prototype = {
    
    getWinner: function() {
        return 0;
    }
};

module.exports = Battle;