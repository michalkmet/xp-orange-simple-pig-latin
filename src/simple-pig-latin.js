function pigIt(str) {
  let result = '';
  let iterator = 0;
  for (const char of str) {
    if (!(char >= 'a' && char <= 'z') && !(char >= 'A' && char <= 'Z')) {
      return str;
    } else {
      if (iterator != 0) {
        result += char;
      }
    }
    iterator++;
  }
  result += str[0] + 'ay';
  return result;
}

module.exports = pigIt;
