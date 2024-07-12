let begin, end;

begin = prompt("Enter the begin of the range", '1');
end = prompt("Enter the end of the range", '100');

function checkDivision(beginRange, endRange) {
    for (let i = beginRange; i <= endRange; i++) {
        let str = '';
        if (i % 2 === 0 && i % 3 === 0 && i % 10 === 0) {
            str = ' is even, a multiple of 3, a multiple of 10';
        } else if (i % 2 === 0 && i % 3 === 0) {
            str = ' is even, a multiple of 3';
        } else if (i % 2 === 0 && i % 10 === 0) {
            str = ' is even, a multiple of 10';
        } else if (i % 3 === 0 && i % 10 === 0) {
            str = ' a multiple of 3, a multiple of 10';
        } else if (i % 2 === 0) {
            str = ' is even';
        } else if (i % 3 === 0) {
            str = ' is a multiple of 3';
        } else if (i % 10 === 0) {
            str = ' is a multiple of 10';
        } else {
            str = ' -';
        }

        console.log(i + str);
    }
}

checkDivision(begin, end);