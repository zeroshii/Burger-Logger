const db = require('./connection.js');

let orm = {

    listBurgers (){
        console.log("in orm listBurgers...")
        return db.query(`SELECT * FROM burgers`);
    },
    
    addBurger (burger_name){
        return db.query(`INSERT INTO burgers (burger_name, devoured) VALUES ("${burger_name}", false)`);
    },
    
    devourBurger(id){
        return db.query(`UPDATE burgers SET devoured = 1 WHERE id = ${id}`);
    }
} ;

module.exports = orm;