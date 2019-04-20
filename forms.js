/** Require external modules */
const ezforms = require(`ezforms`);
const ezhtml = require(`ezhtml`);
const ezobjects = require(`ezobjects`);

/** Require local modules */
const validation = require(`./validation`);

/** Configure class */
const configForm = {
  className: `Form`,
  extends: ezforms.Form,
  extendsConfig: ezforms.configForm,
  properties: [
    { name: `size`, type: `string`, default: `tiny` },
    { name: `wrapperClasses`, type: `Array`, arrayOf: { type: `string` } }
  ]
};

/** Create class */
ezobjects.createClass(configForm);

/** Add wrapper class helper */
Form.prototype.addWrapperClass = function (wrapperClass) {
  /** Append class to classes array */
  this.wrapperClasses().push(wrapperClass);
  
  /** Return this object for call chaining */
  return this;
};

/** Render card */
Form.prototype.render = function (indent = 0) {
  /** Validate size and rank */
  const sizeClass = validation.validateSize(this.size());
  
  /** Create wrapper div */
  const wrapper = new ezhtml.Div().addClass(sizeClass).addClass(this.wrapperClasses().join(` `));
  
  /** Create EZ Form */
  const form = new ezforms.Form();
  
  /** Transfer properties */
  form.acceptCharset(this.acceptCharset());
  form.action(this.action());
  form.autocomplete(this.autocomplete());
  form.enctype(this.enctype());
  form.method(this.method());
  form.name(this.name());
  form.novalidate(this.novalidate());
  form.target(this.target());
  
  form.content(this.content());
  
  /** Transfer form to wrapper */
  wrapper.append(form);
  
  /** Render wrapper */
  return wrapper.render(indent);
};

/** Export class */
module.exports.Form = Form;
