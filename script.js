//your code here
const textbox = document.getElementById('evaluatedText');
const letterCountElement = document.getElementById('letterCount');

textbox.addEventListener('keyup', function() {
  const letterCount = textbox.value.length;
  letterCountElement.innerHTML = letterCount;
});