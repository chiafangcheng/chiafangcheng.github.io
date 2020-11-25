//window 指的就是html視窗

var winWidth = window.innerWidth; //不包含網址列和卷軸寬度
var winHeight = window.innerHeight;

console.log(winWidth + '/' + winHeight);


//當所有網頁內容跑完後 會去讀取這個內容
window.onload = function (){
	//alert('Website is ready!');

	//window.document 指的是網頁的內容
	var websiteTitle = window.document.title;
	console.log(websiteTitle);
	var anotherTitle = document.title;
	console.log(anotherTitle); //因為document很常用 故可以省略windows.
};