const fs = require('fs');
const xml2js = require('xml2js');
const AvengerQuote = require('./AvengerQuote');

class ListAvengerQuotes {
    constructor() {
        this.quotes = [];
    }

    addQuote(quote) {
        this.quotes.push(new AvengerQuote(quote.id, quote.author, quote.quote, quote.photo, quote.publishDate, quote.comments));
    }

    toXML(fileName) {
        const builder = new xml2js.Builder();
        const xml = builder.buildObject(this.quotes);
        fs.writeFileSync(fileName, xml);
    }

    async fromXML(fileName) {
        const parser = new xml2js.Parser();
        const data = fs.readFileSync(fileName);
        const result = await parser.parseStringPromise(data);
        this.quotes = result.quotes.map(quote => new AvengerQuote(quote.id, quote.author, quote.quote, quote.photo, quote.publishDate, quote.comments));
    }
}

module.exports = ListAvengerQuotes;