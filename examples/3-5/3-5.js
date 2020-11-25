var  numArray = [1,5,2,11,7];

//console.log(numArray);

var anArrayValue = numArray[0]; //the first number of the array is labled 0, not 1 可能是因為零是第一個自然數 或是他代表的是這個數字離陣列的頭的距離 零到這個陣列的頭的距離是零

//console.log(anArrayValue);

anArrayValue = numArray[1];//anArrayValue這個變數不是陣列 是存陣列的數字

//console.log(anArrayValue);

//js的陣列可以混合不同型態的資料
var mixedArray = [1, 'hello!', 'yes!', 9, 87]; // bad practice

var profile = ['TY Chen','NTHU',39,180,72] // Name, Affiliation, Age, Hieght, Weight

//console.log(profile[0]); //not intuitive

var phoneNumbers = [93712345, 98812345, 98712345]; //cannot use 0 #___ 不能零開頭 Good Practice

var emptyArray = [];
emptyArray[0] = 1;

//console.log(emptyArray);

emptyArray = [];
emptyArray[2] = 1; //Avoid!

console.log(emptyArray);

