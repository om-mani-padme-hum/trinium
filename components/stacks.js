/** Require external modules */
const ezhtml = require(`ezhtml`);
const ezobjects = require(`ezobjects`);

/** Require local modules */
const containers = require(`./containers`);
const forms = require(`./forms`);
const validation = require(`./validation`);

/** Configure class */
const configStack = {
  className: `Stack`,
  extends: containers.FlexContainer,
  extendsConfig: containers.configFlexContainer
};

/** Create class */
ezobjects.createClass(configStack);

/** Create, if desired append, and return new form component */
Stack.prototype.form = function (append = true, wrapper = true) {
  /** If no wrapper is desired, return plain form */
  if ( !wrapper )
    return new ezhtml.Form();
  
  /** Create form */
  const form = new forms.Form();
  
  /** Append form to stack, if desired */
  if ( append )
    this.append(form);
  
  /** Return form for call chaining */
  return form;
};

/** Render card */
Stack.prototype.render = function (indent = 0) {
  /** Validate width */
  const widthClass = validation.validateWidth(this.width());
  
  /** Create wrapper div and transfer content */
  const wrapper = new ezhtml.Div().addClass(widthClass).addClass(`stack`).addClass(this.wrapperClasses().join(` `)).content(this.content());
  
  /** Render wrapper */
  return wrapper.render(indent);
};

/** Export class and class */
module.exports.Stack = Stack;
module.exports.configStack = configStack;
