$(document).ready(function(){
	$('nav > div').on('click',function(){
		//$('nav > div > div').css('display','none');//一開始所有的items收起來 這樣就可以把沒有點到的items收起來
		var display = $(this).children().eq(0).css('display'); //因為我們items的display都是一樣 故只要拿地一個出來就好 用eq(0)
		if(display === 'none') {
			$('nav > div > div').css('display','none');
			$(this).children().css('display','block');
		}
		else{
			$(this).children().css('display','none');
		}
	});

});
//這個this對應到的是整個div的範圍 涵蓋了items
//可以加children('div')
//會有擠壓現象是因為當diplay籌為block後 整行寬度變高 因此incline-block對齊了下緣 故會擠壓下移
//把a設成block 就可以不用div
//.children()是取immediate children