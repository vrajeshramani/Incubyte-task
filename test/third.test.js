const { add } = require('../src/stringCalculator');

test('two numbers comma-separated return their sum', () => {

    const result = add('1,4');
    console.log('Result test case 3 :', result);
    expect(result).toBe(5);
});