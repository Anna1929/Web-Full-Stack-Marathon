function concat(str1, str2) {
    if (str2 !== undefined) {
        return str1 + ' ' + str2;
    } else {
        let subFunction = function() {
            let str2 = prompt("Please enter a string");
            subFunction.count++;
            return str1 + ' ' + str2;
        }
        subFunction.count = 0;
        return subFunction;
    }
}