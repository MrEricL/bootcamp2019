async function getStudents(){
	ret = ""
	student.findAll().then(function(rows) {

		for(var i = 0; i < rows.length; i++) {
			var columnData = rows[i].dataValues;
			var fname = columnData.fname;
			var lname = columnData.lname;
			var email = columnData.email;
			var gpa = columnData.gpa;
			var school = await campus.findOne({where: {id: idVal}}).then(campus => campus);

			console.log(school);

			ret += `${fname} ${lname}<br>${school}<br>${email}<br>${gpa}<br><br>`;
		}
		return ret;
	});		
}