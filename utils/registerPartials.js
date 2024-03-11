const handlebars = require('handlebars');
const fs = require('fs');
const path = require('path');

const header = fs.readFileSync(path.join(__dirname, '../views/partials/header.handlebars'), 'utf-8');
const footer = fs.readFileSync(path.join(__dirname, '../views/partials/footer.handlebars'), 'utf-8');

function registerHBPartials() {
    handlebars.registerPartial('header', header);
    handlebars.registerPartial('footer', footer);
    return true;
}

module.exports = registerHBPartials;