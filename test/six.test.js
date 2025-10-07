const { add } = require('../src/stringCalculator');

test('supports newlines between numbers', () => {

    const result = add('//;\n1;2;\n3');
    console.log('Result test case 6 :', result);
    expect(result).toBe(6);
});