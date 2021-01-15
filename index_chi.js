
$(document).ready(function(){
	$(window).scroll(function(){
		var nav = $('nav');
		nav.toggleClass('scrolled', $(this).scrollTop() > nav.height());
	});
});

/*why not??
$(document).ready(function(){
	$(document).scroll(function(){
		if($('nav').height() < $('window').scrollTop()){
			$('nav').removeClass('scrolled');
		};

	});
});
*/

$(document).ready(function(){
	$(window).scroll(function(){
		$('.hidme').each(function (i){
			var bottom_of_object = $(this).offset().top + $(this).outerHeight();
			var bottom_of_window = $(window).scrollTop() + $(window).height();
			if (bottom_of_window > bottom_of_object){
				$(this).animate({opacity: 1,top:0},700);
			};
		});
	});
});

/*
$(document).ready(function(){
	$(document).scroll(function(){
		var bottom_of_object = $('.hidme').offset().top + $('.hidme').outerHeight();
		var bottom_of_window = $(document).scrollTop() + $(document).height();
		if (bottom_of_window > bottom_of_object){
			$('.hidme').animate({'opacity':1},.5);
		};
	});
});
*/
$(document).ready(function(){
	$(window).scroll(function(){
		$('.hidmeWords').each(function (i){
			var bottom_of_object = $(this).offset().top + $(this).outerHeight();
			var bottom_of_window = $(window).scrollTop() + $(window).height();
			if (bottom_of_window > bottom_of_object){
				$(this).animate({'opacity': 1},400);
			};
		});
	});
});