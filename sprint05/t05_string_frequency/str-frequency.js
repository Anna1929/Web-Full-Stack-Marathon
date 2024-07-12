class StrFrequency {
    constructor(str) {
        this.str = str;
    }

    letterFrequencies() {
        let count = {};
        let letter = this.str.toUpperCase();
        for (let i = 0; i < letter.length; i++) {
            if (letter[i].match(/[a-z]/i)) {
                if (count[letter[i]]) {
                    count[letter[i]]++;
                } else {
                    count[letter[i]] = 1;
                }
            }
        }
        return count;
    }

    wordFrequencies() {
        if (!this.str.trim()) {
            return {' ': 1};
        }

        let count = {};
        let words = this.str.toUpperCase().match(/\b[a-z]+\b/gi);
        if (words) {
            words.forEach(word => {
                if (count[word]) {
                    count[word]++;
                } else {
                    count[word] = 1;
                }
            });
        } else {
            return ' ';
        }
        return count;
    }

    reverseString() {
        return this.str.split('').reverse().join('');
    }
}

module.exports = StrFrequency;