const Comment = require('./Comment');

class AvengerQuote {
    constructor(id, author, quote, photo, publishDate, comments) {
        this.id = id;
        this.author = author;
        this.quote = quote;
        this.photo = photo;
        this.publishDate = publishDate;
        this.comments = comments.map(comment => new Comment(comment.date, comment.comment));
    }
}

module.exports = AvengerQuote;