const mysql = require('mysql');

// const db = mysql.createConnection({
//     host: 'localhost',
//     port: 3306,
//     user: 'root',
//     password: 'miriko',
//     database: 'burgers_db'
// });

// db.connect(function(err) {
//     if (err) {
//       return console.error('error: ' + err.message);
//     }
//     console.log('Connected to the MySQL server.');
//   });
class Database {
  constructor( config ) {
    if (process.env.JAWSDB_URL){
      this.connection = connection = mysql.createConnection(process.env.JAWSDB_URL);
    } else {
      this.connection = mysql.createConnection( config );
    }
  }
  query( sql, args=[] ) {
      return new Promise( ( resolve, reject ) => {
          this.connection.query( sql, args, ( err, rows ) => {
              if ( err )
                  return reject( err );
              resolve( rows );
          } );
      } );
  }
  close() {
      return new Promise( ( resolve, reject ) => {
          this.connection.end( err => {
              if ( err )
                  return reject( err );
              resolve();
          } );
      } );
  }
}

// at top INIT DB connection -- we need this to give PROMISES to mysql
const db = new Database({
  host: "localhost",
  port: 3306,
  user: "root",
  password: 'miriko',
  database: 'burgers_db'
});


module.exports = db;