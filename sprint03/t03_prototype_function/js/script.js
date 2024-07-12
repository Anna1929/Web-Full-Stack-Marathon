String.prototype.removeDuplicates = function() {
    return this.split(/\s+/)
                .filter((item, index, another) => another.indexOf(item) === index)
                .join(' ')
                .trim();
};