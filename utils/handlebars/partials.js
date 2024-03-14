const handlebars = require('handlebars');
const fs = require('fs');
const path = require('path');

function getFile(filename) {
    return fs.readFileSync(path.join(__dirname, '../../views/partials/', filename), 'utf-8');
}

const header = getFile('header.handlebars');
const footer = getFile('footer.handlebars');
const eventTile = getFile('event-tile.handlebars');

function registerHBPartials() {
    handlebars.registerPartial('header', header);
    handlebars.registerPartial('footer', footer);
    handlebars.registerPartial('event-tile', eventTile);
    return true;
}

module.exports = registerHBPartials;