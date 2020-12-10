function mouseEventMsg() {
	alert('Mouse event!');

};


window.onload = function () {
	var em = document.querySelector('body');
	em.addEventListener('click', function(){
		alert('Clicked!');
	});//addEventListener('事件類型', 偵測到事件後執行的功能(叫做called back function))
	em.addEventListener('mouseenter',mouseEventMsg);
	em.addEventListener('mouseleave',mouseEventMsg);
	em.removeEventListener('mouseleave');
};
