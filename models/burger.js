const orm = require('../config/orm');

//call the ORM functions using burger specific input for the ORM.

let burger = {
   
    listBurgers: async function(){
        result = await orm.selectAll();
        return result;
    },
    
    devourBurger: async function(){
        result = await orm.updateOne(id);
        return result;
    },

    addBurger: async function(){
        result = await orm.insertOne(burger_name);
        return result;
    }
};

module.exports = burger;