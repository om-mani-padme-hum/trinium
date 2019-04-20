/** Require external modules */
const ezhtml = require(`ezhtml`);
const ezobjects = require(`ezobjects`);

/** Require local modules */
const validation = require(`../validation`);

/** Configure class */
const configStack = {
  className: `Stack`,
  extends: ezhtml.Container,
  extendsConfig: ezhtml.configContainer,
  properties: [
    { name: `size`, type: `string`, default: `tiny` },
    { name: `wrapperClasses`, type: `Array`, arrayOf: { type: `string` } }
  ]
};

/** Create class */
ezobjects.createClass(configStack);

/** Add wrapper class helper */
Stack.prototype.addWrapperClass = function (wrapperClass) {
  /** Append class to classes array */
  this.wrapperClasses().push(wrapperClass);
  
  /** Return this object for call chaining */
  return this;
};

/** Render card */
Stack.prototype.render = function (indent = 0) {
  /** Validate size */
  const sizeClass = validation.validateSize(this.size());
  
  /** Create wrapper div and transfer content */
  const wrapper = new ezhtml.Div().addClass(sizeClass).addClass(`flex-stack`).addClass(this.wrapperClasses().join(` `)).content(this.content());
  
  /** Render wrapper */
  return wrapper.render(indent);
};

/** Export class and class */
module.exports.Stack = Stack;
module.exports.configStack = configStack;
