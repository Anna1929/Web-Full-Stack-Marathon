// class Avenger {
//     constructor({ name, alias, gender, age, powers }) {
//         this.name = name;
//         this.alias = alias;
//         this.gender = gender;
//         this.age = age;
//         this.powers = powers;
//     }
//
//     toString() {
//         return `name: ${this.name}\ngender: ${this.gender}\nage: ${this.age}`;
//     }
//
//     stringPowers() {
//         return this.powers.join('\n');
//     }
//
//     call() {
//         return `${this.alias.toUpperCase()}\n${this.stringPowers()}`;
//     }
// }
//
// function avenger(properties) {
//     const aven = new Avenger(properties);
//
//     const avenCall = function () {
//         return aven.call();
//     }
//
//     avenCall.toString = function () {
//         return aven.toString();
//     }
//     return avenCall;
// }
//
// module.exports = { Avenger: avenger };

class addition extends Function
{
    constructor()
    {
        super('...args', 'return this.temp.alias.toUpperCase() + String.fromCharCode(10) + this.temp.powers.join(String.fromCharCode(10))');
        return this.temp = this.bind(this);
    }
}

module.exports.Avenger = class Avenger extends addition
{
    constructor({ name, alias, gender, age, powers })
    {
        super();
        this.heroName = name;
        this.alias = alias;
        this.gender = gender;
        this.age = age;
        this.powers = powers;
    }
    toString()
    {
        return "name: " + this.heroName + String.fromCharCode(10) + "gender: " + this.gender + String.fromCharCode(10) + "age: " + this.age;
    }
}