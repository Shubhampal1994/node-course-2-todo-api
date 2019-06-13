// const MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb');


// ES6 Destructuring
// =================
// var user = {name: 'shubham', age: 25};
// var {name} = user;
// console.log(name);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');
	const db = client.db('TodoApp');

	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false
	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log('Unable to insert todo ', err);
	// 	}

	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });

	// db.collection('Users').insertOne({
	// 	name: 'Shubham',
	// 	age: 25,
	// 	location: 'Noida'
	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log('Unable to insert user ', err);
	// 	}

	// 	console.log(result.ops[0]._id.getTimestamp());
	// 	// console.log(JSON.stringify(result.ops, undefined, 2));
	// });

	client.close();
});
