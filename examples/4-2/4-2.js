$(document).ready(function(){
	/*
	document.querySelectorAll('body > button')[0].addEventListener('click', function(){
		alter('Button 1 clicked!');
	});*/

	$('body > button').eq(0).on('click', function(){
		alert('Button 1 clicked!');
		$(this).off('click'); //指定要關掉的evenListener的類型 故按第二次按鈕就不會有反應
	});
	$('body > button').eq(1).on('click', function(){
		alert('Button 2 clicked!');
		$(this).off('click'); 
	});
}); 

// $(document).ready () = window.onload  唯一差異是在網頁檔案內容是否已經讀取好了 jQuery是網頁在讀取時是先讀取網頁結構 不用等圖片的讀取才去執行js的程式碼
//on = addEventListener