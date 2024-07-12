function sortEvenOdd(array) {
    array.sort(function (a, b) {
        if (a % 2 === 0 && b % 2 !== 0) {
            return -1;
        } else if (a % 2 !== 0 && b % 2 === 0) {
            return 1;
        } else {
            return a - b;
        }
    })
}