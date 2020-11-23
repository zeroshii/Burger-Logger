const orm = require('../config/orm');

//call the ORM functions using burger specific input for the ORM.

let burger = {
   
    listBurgers: async function(){
        let result =  await orm.listBurgers();
        console.log('In burger js...')
        return result;
    },
    
    devourBurger: async  function(id){
        let result = await orm.devourBurger(id);
        return result;
    },

    addBurger: async function(data){
        let burgerName = data.burger_name;
        result =  await orm.addBurger(burgerName);
        return result;
    }
};

module.exports = burger;