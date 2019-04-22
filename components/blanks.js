/** Require external modules */
const ezhtml = require(`ezhtml`);
const ezobjects = require(`ezobjects`);

/** Require local modules */
const containers = require(`./containers`);
const validation = require(`./validation`);

/** Configure class */
const configBlank = {
  className: `Blank`,
  extends: containers.Container,
  extendsConfig: containers.configContainer
};

/** Create class */
ezobjects.createClass(configBlank);

/** Render card */
Blank.prototype.render = function (indent = 0) {
  /** Validate width */
  const widthClass = validation.validateWidth(this.width());
  
  /** Create wrapper div and transfer content */
  const wrapper = new ezhtml.Div().addClass(widthClass).addClass(`blank`).addClass(this.wrapperClasses().join(` `)).content(this.content());
  
  /** Render wrapper */
  return wrapper.render(indent);
};

/** Export class and class */
module.exports.Blank = Blank;
module.exports.configBlank = configBlank;