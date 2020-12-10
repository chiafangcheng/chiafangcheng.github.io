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



function changeBg1(){
	resetBg();
	var em = document.getElementById('Item1');
	em.style.backgroundColor = 'blue';
};

function changeBg2(){
	resetBg();
	var em = document.getElementById('Item2');
	em.style.backgroundColor = 'blue';
};

function changeBg3(){
	resetBg();
	var em = document.getElementById('Item3');
	em.style.backgroundColor = 'blue';
};

function changeBg4(){
	resetBg();
	var em = document.getElementById('Item4');
	em.style.backgroundColor = 'blue';
};

window.onload = function(){
	var em = document.getElementById('Item1');
	em.addEventListener('click',changeBg1);
	em = document.getElementById('Item2');
	em.addEventListener('click',changeBg2);
	em = document.getElementById('Item3');
	em.addEventListener('click',changeBg3);
	em = document.getElementById('Item4');
	em.addEventListener('click',changeBg4);
};