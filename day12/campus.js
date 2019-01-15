const express = require('express')
const app = express()



const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/college');


var campus = db.define('campus', {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
		notEmpty: true
	},
	imageURL: {
		type: Sequelize.STRING,
		defaultValue: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Larkmead_School%2C_Abingdon%2C_Oxfordshire.png"
	},
	address: {
		type: Sequelize.STRING,
		allowNull: false,
		notEmpty: true
	},
	description: Sequelize.TEXT
});

var student = db.define('student', {
	fname: {
		type: Sequelize.STRING,
		allowNull: false,
		notEmpty: true,
	},
	lname: {
		type: Sequelize.STRING,
		allowNull: false,
		notEmpty: true,
	},
	email: {
		type: Sequelize.STRING,
		isEmail: true,
		allowNull: false,
		notEmpty: true,
	},
	imageURL: {
		type: Sequelize.STRING,
		defaultValue: "https://www.usnews.com/img/college-photo_21911_256x256mm.jpg"
	},
	gpa: {
		type: Sequelize.DECIMAL,
		allowNull: false,
	},
});

campus.hasMany(student);
student.belongsTo(campus);


campus.sync().then(function(){
	
	campus.create({
		name: 'School of Hard Knocks',
		address: '12345 Fake Pl',
		description: 'Sssssssssssssssssssssssssssssssssssss'
	});
	console.log("working campus");
})

student.sync().then(function(){
	
	student.create({
		fname: 'Bobby',
		lname: 'Fish',
		email: 'bob@bob.bob',
		gpa: 3.999999,
		campusId: 1,
	});
	console.log("working student");
})


async function getCampus(idVal){
	var ret = await campus.findOne({where: {id: idVal}}).then(campus => campus);
	return ret;
	//return "yes";
}





app.get('/student', (req, res) => {

	let ret = ""

	student.findAll({
	  include: [campus]
		}).then(function(rows) {
		console.log(rows, "\n\n\n\n\n\n")
		for(var i = 0; i < rows.length; i++) {
			var columnData = rows[i].dataValues;
			var fname = columnData.fname;
			var lname = columnData.lname;
			var email = columnData.email;
			var gpa = columnData.gpa;
			var school = 0;

			console.log(campus);

			ret += `${fname} ${lname}<br>${school}<br>${email}<br>${gpa}<br><br>`;
		}
		res.send(ret);
	});	
	
})


app.get('/campus', (req, res) => {

	let ret = ""
	console.log("\n\n\n\nWORKING\n\n\n\n")
	campus.findAll().then(function(rows) {

		for(var i = 0; i < rows.length; i++) {
			var columnData = rows[i].dataValues;
			var name = columnData.name;
			var img = columnData.imageURL;
			var address = columnData.address;
			var description = columnData.description;

			console.log(img);

			ret += `<img src = "${img}"><br>${name}<br>${address}<br><p>${description}</p><br><br>`;
		}
		res.send(ret);
	});	
	
})



const port = 3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))








