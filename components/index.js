/** Re-export components */
const blanks = require(`./blanks`);
const cards = require(`./cards`);
const carousels = require(`./carousels`);
const collapseables = require(`./collapseables`);
const forms = require(`./forms`);
const headings = require(`./headings`);
const images = require(`./images`);
const jumbotron = require(`./jumbotron`);
const navbars = require(`./navbars`);
const stacks = require(`./stacks`);
const tables = require(`./tables`);

module.exports.configBlank = blanks.configBlank;
module.exports.configCard = cards.configCard;
module.exports.configForm = forms.configForm;
module.exports.configH1 = headings.configH1;
module.exports.configH2 = headings.configH2;
module.exports.configH3 = headings.configH3;
module.exports.configH4 = headings.configH4;
module.exports.configH5 = headings.configH5;
module.exports.configH6 = headings.configH6;
module.exports.configImage = images.configImage;
module.exports.configStack = stacks.configStack;
module.exports.configTable = tables.configTable;

module.exports.Blank = blanks.Blank;
module.exports.Card = cards.Card;
module.exports.Form = forms.Form;
module.exports.H1 = headings.H1;
module.exports.H2 = headings.H2;
module.exports.H3 = headings.H3;
module.exports.H4 = headings.H4;
module.exports.H5 = headings.H5;
module.exports.H6 = headings.H6;
module.exports.Image = images.Image;
module.exports.Stack = stacks.Stack;
module.exports.Table = tables.Table;
