const { add } = require('../src/stringCalculator');

test('single number returns its integer value', () => {
    const result = add('1');
    console.log('Result test case 2 :', result); // This will now print
    expect(result).toBe(1);
});