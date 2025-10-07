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

    const parts = nums.split(splitter);
    return parts.reduce((sum, n) => sum + Number(n), 0);
}

module.exports = { add };