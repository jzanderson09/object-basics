const palindromes = function (str) {
    let result = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    let reverse = result.split('').reverse().join('');
    return result === reverse;
}

// Do not edit below this line
module.exports = palindromes;
