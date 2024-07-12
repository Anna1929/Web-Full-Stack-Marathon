document.addEventListener('DOMContentLoaded', function() {
    const addStorage = document.querySelector('.add');
    const deleteStorage = document.querySelector('.clear');
    const noteArch = document.getElementById('archive');
    const text = document.getElementById('noteF');

    addStorage.addEventListener('click', function() {
        if (text.value.trim() === '') {
            alert("It's empty. Try to input something in \"Text input\".");
        } else {
            const date = new Date();
            const year = String(date.getFullYear()).slice(-2);
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            const hours = String(date.getHours()).padStart(2, '0');
            const minutes = String(date.getMinutes()).padStart(2, '0');
            const seconds = String(date.getSeconds()).padStart(2, '0');
            const formattedDate = '[' + year + '.' + month + '.' + day
                + ', ' + hours + ':' + minutes + ':' + seconds + ']';
            const newNote = '--> ' + text.value + ' ' + formattedDate;
            const noteName = 'note' + new Date().getTime();
            localStorage.setItem(noteName, newNote);
            updateLocalStorage();
        }
    });

    deleteStorage.addEventListener('click', function() {
        if (confirm('Are you sure?')) {
            localStorage.clear();
            updateLocalStorage();
        }
    });

    function updateLocalStorage() {
        let allMessages = [];
        const keys = Object.keys(localStorage).sort();
        for(let i = 0; i < keys.length; i++) {
            let noteName = keys[i];
            if(noteName.startsWith('note')) {
                allMessages.push(localStorage.getItem(noteName));
            }
        }

        noteArch.textContent = allMessages.join('\n') || '[Empty]';
        noteArch.rows = allMessages.length || 1;
    }
    updateLocalStorage();
});