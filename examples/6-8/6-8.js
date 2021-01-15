$(document).ready(function(){
	slideUpTarget();
	$(document).on('scroll',function(){
		slideUpTarget();
	});
});

function slideUpTarget (){
	var divs = $('div');
	var vh = $(window).height();
	var scrollTop = $(window).scrollTop(); //捲軸的位置離頂端多遠
	divs.each(function(){
		var divTop = $(this).offset().top;
		if(vh + scrollTop > divTop) {
			$(this).animate({top:0, opacity:1},1000);
		};
	});
};