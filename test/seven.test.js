const { add } = require('../src/stringCalculator');

test('throws on negative numbers and lists them in the message', () => {

    const result = add('1,-2,3,-4,5');
    console.log('Result test case 7 :', result);
    expect(result).toBe('negative numbers not allowed -2,-4');
});