function changeAllBgs (){
	var targets = document.getElementsByTagName('div');
	for (var index = 0, index < targets.length ; index++){
		var div = targets[index];
		if(div.id !== 'noChange'){
			div.style.backgroundColor = 'green';
		}

		
	}//index這裡想指向的是陣列的位置 陣列的位置是從0開始算 
	//targets.length會有四個 但是index的最後一個陣列位置是長度-1，故一定要用小於 而非小於等於
}



window.onload = function (){
	/*
	for(loop variable ; loop condition ; loop action) {

	}//loop var = 計數器;loop condition = 讓迴圈發生的情形 ;loop action = 迴圈完成後進行的動作
	*/

	/*
	for (var counter = 1; counter <= 10; counter++){
		console.log(counter);

	}//counter++ -> counter = counter + 1
	*/

	//無限迴圈 不要跑！for Demo only
/*
	for (var counter = 1; counter <= 10; counter--) {
		console.log(counter);
	}
*/
	//不會執行的迴圈
/*	
	var counterB = 100;
	for(var counter = 1 ; counterB <= 10; couner++){

	}

	//累加錯變數 也會成無線迴圈
	var counterB = 100;
	for(var counter = 1 ; counter <= 10; counerB++){

	}
*/
	var button = document.getElementById('changeAll');
	button.addEventListener('click', changeAllBgs);	
};

