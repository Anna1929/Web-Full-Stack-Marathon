const filmTitles = document.querySelectorAll('.name p');
const filmInfos = document.querySelectorAll('.about');

function hideAllInfos() {
    filmInfos.forEach(info => info.style.display = 'none');
}

function showInfo(index) {
    filmInfos[index].style.display = 'flex';
}

filmTitles.forEach((title, index) => {
    title.addEventListener('click', () => {
        hideAllInfos();
        showInfo(index);
        filmTitles.forEach((title) => {
            title.style.borderLeft = '';
        });
        title.style.borderLeft = '5px solid blue';
    });
});

hideAllInfos();
showInfo(0);