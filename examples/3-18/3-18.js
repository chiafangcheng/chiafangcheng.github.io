window.onload = function (){
	var profile = {
		name:'TY Chen',
		age: 39,
		height: 180
	};
	for (var key in profile){
		console.log(key);
		console.log(profile[key]);//這個是在profile這個物件中取得每個欄位的資料
		console.log(profile.key);//這個是指在profile中拿到叫做key的變數的值 但是因為我們沒有這個欄位 故undefined

	}//意思是：我去建立一個迴圈 其中的物件叫做key 而key是來自於profile這個物件 這個迴圈會一直跑 跑到沒有欄位為止
};