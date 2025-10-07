const { add } = require('../src/stringCalculator');

test('supports custom delimiter specified like //;\n1;2;\n3', () => {

    const result = add('//;\n1;2;\n3');
    console.log('Result test case 6 :', result);
    expect(result).toBe(6);
});