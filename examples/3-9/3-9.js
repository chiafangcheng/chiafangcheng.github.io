window.onload = function (){
	var allDivs = document.getElementsByTagName('div');//他回傳的資料就會是一個陣列
	console.log(allDivs[0]);
	var allAudios = document.getElementsByTagName('audio');
	console.log(allAudios[0]);//will return undefined b/c there is no such element
};