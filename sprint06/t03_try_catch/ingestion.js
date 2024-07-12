const { EatException } = require('./eat-exception');

class Ingestion {
    constructor(meal_type, id) {
        this.meal_type = meal_type;
        this.id = id;
        this.products = [];
        this.day_of_diet = 0;
    }

    setProduct(product) {
        this.products.push(product);
    }

    getProductInfo(productName) {
        const prod = this.products.find(product => product.name === productName);
        if (!prod) {
            throw new Error(`Product ${productName} not found.`);
        }
        return {
            name: prod.name,
            kcal: prod.kcal_per_portion
        };
    }

    getFromFridge(productName) {
        const product = this.products.find(p => p.name === productName);
        if (product && product.junkFood()) {
            throw new EatException(`To many calories in ${productName} for ${this.meal_type}`);
        }
    }
}

module.exports = { Ingestion };