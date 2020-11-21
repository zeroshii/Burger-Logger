const orm = require('../config/orm');

//call the ORM functions using burger specific input for the ORM.

let burger = {
   
    listBurgers: async function(){
        result = await orm.listBurgers();
        return result;
    },
    
    devourBurger: async function(burgerId){
        result = await orm.devourBurger(burgerId);
        return result;
    },

    addBurger: async function(data){
        const burgerName = data.burger_name;
        result = await orm.addBurger(burgerName);
        return result;
    }
};

module.exports = burger;