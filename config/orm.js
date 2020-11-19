const db = require('./connection.js');

function selectAll(){
    return db.query(`SELECT * FROM burgers`);
}

function insertOne(){
    return db.query(`INSERT INTO burgers (burger_name) VALUES (?)`);
}

function updateOne(){
    return db.query(`UPDATE burgers SET devoured = ? WHERE id = ?`);
}

module.exports = { selectAll, insertOne, updateOne };