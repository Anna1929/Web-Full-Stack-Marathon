exports.calculateTime = function(){
    let date = new Date('1939-01-01');
    let now = new Date();

    let years = now.getFullYear() - date.getFullYear();
    let months = now.getMonth() - date.getMonth();
    let days = now.getDate() - date.getDate();

    if (months < 0) {
        years--;
        months += 12;
    }

    if (days < 0) {
        months--;
        days += 30;
    }

    return {
        years: function() { return years; },
        months: function() { return months; },
        days: function() { return days; }
    };
}