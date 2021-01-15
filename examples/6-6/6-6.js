$(document).ready(function(){
	$('#hideDiv').on('click',function(){
		$('div').hide(1000);
	});
	$('#showDiv').on('click',function(){
		$('div').show(2000);
	});
});

//hide(2000)-->2000代表duration ms