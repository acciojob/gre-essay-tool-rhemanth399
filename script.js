//your code here

const textbox = document.getElementById("evaluatedText");
const wordCount = document.getElementById("wordCount");

textbox.addEventListener("input", () => {
  wordCount.textContent = textbox.value.split(" ").filter(x => x.length > 0).length;
});