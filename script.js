//your code here
const textbox = document.getElementById('evaluatedText');
const letterCountElement = document.getElementById('wordCount');

textbox.addEventListener('keyup', function() {
  const letterCount = textbox.value.length;
  letterCountElement.innerHTML = letterCount;
});