class Human {
    constructor(firstName, lastName, gender, age, calories) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.calories = calories;
        setInterval(() => this.decreaseCalories(), 60000);
    }

    decreaseCalories() {
        this.calories -= 200;
        document.getElementById('calories').textContent = this.calories;
        if (this.calories < 0) {
            this.calories = 0;
            document.getElementById('calories').textContent = this.calories;
            document.getElementById('text').innerHTML = 'I\'m hungry';
        }
    }

    sleepFor() {
        let second = prompt('Enter the number of seconds to sleep');
        if (second && !isNaN(Number(second))) {
            document.getElementById('text').innerHTML = 'I\'m sleeping';
            setTimeout(() => {
                document.getElementById('text').innerHTML = 'I\'m awake now';
            }, second * 1000);
        } else {
            alert('Invalid input');
        }
    }

    feed() {
        if (this.calories > 500) {
            document.getElementById('text').innerHTML = 'I\'m not hungry';
        } else {
            document.getElementById('text').innerHTML = 'Nom nom nom';
            setTimeout(() => {
                this.calories += 200;
                document.getElementById('calories').textContent = this.calories;
                if (this.calories < 500) {
                    document.getElementById('text').innerHTML = 'I\'m still hungry';
                } else {
                    document.getElementById('text').innerHTML = 'I\'m not hungry';
                }
            }, 10 * 1000);
        }
    }

    turn() {
        if (this.calories > 500) {
            document.getElementById('text').innerHTML = 'I\'m turning into a superhero';
            document.getElementById('human').src = 'assets/images/ironman.png';
            document.getElementById('first').textContent = superhero.firstName;
            document.getElementById('last').textContent = superhero.lastName;
            document.getElementById('gender').textContent = superhero.gender;
            document.getElementById('age').textContent = superhero.age;
            document.getElementById('calories').textContent = superhero.calories;
            document.getElementById('hero_buttons').style.display = 'block';
        } else {
            document.getElementById('text').innerHTML = 'I\'m do not have enough calories';
        }
    }
}
class Superhero extends Human {
    constructor(firstName, lastname, gender, age, calories) {
        super(firstName, lastname, gender, age, calories);
    }

    fly() {
        document.getElementById('text').innerHTML = 'I\'m flying';
        setTimeout(() => {
            document.getElementById('text').innerHTML = 'I\'m not flying';
        }, 10 * 1000);
    }

    fightWithEvil() {
        document.getElementById('text').innerHTML = 'Khhhh-chh... Bang-g-g-g... Evil is defeated!';
    }
}

function updateHTML(human) {
    document.getElementById('first').textContent = human.firstName;
    document.getElementById('last').textContent = human.lastName;
    document.getElementById('gender').textContent = human.gender;
    document.getElementById('age').textContent = human.age;
    document.getElementById('calories').textContent = human.calories;
}

let human = new Human('Tony', 'Stark', 'male', 45, 500);
let superhero = new Superhero('Iron', 'man', 'male', 45, 700);
updateHTML(human);

document.getElementById('sleep').addEventListener('click', () => human.sleepFor());
document.getElementById('feed').addEventListener('click', () => human.feed());
document.getElementById('transform').addEventListener('click', () => human.turn());
document.getElementById('fly').addEventListener('click', () => superhero.fly());
document.getElementById('fight').addEventListener('click', () => superhero.fightWithEvil());

