let length = 0;
let words = 0;
let vowels = 0;

const vowelSet = ["a", "e", "i", "o", "u"];

let sentence = prompt("Enter a sentence ending with a period ('.'):");

let inWord = false;

for (let i = 0; i < sentence.length; i++) {
  let ch = sentence[i];
  length++;

  if (vowelSet.includes(ch.toLowerCase())) {
    vowels++;
  }

  if (ch !== " " && ch !== "." && !inWord) {
    words++;
    inWord = true;
  } else if (ch === "") {
    inWord = false;
  }

  if (ch === ".") {
    break;
  }
}
