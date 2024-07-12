function* numberGenerator() {
    let res = 1;
    while (true) {
        let input = prompt(`Previous result: ${res}. Enter a new number:`);
        if (isNaN(Number(input))) {
            console.error('Invalid number!');
            break;
        } else if (input === null) {
            break;
        } else {
            res += Number(input);
            if (res > 10000) {
                res = 1;
            }
        }
        yield res;
    }
}

const gen = numberGenerator();
for (const value of gen) {
    console.log(`Result: ${value}`);
}