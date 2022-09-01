const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
  //code here
  if (word == null) return undefined;
  return (startWord === word.slice(0,startWord.length) ? word : startWord);
}
module.exports = fillStartWord