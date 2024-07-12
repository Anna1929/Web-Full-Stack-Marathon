let li = document.querySelectorAll('#characters li');

li.forEach(li => {
    let liClass = li.getAttribute('class');
    if (!liClass || (liClass !== 'good' && liClass !== 'evil' && liClass !== 'unknown')) {
        li.setAttribute('class', 'unknown');
    }

    let data = li.getAttribute('data-element');
    if (!data) {
        li.setAttribute('data-element', 'none');
        data = 'none';
    }

    data = data.split(' ');
    let br = document.createElement('br');
    li.appendChild(br);
    data.forEach(element => {
        let div = document.createElement('div');
        div.classList.add('elem', element);

        if (element === 'none') {
            let line = document.createElement('div');
            line.classList.add('line');
            div.appendChild(line);
        }

        li.appendChild(div);
    });
})