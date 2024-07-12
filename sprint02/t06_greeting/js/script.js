function name(yourName) {
    return yourName.charAt(0).toUpperCase() + yourName.slice(1).toLowerCase();
}

let firstName, lastName;

firstName = prompt('Enter your first name: ', '');
lastName = prompt('Enter your last name: ', '');

if (firstName.match(/^[a-zA-Z]+$/) || lastName.match(/^[a-zA-Z]+$/)) {
    firstName = name(firstName);
    lastName = name(lastName);

    alert(`Hello, ${firstName} ${lastName}!`);
    console.log(`Hello, ${firstName} ${lastName}!`);
} else {
    alert('Wrong input!');
    console.log('Wrong input!');
}