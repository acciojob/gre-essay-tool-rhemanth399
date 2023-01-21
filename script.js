//your code here
let input=document.getElementById('evaluatedText')
let heading3=document.getElementById('wordCount')
input.addEventListener('input',essay)
function essay() {
	heading3.innerHTML=input.value.length
}