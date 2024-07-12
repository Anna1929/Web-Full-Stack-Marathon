const houseMixin = {
    wordReplace(oldWord, newWord) {
        this.description = this.description.replace(oldWord, newWord);
    },

    wordInsertAfter(word, newWord) {
        this.description = this.description.split(word).join(word + ' ' + newWord);
    },

    wordDelete(word) {
        this.description = this.description.replace(word, '');
    },

    wordEncrypt() {
        this.description = this.description.replace(/[a-z]/gi, function(str) {
            return String.fromCharCode(str.charCodeAt(0) + (str.toLowerCase() < 'n' ? 13 : -13));
        });
    },

    wordDecrypt() {
        this.wordEncrypt();
    }
};