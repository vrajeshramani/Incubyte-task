const { add } = require('../src/stringCalculator');

test('empty string returns 0', () => {
    const result = add('');
    console.log('Result test case 1:', result);
    expect(result).toBe(0);
});