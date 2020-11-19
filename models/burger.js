const orm = require('../config/orm');

//call the ORM functions using burger specific input for the ORM.

let burger = {
   
    selectAll: async function(){
        res = await orm.selectAll();
        return res;
    },
    
    updateOne: async function(){
        res = await orm.updateOne(id);
        return res;
    },

    insertOne: async function(){
        res = await orm.insertOne(burger_name);
    }
};

module.exports = burger;