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
  if (!(processedWord >= 'a' && processedWord <= 'z') && !(processedWord >= 'A' && processedWord <= 'Z')) {
    return processedWord;
  }
  processedWord += word[0];
  processedWord += 'ay';
  console.log('processedWord: ', processedWord);
  return processedWord;

  // for (const char of word) {
  //   console.log('character: ', char);
  //   if (!(char >= 'a' && char <= 'z') && !(char >= 'A' && char <= 'Z')) {
  //     return str;
  //   } else {
  //     if (iterator != 0) {
  //       result += char;
  //     }
  //   }
  //   iterator++;
  // }
  // console.log('partial result: ', result);
  // result += str[0] + 'ay';
}

module.exports = pigIt;
