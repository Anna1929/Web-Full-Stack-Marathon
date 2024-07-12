const validator = {
    set(target, prop, value) {
        if (prop === 'age') {
            if (!Number.isInteger(value)) {
                throw new TypeError('The age is not an integer');
            }
            if (value > 200 || value < 0) {
                throw new RangeError('The age is invalid');
            }
        }
        console.log(`Setting value '${value}' to '${prop}'`);
        target[prop] = value;
        return true;
    },

    get(target, prop) {
        if (prop in target) {
            console.log(`Trying to access the property '${prop}'...`);
            return target[prop];
        } else {
            return false;
        }
    }
}