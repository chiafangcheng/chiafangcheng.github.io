var num1 = 2 + 5, num2 = 1 - 5 * 40;

//console.log(num1);
//console.log(num2);

var num3 = num1 + num2;

//console.log(num3);

var str = 'A number: ';

//console.log(str+num3); //this var's class is a string 

var test1 = 'Value: ' + 5 + 10;
var test2 = 'Value: ' + 5 * 10;
var test_2 =  5 + 10 + 'Value: ';//output = 15Value:
var test3 = 'Value: '+ 5 - 10;

//console.log(test1); //output = Value: 510 
//console.log(test2);//output = Value: 50 先乘除
//console.log(test3); // output = NAN (not a number)

var numAsNum = 5, numAsStr = '5';

//console.log(numAsNum + numAsStr); // output = 55
//console.log(numAsNum - numAsStr); // output = 0 (不是NAN 因為js先把他們轉成數字看看可不可以相減)

var str1 = 'This is a value.', str2 = 'value';

console.log(str1-str2); //output = NaN
