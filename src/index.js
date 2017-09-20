module.exports = function multiply(first, second) {
    var result = [];
    for (let k = 0; k < second.length + first.length + 1; k++) { result.push(undefined); }
    first = toNumbersArray(first).reverse();
    second = toNumbersArray(second).reverse();
    for (let i = 0; i < first.length; i++) {
        for (let j = 0; j < second.length; j++) {
            if (result[i + j] == undefined) result[i + j] = 0;
            result[i + j] += first[i] * second[j];
        }
    }
    for (let i = 0; i < result.length - 1; i++) {
        if (result[i + 1] == undefined) result[i + 1] = 0;
        result[i + 1] += Math.floor(result[i] / 10);
        result[i] %= 10;

    }

    result.reverse();
    return trimNumber(result.filter(elem => elem == undefined ? false : true).join(''));
}

function trimNumber(s) {
    while (s.substr(0, 1) == '0' && s.length > 1) { s = s.substr(1, 9999); }
    return s;
}

function toNumbersArray(str) {
    return str.split('').map(value => parseInt(value));
}



// length = size_a + size_b + 1;

// for (int ix = 0; ix < size_a; ix++)
//    for (int jx = 0; jx < size_b; jx++)
//        c[ix + jx - 1] += a[ix] * b[jx];



// while (c[length] == 0)
//    length-- ;