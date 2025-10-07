function add(numbers) {
    if (!numbers) return 0;

    const parts = numbers.split(',');
    return parts.reduce((sum, n) => sum + Number(n), 0);
}

module.exports = { add };