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
    { name: `wrapperClasses`, type: `Array`, arrayOf: { type: `string` } },
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

/** Add header class helper */
Card.prototype.addHeaderClass = function (headerClass) {
  /** Append class to classes array */
  this.headerClasses().push(headerClass);
  
  /** Return this object for call chaining */
  return this;
};

/** Add card class helper */
Card.prototype.addWrapperClass = function (cardClass) {
  /** Append class to classes array */
  this.wrapperClasses().push(cardClass);
  
  /** Return this object for call chaining */
  return this;
};

/** Render card */
Card.prototype.render = function (indent = 0) {
  /** Validate size */
  const sizeClass = validation.validateSize(this.size());

  /** Card wrapper div */
  const wrapper = new ezhtml.Div().addClass(sizeClass).addClass(this.wrapperClasses().join(` `));
  
  /** Create card header and append header text */
  const cardHeader = new ezhtml.Div().addClass(`trinium-card-header`).addClass(this.headerClasses().join(` `)).text(this.header());
  
  /** Create card body and transfer content */
  const cardBody = new ezhtml.Div().addClass(`trinium-card-body`).addClass(this.bodyClasses().join(` `)).content(this.content());
  
  /** Append card header and body to wrapper */
  wrapper.append(cardHeader);
  wrapper.append(cardBody);
  
  /** Render wrapper */
  return wrapper.render(indent);
};

/** Export class */
module.exports.Card = Card;
