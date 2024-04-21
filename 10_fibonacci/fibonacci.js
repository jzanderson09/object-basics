const fibonacci = function(fib) {
    const fibNum = parseInt(fib);
    if (fibNum < 0) {
        return 'OOPS';
    }
    let firstNum = 0;
    let nextNum = 1;
    let lastNum;
    for (let i = 1; i <= fibNum; i++) {
        lastNum = firstNum + nextNum;
        firstNum = nextNum;
        nextNum = lastNum;
    }

    return firstNum;
};

// Do not edit below this line
module.exports = fibonacci;
