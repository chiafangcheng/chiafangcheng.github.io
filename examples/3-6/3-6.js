//建立變數時可以直接建立物件 用{}
var profile = {
	name: 'TY Chen',
	age:39,
	affiliation: 'NTHU',
	height: 180,
	weight: 72,
	contact: {
		home:23243545,
		mobile: [23456789012, 9098765432, 9435678965]
	} //把陣列放入profile {}代表contact的內容也是一個物件
};

console.log(profile.name);//取得物件(profile)中的資料(name) 用句點或是方括號
console.log(profile['name']);

profile.gender = 'male'; //用來增加物件內容
console.log(profile.gender);

console.log(profile.contact.home);
console.log(profile.contact.mobile[1]);

console.log(profile.name.length); // 每個變數也是一個物件 自己裡面有features
console.log(profile.contact.mobile.length);//這個長度指的是這個陣列裡面有多少筆資料


