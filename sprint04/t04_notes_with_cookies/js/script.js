document.addEventListener('DOMContentLoaded', function() {
    const addCookie = document.querySelector('.add');
    const deleteCookie = document.querySelector('.clear');
    const noteArch = document.getElementById('archive');
    const text = document.getElementById('noteF');

    addCookie.addEventListener('click', function() {
        if (text.value.trim() === '') {
            alert("It's empty. Try to input something in \"Text input\".");
        } else {
            const newNote = '-->' + text.value;
            const cookieName = 'note' + new Date().getTime();
            setCookie(cookieName, newNote, 30);
            updateCookie();
        }
    });

    deleteCookie.addEventListener('click', function() {
        if (confirm('Are you sure?')) {
            deleteAllCookies();
            updateCookie();
        }
    });

    function setCookie(name, value, days) {
        let date = new Date();
        date.setDate(date.getDate() + (days * 24 * 60 * 60 * 1000));
        let expires = "; expires=" + date.toUTCString();
        document.cookie = name + "=" + value + expires + "; path=/";
    }

    function deleteAllCookies() {
        const allCookies = document.cookie.split(';');
        for(let i = 0; i < allCookies.length; i++) {
            let cookiePair = allCookies[i].split('=');
            let cookieName = cookiePair[0].trim();
            if(cookieName.startsWith('note')) {
                setCookie(cookieName, '', -1);
            }
        }
    }

    function updateCookie() {
        const allCookies = document.cookie.split(';');
        let allMessages = '';
        for(let i = 0; i < allCookies.length; i++) {
            let cookiePair = allCookies[i].split('=');
            let cookieName = cookiePair[0].trim();
            if(cookieName.startsWith('note')) {
                allMessages += (allMessages ? '\n' : '') + cookiePair[1];
            }
        }

        noteArch.textContent = allMessages.trim() ? allMessages : '[Empty]';
        noteArch.rows = allMessages.trim() ? allMessages.split('\n').length : 1;
    }

    updateCookie();
});