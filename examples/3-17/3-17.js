function changeBg () {
	var buttonId = this.id;
	var divs = document.getElementsByTagName('div');
	for(var i = 0; i < divs.length; i++){
		var div = divs[i];
		if(div.id === buttonId + 'Div'){
			div.style.backgroundColor = 'green';
			break; //stop the loop 在i還沒meet the condition前 就要停止
		}
	}
};


window.onload = function(){
	var buttons = document.getElementsByTagName('button');
	for(var index = 0; index < buttons.length ; index++){
		var button = buttons[index];
		button.addEventListener('click',changeBg);
	}
};