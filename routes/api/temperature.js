var express = require('express');

var router = express.Router();

var databaseConn = require ('../../config/database.js');

//insert
//routes POST api/temperature/add
//@desc use to add data privately
//@access PRIVATE
router.post('/add', (req, res) => {
   console.log(req.body);
   sqlQuery = `INSERT INTO temp (temperature, date, device_id) VALUES (${req.body.temperature}, '${req.body.date}', '${req.body.device_id}')`;

   databaseConn.query(sqlQuery, function (error, results, fields) {
       if (error) throw error;
       res.status(200).json(results);
   })
});


//select / view
//routes get api/temperature/view
//@desc can view data
//@access PUBLIC
router.get('/view',(req,res) => {
   sqlQuery = `SELECT * FROM temp`;
   databaseConn.query (sqlQuery, function(error,results,fields){
      if(error) throw error;
      res.status(200).json(results)
   })
})
//update

//delete

module.exports = router;