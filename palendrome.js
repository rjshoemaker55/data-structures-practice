let letters = []; // stack

let word = 'tot';

let rword = '';

for (i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

for (i = 0; i < word.length; i++) {
  rword += letters.pop();
}

console.log(`Is ${word} a palindrome: ${word === rword ? 'yes' : 'no'}`);
