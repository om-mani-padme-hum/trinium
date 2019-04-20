/** Require external modules */
const ezforms = require(`ezforms`);
const ezhtml = require(`ezhtml`);
const ezobjects = require(`ezobjects`);
const eztables = require(`eztables`);

/** Require local moduels */
const components = require(`./components`);

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

/** Create, if desired append, and return new blank */
Page.prototype.blank = function (append = true, wrapper = true) {
  if ( !wrapper )
    return new ezhtml.Div();
  
  const blank = new components.Blank();
  
  if ( append )
    this.append(blank);
  
  return blank;
};

/** Create, if desired append, and return new card */
Page.prototype.card = function (append = true) {
  const card = new components.Card();
  
  if ( append )
    this.append(card);
  
  return card;
};

/** Create, if desired append, and return new form */
Page.prototype.form = function (append = true, wrapper = true) {
  if ( !wrapper )
    return new ezforms.Form();
  
  const form = new components.Form();
  
  if ( append )
    this.append(form);
  
  return form;
};

/** Create, if desired append, and return new H1 */
Page.prototype.h1 = function (append = true, wrapper = true) {
  if ( !wrapper )
    return new ezhtml.H1();
  
  const h1 = new components.H1();
  
  if ( append )
    this.append(h1);
  
  return h1;
};

/** Create, if desired append, and return new H2 */
Page.prototype.h2 = function (append = true, wrapper = true) {
  if ( !wrapper )
    return new ezhtml.H2();
  
  const h2 = new components.H2();
  
  if ( append )
    this.append(h2);
  
  return h2;
};

/** Create, if desired append, and return new H3 */
Page.prototype.h3 = function (append = true, wrapper = true) {
  if ( !wrapper )
    return new ezhtml.H3();
  
  const h3 = new components.H3();
  
  if ( append )
    this.append(h3);
  
  return h3;
};

/** Create, if desired append, and return new H4 */
Page.prototype.h4 = function (append = true, wrapper = true) {
  if ( !wrapper )
    return new ezhtml.H4();
  
  const h4 = new components.H4();
  
  if ( append )
    this.append(h4);
  
  return h4;
};

/** Create, if desired append, and return new H5 */
Page.prototype.h5 = function (append = true, wrapper = true) {
  if ( !wrapper )
    return new ezhtml.H5();
  
  const h5 = new components.H5();
  
  if ( append )
    this.append(h5);
  
  return h5;
};

/** Create, if desired append, and return new H6 */
Page.prototype.h6 = function (append = true, wrapper = true) {
  if ( !wrapper )
    return new ezhtml.H6();
  
  const h6 = new components.H6();
  
  if ( append )
    this.append(h6);
  
  return h6;
};

/** Create, if desired append, and return new image */
Page.prototype.image = function (append = true, wrapper = true) {
  if ( !wrapper )
    return new ezhtml.Image();
  
  const image = new components.Image();
  
  if ( append )
    this.append(image);
  
  return image;
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

/** Create, if desired append, and return new stack */
Page.prototype.stack = function (append = true) {
  const stack = new components.Stack();
  
  if ( append )
    this.append(stack);
  
  return stack;
};

/** Create, if desired append, and return new table */
Page.prototype.table = function (append = true, wrapper = true) {
  if ( !wrapper )
    return new eztables.Table();
  
  const table = new components.Table();
  
  if ( append )
    this.append(table);
  
  return table;
};

/** Export class */
module.exports.Page = Page;
