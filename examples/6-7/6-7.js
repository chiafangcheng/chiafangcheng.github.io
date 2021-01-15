$(document).ready(function(){
	$('#animateDiv').on('click',function(){
		$('div').animate({left:'100px', opacity:1}, 1000);
	});
});

//but animate() cannot be applied to non-numbered 的object 他只能改變純數字設定 故顏色也不行
//animate({display:'none'},1000) -->does not work
//animate({font:'16px 16px sans-serif'},1000) -->does not work either
//但是jQuery UI 可以讓animate來改變背景或前景的顏色