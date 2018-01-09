var mysql = require('mysql');
var mcm = require('./mysqlConnectionModule');
var connection = mcm.connection;


module.exports.DataSend = connection.connect(function(err){

	if(err) throw err;

	var sql = "INSERT INTO customers (name, address) VALUES ?";
    var values = [
    ['John', 'Highway 71'],
    ['Peter', 'Lowstreet 4'],
    ['Amy', 'Apple st 652'],
    ['Hannah', 'Mountain 21'],
    ['Michael', 'Valley 345'],
    ['Sandy', 'Ocean blvd 2'],
    ['Betty', 'Green Grass 1'],
    ['Richard', 'Sky st 331'],
    ['Susan', 'One way 98'],
    ['Vicky', 'Yellow Garden 2'],
    ['Ben', 'Park Lane 38'],
    ['William', 'Central st 954'],
    ['Chuck', 'Main Road 989'],
    ['Viola', 'Sideway 1633']
    ];
    
  	connection.query(sql,[values], function (err, result) {
    if(err){
    	
    	console.log("Sehvlik Bas Verdi: " + err)
    }else{
    	if(values.length > 15){
    		console.log("Number of records inserted: " + result.affectedRows);
    	}else{

    		console.log("15 den boyuk deyil gelen deyerler")
    	}
    	
    }
    
  })

    
});






