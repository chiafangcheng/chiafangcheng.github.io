$(document).ready (function(){
	$('nav > span').on('click', function(){
		var displayed = $(this).siblings().eq(0).css('display') === 'block'; //displayed儲存的判斷的結果 即True or False
		if(displayed) {
			$(this).siblings().css('display','none');
		}
		else{
			$(this).siblings().css('display', 'block');
		}
	});

});