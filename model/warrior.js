'use strict';

module.exports = function(life) {
    
    var life = parseInt(life) > 30 ? 30 : parseInt(life);
    
    this.getLife = function(){
        return life;
    }
    
};