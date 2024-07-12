const normal = require('./normal');

exports.calculateTime = function() {
    const normalT = normal.calculateTime();

    const totalDays = (normalT.years() * 365.25)
        + (normalT.months() * 30.44) + normalT.days();
    const totalQDays = Math.round(totalDays / 7);

    const qYears = Math.floor(totalQDays / 365.25);
    const qMonths = Math.floor((totalQDays % 365.25) / 30.44);
    const qDays = Math.round((totalQDays % 365.25) % 30.44);

    return [qYears, qMonths, qDays];
}