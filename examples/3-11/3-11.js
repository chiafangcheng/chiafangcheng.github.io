//不用class or id的情形下找到我們要執行的元件

window.onload = function () {
	var em = document.querySelector('article > p');//使用css的selector 若article 下面有很多p 只會影響第一個
	//em.style.color = 'red';
	var ems = document.querySelectorAll('body p'); //會回傳所有符合這個條件的元件 且會以陣列儲存 body 和 p 之間用空格因為這個p不一定是body的immediate child
	ems[1].style.color = 'orange';


};