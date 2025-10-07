const { add } = require('../src/stringCalculator');

test('supports newlines between numbers', () => {

    const result = add('1\n2,3');
    console.log('Result test case 5 :', result);
    expect(result).toBe(6);
});