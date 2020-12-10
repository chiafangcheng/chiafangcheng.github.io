function resetBg(){
	var em = document.getElementById('Item1');
	em.style.backgroundColor = 'red';
	var em = document.getElementById('Item2');
	em.style.backgroundColor = 'red';
	var em = document.getElementById('Item3');
	em.style.backgroundColor = 'red';
	var em = document.getElementById('Item4');
	em.style.backgroundColor = 'red';
};

function changeBg (){
	resetBg();
	var emId = this.id;//代表被點到的元件 去取得他的id
	var em = document.getElementById(emId);
	em.style.backgroundColor = 'blue';
	//this.style.backgroundColor = 'blue';
};


window.onload = function (){
	var em = document.getElementById('Item1');
	em.addEventListener('click',changeBg);
	em = document.getElementById('Item2');
	em.addEventListener('click',changeBg);
	em = document.getElementById('Item3');
	em.addEventListener('click',changeBg);
	em = document.getElementById('Item4');
	em.addEventListener('click',changeBg);
};