function checkBrackets(str) {
    if (typeof str !== 'string' || (!str.includes('(') && !str.includes(')'))) {
        return -1;
    }

    let leftBrackets = 0;
    let rightBrackets = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            leftBrackets++;
        } else if (str[i] === ')') {
            if (leftBrackets > 0) {
                leftBrackets--;
            } else {
                rightBrackets++;
            }
        }
    }

    return leftBrackets + rightBrackets;
}