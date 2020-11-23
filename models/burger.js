const orm = require('../config/orm');

//call the ORM functions using burger specific input for the ORM.

let burger = {
   
    listBurgers:  function(){
        let result =  orm.listBurgers();
        console.log('In burger js...')
        return result;
    },
    
    devourBurger:  function(id){
        let result =  orm.devourBurger(id);
        return result;
    },

    addBurger:  function(data){
        let burgerName = data.burger_name;
        result =  orm.addBurger(burgerName);
        return result;
    }
};

module.exports = burger;