function escapeRegExp(s) {
    return s.replace(/[.*+?^${}()|[]\]/g, '\$&');
}

function add(numbers) {
    if (!numbers) return 0;

    let nums = numbers;
    let splitter = /,|\n/;

    if (numbers.startsWith('//')) {
        const newlineIndex = numbers.indexOf('\n');
        const delim = numbers.slice(2, newlineIndex);
        nums = numbers.slice(newlineIndex + 1);
        splitter = new RegExp(escapeRegExp(delim));
    }

    const parts = nums.split(splitter).map(p => p.trim()).filter(p => p !== '');
    const ints = parts.map(p => Number(p));

    const negatives = ints.filter(n => n < 0);
    if (negatives.length) {
        return `negative numbers not allowed ${negatives.join(',')}`;
    }

    return ints.reduce((s, n) => s + n, 0);
}

module.exports = { add };