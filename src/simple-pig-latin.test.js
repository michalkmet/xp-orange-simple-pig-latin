const pigIt = require('./simple-pig-latin');

describe('hello', () => {
  it('should return hello', () => {
    expect(pigIt()).toBe('hello');
  });
});
