class HardWorker {
    constructor(name, age, salary) {
        this._name = name;
        this._age = age;
        this._salary = salary;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (age >= 1 && age < 100) {
            this._age = age;
        }
    }

    get salary() {
        return this._salary;
    }

    set salary(salary) {
        if (salary >= 100 && salary < 10000) {
            this._salary = salary;
        }
    }

    toObject() {
        return {
            name: this.name,
            age: this.age,
            salary: this.salary
        }
    }
}