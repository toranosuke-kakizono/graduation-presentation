'use strict'


const collectionOfLi = document.getElementsByTagName("span");

for (const span of collectionOfLi) {
	span.addEventListener("mouseover", () => {
		span.style.transition = "font-size 0.5s";
		span.style.fontSize = "50px";
	});
	span.addEventListener("mouseleave", () => {
		span.style.transition = "font-size 0.5s";
		span.style.fontSize = "30px";
	});
}

const collectionOfb = document.getElementsByTagName("b");

for (const bElem of collectionOfb) {
	bElem.addEventListener("mouseover", () => {
		bElem.style.transition = "font-size 0.5s";
		bElem.style.fontSize = "50px";
	});
	bElem.addEventListener("mouseleave", () => {
		bElem.style.transition = "font-size 0.5s";
		bElem.style.fontSize = "30px";
	});
}


// span.addEventListener("mouseover", () => {
// 	span.style.transition = "font-size 0.5s";
// 	span.style.fontSize = "30px";
// });

// span.addEventListener("mouseleave", () => {
// 	span.style.transition = "font-size 0.5s";
// 	span.style.fontSize = "10px";
// });

// 文字を大きくする


// const popup = document.getElementById("popup");

// popup.addEventListener("mouseleave", closePopup);


//  // ポップアップを開く関数
//  function openPopup() {
// 	document.getElementById("popup").style.display = "block";
// }

// // ポップアップを閉じる関数
// function closePopup() {
// 	document.getElementById("popup").style.display = "none";
// }