exports.firstUpper = (string) => {
    if (!string) {
        return '';
    } else {
        string = string.trim();
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }
}