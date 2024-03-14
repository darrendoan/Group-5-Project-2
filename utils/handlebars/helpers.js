const { getTime } = require('../chronoFixer');

module.exports = {
    getFormattedStamp: function (time, offset, type = 'full', addOffset = false) {
        const stamp = getTime(time, offset);
        let output = "";

        switch (type) {
            case 'dateTime':
                output = stamp.formatted.dateTime;
                break;
            case 'date':
                output = stamp.formatted.date;
                break;
            case 'time':
                output = stamp.formatted.time;
                break;
            default:
                output = stamp.formatted.full;
        }

        if (addOffset) {
            output += ` ${stamp.unit.offset}`;
        }

        return output;
    }
}