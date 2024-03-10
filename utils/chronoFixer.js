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

// All configurable strings here in case you need to alter the parameters
const setting = {
    DEFAULT_TZ: 'Australia/Sydney',
    GEOIP_SERVICE: 'ipinfo',
    LOOPBACK: {
        IP6: '::1',
        IP4: '127.0.0.1'
    },
    MASK: {
        FULL: 'dddd Do MMMM YYYY, hh:mm A',
        DATE: 'DD/MM/YYYY',
        TIME: 'hh:mm A'
    },
    UNIT: {
        DAY: 'DD',
        MONTH: 'MM',
        YEAR: 'YYYY',
        HOUR24: 'HH',
        HOUR12: 'hh',
        MINUTE: 'mm',
        MERIDIEM: 'A'
    }
}

geo.ipGeolocationOptions = {
    service: setting.GEOIP_SERVICE,
    key: process.env.GEOIP_KEY
}

async function inferTimezone(ip) {
    let tz = DEFAULT_TZ;
    if (ip !== setting.LOOPBACK.IP6 && ip !== setting.LOOPBACK.IP4) {
        tz = (await geo.getLocation(ip)).timezone
    }
    return tz;
}

function getTime(timestamp, offset) {
    const tz = moment.utc(timestamp).tz(offset);
    return {
        raw: tz.format(),
        formatted: {
            date: tz.format(setting.MASK.DATE),
            time: tz.format(setting.MASK.TIME),
            full: tz.format(setting.MASK.FULL)
        },
        unit: {
            day: tz.format(setting.UNIT.DAY),
            month: tz.format(setting.UNIT.MONTH),
            year: tz.format(setting.UNIT.YEAR),
            hour24: tz.format(setting.UNIT.HOUR24),
            hour12: tz.format(setting.UNIT.HOUR12),
            minute: tz.format(setting.UNIT.MINUTE),
            meridiem: tz.format(setting.UNIT.MERIDIEM)
        }
    }
}

module.exports = {
    inferTimezone,
    getTime
}