function transformation() {
    let element = document.getElementById('hero');
    let all = document.getElementById('lab');

    if (element.innerText === 'Bruce Banner') {
        element.innerText = 'Hulk';
        element.style.fontSize = '130px';
        element.style.letterSpacing = '6px';
        all.style.backgroundColor = '#70964b';
    } else {
        element.innerText = 'Bruce Banner';
        element.style.fontSize = '60px';
        element.style.letterSpacing = '2px';
        all.style.backgroundColor = '#ffb300';
    }
}