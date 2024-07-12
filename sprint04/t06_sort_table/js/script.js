const heroes = [
    { name: 'Black Widow', strength: 150, age: 35 },
    { name: 'Captain America', strength: 300, age: 25 },
    { name: 'Hulk', strength: 600, age: 42 },
    { name: 'Spider-Man', strength: 175, age: 18 },
    { name: 'Batman', strength: 220, age: 30 },
    { name: 'Thor', strength: 500, age: 50 },
    { name: 'Iron Man', strength: 400, age: 35 },
    { name: 'Superman', strength: 750, age: 28 },
    { name: 'Aquaman', strength: 150, age: 45 },
    { name: 'Flash', strength: 200, age: 24 }
]

let place = document.getElementById('placeholder');
place.innerHTML = '';
let notifications = document.getElementById('notification');

let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');
let tr = document.createElement('tr');
let th1 = document.createElement('th');
let th2 = document.createElement('th');
let th3 = document.createElement('th');

th1.innerText = 'Name';
th2.innerText = 'Strength';
th3.innerText = 'Age';

heroes.forEach(hero => {
    let row = document.createElement('tr');
    row.innerHTML = `
        <td>${hero.name}</td>
        <td>${hero.strength}</td>
        <td>${hero.age}</td>
    `;
    tbody.appendChild(row);
});

tr.appendChild(th1);
tr.appendChild(th2);
tr.appendChild(th3);
thead.appendChild(tr);
table.appendChild(tbody);
table.appendChild(thead);
place.appendChild(table);

const headers = Array.from(document.querySelectorAll('th'));
headers.forEach(((header) => {
    header.addEventListener('click', () => {
        const index = headers.indexOf(header);
        const isAscending = header.classList.contains('asc');
        const sortHero = heroes
            .sort((a, b) => {
                const key = Object.keys(a)[index];
                return a[key] > b[key] ? 1 : -1;
            });

        if (isAscending) {
            sortHero.reverse();
            header.classList.remove('asc');
            header.classList.add('desc');
        } else {
            header.classList.remove('desc');
            header.classList.add('asc');
        }

        while (tbody.firstChild) {
            tbody.removeChild(tbody.firstChild);
        }

        sortHero.forEach(hero => {
            let row = document.createElement('tr');
            row.innerHTML = `
                <td>${hero.name}</td>
                <td>${hero.strength}</td>
                <td>${hero.age}</td>
            `;
            tbody.appendChild(row);
        });

        const parameter = header.textContent;
        const order = isAscending ? 'DESC' : 'ASC';
        notifications.innerText = `Sorting by ${parameter}, order: ${order}`;
    });
}));
