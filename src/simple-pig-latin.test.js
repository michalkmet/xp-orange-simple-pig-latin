const pigIt = require('./simple-pig-latin');

describe('User Story 1: Pig a one word max', () => {
  it("UAT1.1 When I pass 'a' I should see 'aay'", () => {
    expect(pigIt('a')).toBe('aay');
  });
  it("UAT1.2 When I pass 'ab' I should see 'baay'", () => {
    expect(pigIt('ab')).toBe('baay');
  });
});
