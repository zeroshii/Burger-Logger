const db = require('./connection.js');

function selectAll(){
    return db.query(`SELECT * FROM burgers`);
}

function insertOne(burger_name){
    return db.query(`INSERT INTO burgers (burger_name, devoured) VALUES ("${burgerName}", false)`);
}

function updateOne(id){
    return db.query(`UPDATE burgers SET devoured = 1 WHERE id = ${id}`);
}

module.exports = { selectAll, insertOne, updateOne };