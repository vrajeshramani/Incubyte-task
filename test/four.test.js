const { add } = require('../src/stringCalculator');

test('handles any amount of numbers', () => {
    const result = add('1,2,3,4');
    console.log('Result test case 4 :', result);
    expect(result).toBe(10);
});