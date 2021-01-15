$(document).ready(function() {
	// use .on() to add an event listener to DIVs
	// use $(document).width() to obtain viewport width
	// use $(document).height() to obtain viewport height
	// use Math.random() to get a random number between 0 and 0.99999999999...
	$('div').on('mouseenter',function (){
		var hori = $(window).width() - Math.random();
		var vert = $(window).height() - Math.random();
		$(this).animate({left:hori, top:vert},400);
	});
});

//再去看老師解答