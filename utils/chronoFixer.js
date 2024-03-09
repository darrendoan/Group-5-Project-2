/* eslint-disable no-unused-vars */

/**
 * Functions
 * - inferTimezone(ip) - Return the timezone of the user relative to their requesting IP
 * - getRelativeTimestamp(timestamp, offset) - Return a string with the timezone represented relative to the given timezone
 */

const NodeGeolocation = require('nodejs-geolocation').default;
const geo = new NodeGeolocation('Spawnpoint');
require('dotenv').config();

geo.ipGeolocationOptions = {
    service: 'ipinfo',
    key: process.env.GEOIP_KEY
}

async function inferTimezone(ip) {
    return (await geo.getLocation(ip)).timezone;
}

function getRelativeTimestamp(timestamp, offset) {
    
}

module.exports = {
    inferTimezone,
    getRelativeTimestamp
}