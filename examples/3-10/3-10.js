window.onload = function() {
	var allGroupEm = document.getElementsByClassName('group1');//回傳的是一筆陣列資料
	var groupEm = allGroupEm[0];
	console.log(groupEm.innerHTML);
	groupEm.innerHTML = 'Content changed!';//更改元件內容

	var idEm = document.getElementById('no6'); //這裡的element是沒有s的 故只會找到一個 這符合網頁的設計 因為不同物件id應當只有一個
	idEm.innerHTML = 'No 6 Changed!';

	idEm.style.color = 'red';

};