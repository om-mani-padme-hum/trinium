/** Require external modules */
const ezhtml = require(`ezhtml`);
const ezobjects = require(`ezobjects`);

/** Require local modules */
const validation = require(`./validation`);

/** Configure class */
const configCard = {
  className: `Card`,
  extends: ezhtml.Container,
  extendsConfig: ezhtml.configContainer,
  properties: [
    { name: `bodyClasses`, type: `Array`, arrayOf: { type: `string` } },
    { name: `cardClasses`, type: `Array`, arrayOf: { type: `string` } },
    { name: `header`, type: `string`, default: `Card Header` },
    { name: `headerClasses`, type: `Array`, arrayOf: { type: `string` } },
    { name: `size`, type: `string`, default: `tiny` }
  ]
};

/** Create class */
ezobjects.createClass(configCard);

/** Add body class helper */
Card.prototype.addBodyClass = function (bodyClass) {
  /** Append class to classes array */
  this.bodyClasses().push(bodyClass);
  
  /** Return this object for call chaining */
  return this;
};

/** Add card class helper */
Card.prototype.addCardClass = function (cardClass) {
  /** Append class to classes array */
  this.cardClasses().push(cardClass);
  
  /** Return this object for call chaining */
  return this;
};

/** Add header class helper */
Card.prototype.addHeaderClass = function (headerClass) {
  /** Append class to classes array */
  this.headerClasses().push(headerClass);
  
  /** Return this object for call chaining */
  return this;
};

/** Render card */
Card.prototype.render = function (indent = 0) {
  const sizeClass = validation.validateSize(this.size());

  const card = new ezhtml.Div().addClass(sizeClass).addClass(this.cardClasses().join(` `));
  const cardHeader = new ezhtml.Div().addClass(`trinium-card-header`).addClass(this.headerClasses().join(` `)).text(this.header());
  const cardBody = new ezhtml.Div().addClass(`trinium-card-body`).addClass(this.bodyClasses().join(` `)).content(this.content());
  
  card.append(cardHeader);
  card.append(cardBody);
  
  return card.render(indent);
};

/** Export class */
module.exports.Card = Card;
