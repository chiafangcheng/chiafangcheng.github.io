function change12(){
	var em = document.getElementById('item1').style.backgroundColor;
	var em2 = document.getElementById('item2').style.backgroundColor;
	document.getElementById('item1').style.backgroundColor = em2;
	document.getElementById('item2').style.backgroundColor = em;
	
};


function change23(){
	var em = document.getElementById('item2').style.backgroundColor;
	var em2 = document.getElementById('item3').style.backgroundColor;
	document.getElementById('item2').style.backgroundColor = em2;
	document.getElementById('item3').style.backgroundColor = em;
	
};



window.onload = function () {
	var em = document.getElementById('switch12');
	em.addEventListener('click',change12);
	em = document.getElementById('switch23');
	em.addEventListener('click',change23);

};