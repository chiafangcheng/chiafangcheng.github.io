function calcAdd(x,y) {
	var result = 0;
	result = 'The sum of ' + x + ' and ' + y + ' is '+ (x+y);
	return result;
};

function calcSubstr(x,y) {
	var result = 0;
	result = 'The result of ' + y + ' minus ' + x + ' is '+ (x-y);
	return result;
}

function calcMulti(x,y) {
	var result = 0;
	result = 'The product of ' + x + ' and ' + y + ' is '+ (x*y);
	return result;
}

function calcDivide(x,y) {
	var result = 0;
	result = 'The result of ' + x + '/' + y + ' is '+ (x/y);
	return result;
}
//老師的解法//
function add(x,y){
	var result = x + y;
	var msg = 'The sum of '+x+' and '+y+ ' is '+result;
	return msg;
};

//


var basicMath = {
	add: calcAdd,
	substract: calcSubstr ,
	multiply: calcMulti,
	divide: calcDivide
};

console.log(basicMath.add(10,21));//The sum of 10 and 21 is 31.
console.log(basicMath.substract(10, 21)); // The result of 21 minus 10 is 11.
console.log(basicMath.multiply(5,17)); //The product of 5 and 17 is 85.
console.log(basicMath.divide(80 , 4)); // The result of 80 / 4 is 20.