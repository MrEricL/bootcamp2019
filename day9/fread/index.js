var fs = require('fs');

/*
master = (JSON.parse(fs.readFileSync("people.json")).name).
		 concat(JSON.parse(fs.readFileSync("people2.json")).name).sort();

var file = fs.createWriteStream("allpeople.txt");
file.on('error', function(err) { console.log(err) });
master.forEach(function(v) { file.write(v + '\n'); });
file.end();
*/


function addContent(master, fname) {
	master = master.concat(JSON.parse(fs.readFileSync(fname)).name);

	var file = fs.createWriteStream("allpeople.txt");
	file.on('error', function(err) { console.log("bad") });
	master.forEach(function(v) { file.write(v + '\n'); });

	file.end();

}

function parseDir(folder, master){
	fs.readdir(folder, (err, files) => {
	  files.forEach(file => {
	  	//console.log(file)
	    addContent(master, folder+"/"+file)
	    //console.log(master)
	  });
	})
}

parseDir("people", [])