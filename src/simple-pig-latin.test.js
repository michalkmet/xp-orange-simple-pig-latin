const pigIt = require('./simple-pig-latin');

describe('User Story 1: Pig a one word max', () => {
  it("UAT1.1 When I pass 'a' I should see 'aay'", () => {
    expect(pigIt('a')).toBe('aay');
  });
  it("UAT1.2 When I pass 'ab' I should see 'baay'", () => {
    expect(pigIt('ab')).toBe('baay');
  });
  it("UAT1.3 When I pass 'Pig' I should see 'igPay'", () => {
    expect(pigIt('Pig')).toBe('igPay');
  });
  it("UAT1.4 When I pass '!' I should see '!'", () => {
    expect(pigIt('!')).toBe('!');
  });
});

describe('User Story 2: Pig two or more words', () => {
  it("UAT2.1 When I pass 'a b' I should see 'aay bay'", () => {
    expect(pigIt('a b')).toBe('aay bay');
  });
  it("UAT2.2 When I pass 'ab cd' I should see 'baay dcay'", () => {
    expect(pigIt('ab cd')).toBe('baay dcay');
  });
  it("UAT2.3 When I pass 'ab cd .' I should see 'baay dcay .'", () => {
    expect(pigIt('ab cd .')).toBe('baay dcay .');
  });
  it("UAT2.4 When I pass 'Hello world !' I should see 'elloHay orldway !'", () => {
    expect(pigIt('Hello world !')).toBe('elloHay orldway !');
  });
  it("UAT2.5 When I pass 'Pig latin is cool' I should see 'igPay atinlay siay oolcay''", () => {
    expect(pigIt('Pig latin is cool')).toBe('igPay atinlay siay oolcay');
  });
});
