var num;//整份JS都會用到的才用var
{
	num = 5;
	anotherNum = 8; //output= called before declaration
	let anotherNum = 10;//只限定在called block內執行 var不會只限制在called block內執行
	//故當有一個變數你用完就不需要了 就用let 他就不會一直紀錄在電腦裡
	//called block內的東西會先執行 才會再去外層去做執行
}
console.log(num);
console.log(anotherNum);//if you use let, then the declared variable by let will not be found in the console.log outside the called block.