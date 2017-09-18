//JSON data

var userData =  {
					'aa':{
						"role":["Department Manager"],
						"username":"user1",
						"password":"userPswd1",
						"email":"user1@gmail.com"
					},
					"user2":{
						"role":["Department Manager"],
						"username":"user2",
						"password":"userPswd2",
						"email":"user2@gmail.com"
					},
					"user3":{
						"role":["Store Manager"],
						"username":"user3",
						"password":"userPswd3",
						"email":"user3@gmail.com"
					},
					"user4":{
						"role":["Store Manager"],
						"username":"user4",
						"password":"userPswd4",
						"email":"user4@gmail.com"
					},
					"user5":{
						"role":["Department Manager","Store Manager"],
						"username":"user5",
						"password":"userPswd5",
						"email":"user5@gmail.com"
					},
					"user6":{
						"role":["Department Manager","Store Manager"],
						"username":"user6",
						"password":"userPswd6",
						"email":"user6@gmail.com"
					}
				}



var inventaryRecords =	[
							{
								"Product Id":"1",
								"Product Name":"prod1",
								"Vendor":"vendor1",
								"MRP":"20",
								"Batch Num":"7",
								"Batch Date":"12/7/17",
								"Quantity":"IN STOCK",
								"Status":"Approved"
							},
							{
								"Product Id":"2",
								"Product Name":"prod2",
								"Vendor":"vendor2",
								"MRP":"21",
								"Batch Num":"8",
								"Batch Date":"13/7/17",
								"Quantity":"IN STOCK",
								"Status":"Pending"
							},
							{
								"Product Id":"3",
								"Product Name":"prod3",
								"Vendor":"vendor3",
								"MRP":"22",
								"Batch Num":"9",
								"Batch Date":"14/7/17",
								"Quantity":"OUT OF STOCK",
								"Status":"Approved"
							},
							{
								"Product Id":"4",
								"Product Name":"prod4",
								"Vendor":"vendor4",
								"MRP":"23",
								"Batch Num":"10",
								"Batch Date":"15/7/17",
								"Quantity":"OUT OF STOCK",
								"Status":"Pending"
							}

						]


var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var path = require('path');

app.use(cookieParser());
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/login', function(req, res){
	res.send(userData);
})

app.get('/dashboard', function(req, res){
	res.send(inventaryRecords);
})


app.listen(3000, function(){
	console.log('server running at port 3000');
})