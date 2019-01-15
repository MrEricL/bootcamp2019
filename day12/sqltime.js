const express = require('express')
const app = express()
const port = 3000



const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost:5432/fakebook')


var users = db.define('users', {
	name: Sequelize.STRING
});

var posts = db.define('posts', {
	content: Sequelize.STRING
});

users.sync().then(function(){
	console.log("working table");
})

posts.sync().then(function(){
	console.log("table 2");
})



app.get('/', (req, res) => res.send('Hello World!'))

app.get('/users/', (req, res) => {
	let userList = ""
	users.findAll().then(function(rows) {
		
	for(var i = 0; i < rows.length; i++) {
		var columnData = rows[i].dataValues;
		var name = columnData.name;
		console.log(name);
		userList += name + "<br><br>";
		}
		res.send(userList);
	});
})

app.get('/posts/search', function (req, res) {
	var query = req.query.term;
	var postList = "";

	posts.findAll({
		where: {
			content: {
			ilike: `%${query}%`
		}
		}
	})
	.then(function(rows){
		for(var i = 0; i < rows.length; i++) {
			var columnData = rows[i].dataValues;
			var content = columnData.content;
			console.log(content);
			postList += content + "<br><br>";
		}
		res.send(postList);		
	});
})


app.get('/posts/', (req, res) => {
	let postList = ""
	posts.findAll().then(function(rows) {
		
		for(var i = 0; i < rows.length; i++) {
			var columnData = rows[i].dataValues;
			var content = columnData.content;
			console.log(content);
			postList += content + "<br><br>";
		}
		res.send(postList);
	});	
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))