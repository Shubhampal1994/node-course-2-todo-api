var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
	var todo = new Todo({
		text: req.body.text
	});

	todo.save().then((doc) => {
		res.send(doc);
	}, (e) => {
		res.status(400).send(e);
	});
});

app.get('/todos', (req, res) => {
	Todo.find().then((todos) => {
		res.send({todos});
	}, (e) => {
		res.status(400).send(e);
	});
});

app.listen(3000, () => {
	console.log('Started on port 3000');
});

module.exports = {app};


// var user1 = new User({
// 	email: 'shubhampaliwal1@virtualemployee.com   '
// });

// user1.save().then((doc) => {
// 	console.log('User saved: ', doc);
// }, (err) => {
// 	console.log('Unable to save User: ', err);
// });

// var newTodo = new Todo({
// 	text: 'Eat dinner'
// });

// newTodo.save().then((doc) => {
// 	console.log('Saved todo', doc);
// }, (e) => {
// 	console.log('Unable to save todo');
// });
