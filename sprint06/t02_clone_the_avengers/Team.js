const { Avenger } = require('./Avenger');

class Team{
    constructor(id, averArray) {
        this.id = id;
        this.avengers = averArray;
    }

    battle(damage) {
        this.avengers = this.avengers.filter(aver => {
            aver.hp -= damage.damage;
            return aver.hp > 0;
        });
    }

    clone() {
        return new Team(this.id, this.avengers.map(item => new Avenger(item.name, item.alias,
            item.gender, item.age, item.powers, item.hp)));
    }

    calculateLosses(teamForCalculate) {
        let counter = teamForCalculate.avengers.length - this.avengers.length ;
        if (counter) {
            console.log("In this battle we lost " + counter + " Avengers.");
        } else {
            console.log(`We haven't lost anyone in this battle!`);

        }
    }
}

module.exports = { Team };