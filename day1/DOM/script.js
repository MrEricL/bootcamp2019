
//Part 1
var righttext = document.getElementById('righttext');
var rightbutton1 = document.getElementById('rightbutton1');
var rightbutton2 = document.getElementById('rightbutton2');



var change_right_text = function(e){
	let button = this.id;
	console.log(button);
	if (button == "rightbutton1") righttext.innerHTML = "I'm right";
	else righttext.innerHTML = "No, I'm right!";
}

rightbutton1.addEventListener('click', change_right_text);
rightbutton2.addEventListener('click', change_right_text);


// Part 2
var hoverbox = document.getElementById('hoverbox');

var hover_alert = function(e){
	alert("Hey, I told you not to hover over me!");
}

hoverbox.addEventListener('mouseover', hover_alert);


// Part 3
var header = document.getElementById('header');
var user = document.getElementById('user');
var email = document.getElementById('email');
var pass = document.getElementById('pass');
var submit = document.getElementById('submit');


var check_info = function(e){
	if ( pass.value != "123456") alert("Wrong Pass");
	else{
		header.innerHTML = "Correct Info";
	}
}

submit.addEventListener('click', check_info);