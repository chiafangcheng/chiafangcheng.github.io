/*
function changePosition(){
	var buttonId = this.id;
	var target = document.getElementById(buttonId);
	var nonTargets = document.getElementById();

		if(target){
		target.style.top = '-20px';
		nonTargets.style.opacity = .5;

		
	}
	
};
*/


function changePosition(){
	var buttonId = this.id;
	var imgs = document.getElementsByTagName('img');
	for (var i = 0; i < imgs.length; i++){
		var img = imgs[i];
		if (img.id === buttonId){
			img.style.top = '-20px';
			img.style.opacity='1'; //for reset
		}
		else{
			img.style.opacity = '0.5';
			img.style.top = '0px'; // for reset
		}
	}
};

//var nonTargets = document.getElementsByTagName('img'); nonTargets.style.opacity = .5;

window.onload = function(){
	var buttons = document.getElementsByTagName('button');
	for (var i = 0; i < buttons.length; i++){
		var button = buttons[i];
		button.addEventListener('click', changePosition);
	}
};