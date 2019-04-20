/** Require external modules */
const ezhtml = require(`ezhtml`);
const ezobjects = require(`ezobjects`);

/** Require local moduels */
const blanks = require(`./blanks`);
const cards = require(`./cards`);
const forms = require(`./forms`);
const headings = require(`./headings`);

/** Configure class */
const configPage = {
  className: `Page`,
  extends: ezhtml.Container,
  extendsConfig: ezhtml.configContainer,
  properties: [
    { name: `css`, type: `Array`, arrayOf: { type: `string` } },
    { name: `javascript`, type: `Array`, arrayOf: { type: `string` } },
    { name: `title`, type: `string` }
  ]
};

/** Create class */
ezobjects.createClass(configPage);

/** Append and return new blank */
Page.prototype.blank = function () {
  const blank = new blanks.Blank();
  
  this.append(blank);
  
  return blank;
};

/** Append and return new card */
Page.prototype.card = function () {
  const card = new cards.Card();
  
  this.append(card);
  
  return card;
};

/** Append and return new form */
Page.prototype.form = function () {
  const form = new forms.Form();
  
  this.append(form);
  
  return form;
};

/** Append and return new heading */
Page.prototype.heading = function () {
  const heading = new headings.Heading();
  
  this.append(heading);
  
  return heading;
};

/** Render page */
Page.prototype.render = function (indent = 0) {
  const html = new ezhtml.HTML();
  
  const head = new ezhtml.Head();
  
  this.css().forEach((css) => {
    const link = new ezhtml.Link().rel(`stylesheet`).type(`text/css`).href(css);
    
    head.append(link);
  });
  
  const body = new ezhtml.Body();
  
  body.content(this.content());
  
  this.javascript().forEach((javascript) => {
    const script = new ezhtml.Script().src(javascript);
    
    body.append(script);
  });
  
  html.append(head);
  html.append(body);
  
  return html.render(indent);
};

/** Export class */
module.exports.Page = Page;
