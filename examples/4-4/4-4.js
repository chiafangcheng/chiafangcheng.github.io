$(document).ready(function(){
	$('body > button:first-of-type').on('click', function(){
		$('body > div').addClass('selected'); //透過加上類別標籤 來變成css已經設定好的樣式 我覺得這個很好 外觀應都在css function都放在jquery 一般排版放在html
	});
	$('body > button:last-of-type').on('click',function(){
		$('body > div').removeClass('selected');
	});
	
});