function changeBg(){
	var buttonId = this.id; //觸發事件的這個元件為this
	var target = document.getElementById(buttonId + 'Div');//取出html中取出第一個符合buttonId+'Div'的元件 即div 存到target中
	/*if(target){
		if (buttonId === 'block1') {
		target.style.backgroundColor = 'yellow';
		}
		else if(buttonId === 'block2'){
		target.style.backgroundColor = 'orange';
		}
		else {
		target.style.backgroundColor = 'green';
		}
	}//if(target)的意思是 如果target不是Null 就會執行下列的行為 則target = true; 也可以改成相反 如：!target 代表target裡面是不是沒東西 若真的是null 則為true
 	else{
		alert('No element found: ' + buttonId + 'Div')
	}*/


	if(!target){
		alert('No element found: ' + buttonId + 'Div')
	}
 	else{
		/*if (buttonId === 'block1') {
		target.style.backgroundColor = 'yellow';
		}
		else if(buttonId === 'block2'){
		target.style.backgroundColor = 'orange';
		}
		else {
		target.style.backgroundColor = 'green';
		}*/
		if (buttonId === 'block1' ||  buttonId === 'block2'){
		target.style.backgroundColor = 'yellow';
		}
		else{
			target.style.backgroundColor = 'green';
		}// ||(shift+\)代表OR ; &&代表AND(AND = A && B)
		//A || (B && C)
	}
}


window.onload = function(){
	//let condition = 4 > 5; //判斷式 T/F是boolean value
	//< , >= , <=, != 代表不相等 且會做類型轉換
	//let condition = '5' == 5; //==代表"是否相等" 不會管兩邊data型態是否相同 若是字串和數字相比較 他會嘗試把這個字串轉成數字來進行比較
	//let condition = '5' === 5; //三個等號則避免了資料類型的轉換 則文字和數字就不會相等 通常會用這種方式寫判斷式 最為保守
	//let condition = '5' !== 5 ; //這個判斷式有把類型考慮進去 即類型不會轉換 則output = True (因字串五不等於數字五)
/*
	if (condition) {
		console.log('true');
	}
	else {
		console.log('false');
	}*/
	var buttons = document.getElementsByTagName('button');
	buttons[0].addEventListener('click', changeBg);
	buttons[1].addEventListener('click', changeBg);
	buttons[2].addEventListener('click', changeBg);
	buttons[3].addEventListener('click', changeBg);
};
