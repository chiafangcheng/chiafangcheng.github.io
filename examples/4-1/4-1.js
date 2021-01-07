window.onlaod = function (){
	document.querySelectorAll('body > p:last-of-type'); //回傳的是陣列
	$('body > p:last-of-type');//和上一行一樣的意思

	var ems = $('body > p');
	console.log(ems[0].innerHTML);

	console.log($('body > p').eq(0).html());// = 上面那兩行 var ems = $('body > p'); console.log(ems[0].innerHTML);
	console.log($('body > p').eq(-1).html());//eq(-1)是從後面數過來之意 倒數第一個之意

	$('body > p').eq(1).html('Changed!');//改變目標元件html的內容

	console.log($('body > p.special').eq(1).html());



};
//$ = jQuery; eq = equal to 是指定陣列位置 和[]相同