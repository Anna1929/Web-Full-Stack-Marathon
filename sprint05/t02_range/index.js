exports.checkDivision = (start = 1, end = 60) => {
    for (let i = start; i <= end; i++) {
        let str = 'The number ' + i;
        if (i % 2 === 0) {
            str += ' is divisible by 2';
        }
        if (i % 3 === 0) {
            if (i % 2 === 0 || i % 10 === 0) {
                str += ',';
            }
            str += ' is divisible by 3';
        }
        if (i % 10 === 0) {
            if ((i % 2 === 0 || i % 3 === 0)) {
                str += ',';
            }
            str += ' is divisible by 10';
        }
        if (i % 2 !== 0 && i % 3 !== 0 && i % 10 !== 0) {
            str += ' -';
        }
        console.log(str);
    }
}