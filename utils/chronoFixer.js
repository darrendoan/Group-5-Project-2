/* eslint-disable no-unused-vars */

/**
 * Functions
 * - inferTimezone(ip) - Return the timezone of the user relative to their requesting IP
 * - getTime(timestamp, offset) - Return a string with the timezone represented relative to the given timezone
 */

const NodeGeolocation = require('nodejs-geolocation').default;
const moment = require('moment-timezone');
const geo = new NodeGeolocation('Spawnpoint');
require('dotenv').config();

geo.ipGeolocationOptions = {
    service: 'ipinfo',
    key: process.env.GEOIP_KEY
}

async function inferTimezone(ip) {
    let tz = 'Australia/Sydney';
    if (ip !== '::1' && ip !== '127.0.0.1') {
        tz = (await geo.getLocation(ip)).timezone
    }
    return tz;
}

function getTime(timestamp, offset) {
    const tz = moment.utc(timestamp).tz(offset);
    return {
        raw: tz.format(),
        formatted: {
            date: tz.format('DD/MM/YYYY'),
            time: tz.format('hh:mm A'),
            full: tz.format('dddd Do MMMM YYYY, hh:mm A')
        },
        unit: {
            day: tz.format('DD'),
            month: tz.format('MM'),
            year: tz.format('YYYY'),
            hour12: tz.format('hh'),
            hour24: tz.format('HH'),
            minute: tz.format('mm'),
            meridiem: tz.format('A')
        }
    }
}

module.exports = {
    inferTimezone,
    getTime
}