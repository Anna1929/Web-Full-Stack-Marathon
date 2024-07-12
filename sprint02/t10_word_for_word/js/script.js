function addWords(obj, wrds) {
    let existing = obj.words.split(' ');
    let newWords = wrds.split(' ');

    for (let i = 0; i < newWords.length; i++) {
        if (existing.indexOf(newWords[i]) === -1) {
            existing.splice(existing.length, 0, newWords[i]);
        }
    }

    existing = existing.filter((word, index) => existing.indexOf(word) === index);
    obj.words = existing.join(' ');
    return obj;
}

function removeWords(obj, wrds) {
    let existing = obj.words.split(' ');
    let remove = wrds.split(' ');

    for (let i = 0; i < remove.length; i++) {
        let index = existing.indexOf(remove[i]);
        if (index !== -1) {
            existing.splice(index, 1);
        }
    }

    obj.words = existing.join(' ');
    return obj;
}

function changeWords(obj, oldWrds, newWrds) {
    let existing = obj.words.split(' ');
    let oldWords = oldWrds.split(' ');
    let newWord = newWrds.split(' ');

    for (let i = 0; i < oldWords.length; i++) {
        let index = existing.indexOf(oldWords[i]);
        if (index !== -1) {
            existing.splice(index, 1);
        }
    }

    for (let i = 0; i < newWord.length; i++) {
        if (existing.indexOf(newWord[i]) === -1) {
            existing.splice(existing.length, 0, newWord[i]);
        }
    }

    existing = existing.filter((word, index) => existing.indexOf(word) === index);
    obj.words = existing.join(' ');
    return obj;
}