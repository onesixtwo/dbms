var mysql = require('mysql');

var connection = mysql.createConnection({
   host : 'localhost',
   user : 'root',
   password : '',
   database : 'cpe202_lab6_demo',
});

connection.connect(function (error) {
   if(!!error) {
      console.log(error);
   } else {
      console.log('mysql database connected');
   }
});

module.exports = connection;

