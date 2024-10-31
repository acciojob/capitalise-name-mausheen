//your JS code here. If required.
let fname=document.querySelector("#fname");

fname.addEventListener("blur",()=>{
	let word=fname.value;

//console.log(word);

	let capital=word.toUpperCase();
	fname.value=capital;
	//console.log(capital);
})