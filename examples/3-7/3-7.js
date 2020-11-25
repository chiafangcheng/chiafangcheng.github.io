//actionCompleted();  //function放在哪裡都會被優先呼叫

function actionCompleted () {
	alert('Completed!');
}

//actionCompleted(); 


//actionCompletedAgian(); //Uncaught TypeError: actionCompletedAgian is not a function
var actionCompletedAgian = function () {
	alert('Completed agian!');
};

//actionCompletedAgian(); //如果是用變數建立function 則不會優先執行

function popupMsg (msg) {
	var finalMsg = 'Site message: ' + msg;
	alert(finalMsg);
}; //()裡面是說這個功能裡面會接受到一筆資料 叫做msg

//popupMsg('Test!');
//popupMsg('Warning!');

function userMsg(name, msg = 'nothing') {
	var finalMsg = name + ' says: '+msg;
	alert(finalMsg);
};

//userMsg('Victor', 'Surprise!'); //Surprise會蓋過預設值 也就是nothing的部分
//userMsg('Victor');

function complexCalc (x , y){
	var result = 0; //這個是我們先建立一個變數 等一下要要儲存變數的 先不給起始值也沒關係
	result = x*y;
	result = result/(x-y);
	result = result*y-x;
	return result;
}

//var finalResult = complexCalc(5,10);
//alert(finalResult);

var demoFuncs = {
	popupMsgFunc: popupMsg, //這個物件中的popupMsgFunc這個欄位 對應到的就是popupMsg這個function
	userMsgFunc: userMsg,
	complexCalcFunc: complexCalc
	directFunc: function (){
		alert('Direct!')
	}

};

demoFuncs.userMsgFunc('Victor','I am calling a function in a object.');