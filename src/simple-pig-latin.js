function pigIt(str) {
  let result = '';
  let resultArr = [];
  let words = str.split(' ');
  for (const word of words) {
    console.log('word: ', word);
    resultArr.push(processWord(word));
  }
  console.log('result: ', result);
  return resultArr.join(' ');
}

function processWord(word) {
  console.log('processword function');
  let processedWord = '';

  for (let i = 0; i < word.length; i++) {
    console.log('word[i]: ', word[i]);
    if (i != 0 || word.length === 1) {
      processedWord += word[i];
    }
  }

  if (isNotAlphabet(processedWord)) {
    return processedWord;
  }

  processedWord = addEndOfWord(processedWord, word);
  console.log('processedWord: ', processedWord);
  return processedWord;
}

function isNotAlphabet(processedWord) {
  return !(processedWord >= 'a' && processedWord <= 'z') && !(processedWord >= 'A' && processedWord <= 'Z');
}

function addEndOfWord(processedWord, word) {
  if (word.length != 1) {
    processedWord += word[0];
  }
  processedWord += 'ay';
  return processedWord;
}

module.exports = pigIt;
