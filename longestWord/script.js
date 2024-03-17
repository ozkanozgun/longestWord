const sentenceInput = document.getElementById("sentence");
const findButton = document.getElementById("find");
const resultElement = document.getElementById("result");

findButton.addEventListener("click", () => {
  const sentence = sentenceInput.value;
  const longestWord = getLongestWord(sentence);
  resultElement.textContent = `The longest word is: ${longestWord}`;
});

function getLongestWord(sentence) {
  const words = sentence.split(" ");
  let maxLen = 0;
  let longestWord = "";

  for (const word of words) {
    const wordLen = word.length;
    if (wordLen > maxLen) {
      maxLen = wordLen;
      longestWord = word;
    }
  }

  return longestWord;
}
