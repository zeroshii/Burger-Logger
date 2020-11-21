const orm = require('../config/orm');

//call the ORM functions using burger specific input for the ORM.

let burger = {
   
    listBurgers: async function(){
        result = await orm.listBurgers();
        return result;
    },
    
    devourBurger: async function(id){
        result = await orm.devourBurger(id);
        return result;
    },

    addBurger: async function(burger_name){
        const burgerName = burger_name.burger_name;
        result = await orm.addBurger(burgerName);
        return result;
    }
};

module.exports = burger;