function forGuestList() {
    let guestList = new WeakSet();
    let guest1 = {name: "Alice"};
    let guest2 = {name: "Bob"};
    let guest3 = {name: "Charlie"};
    let guest4 = {name: "Dave"};
    let guest5 = {name: "Eve"};

    guestList.add(guest1);
    guestList.add(guest2);
    guestList.add(guest3);
    guestList.add(guest4);
    guestList.add(guest5);

    console.log('GuestList');
    console.log(guestList.has(guest1));
    console.log(guestList.delete(guest2));
    console.log(guestList.has(guest2));
}

function forMenu() {
    let menu = new Map();
    menu.set('Salad', 10);
    menu.set('Soup', 30);
    menu.set('Bread', 5);
    menu.set('Tea', 7);
    menu.set('Coffee', 12);

    console.log('Menu');
    for (let [dish, price] of menu) {
        console.log(`${dish}: $${price}`);
    }
    console.log(menu.has('Coffee'));
    console.log(menu.get('Coffee'));
    console.log(menu.size);
}

function forBank() {
    let bankVault = new WeakMap();
    let customer1 = {name: "Alice", age: 43};
    let customer2 = {name: "Bob", age: 24};
    let customer3 = {name: "Charlie", age: 58};
    let customer4 = {name: "Dave", age: 33};
    let customer5 = {name: "Eve", age: 19};

    bankVault.set(customer1, 1000);
    bankVault.set(customer2, 2034554);
    bankVault.set(customer3, 304325);
    bankVault.set(customer4, 40045);
    bankVault.set(customer5, 50543);

    console.log('BankVault');
    console.log(bankVault.has(customer1));
    console.log(bankVault.get(customer1));
    console.log(bankVault.delete(customer2));
    console.log(bankVault.has(customer2));
}

function forCoinCollection() {
    let coinCollection = new Set();
    coinCollection.add('Penny1');
    coinCollection.add('Penny2');
    coinCollection.add('Penny3');
    coinCollection.add('Penny4');
    coinCollection.add('Penny5');

    console.log('CoinCollection');
    console.log(coinCollection.has('Penny4'));
    console.log(coinCollection.delete('Penny3'));
    console.log(coinCollection.size);
    for (let coin of coinCollection) {
        console.log(coin);
    }
}

forGuestList();
forMenu();
forBank();
forCoinCollection();