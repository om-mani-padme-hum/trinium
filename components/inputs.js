/** Require external modules */
const ezhtml = require(`ezhtml`);
const ezobjects = require(`ezobjects`);

/** Require local modules */
const validation = require(`./validation`);

/** Configure Input class */
const configInput = {
  className: `Input`,
  extends: ezhtml.Input,
  extendsConfig: ezhtml.configInput,
  properties: [
    { name: `inputLabelClasses`, type: `Array`, arrayOf: { type: `string` } },
    { name: `label`, type: `string` },
    { name: `width`, type: `string`, default: `100` },
    { name: `wrapperClasses`, type: `Array`, arrayOf: { type: `string` } }
  ]
};

/** Create Input class */
ezobjects.createClass(configInput);

/** Add input label class helper */
Input.prototype.addInputLabelClass = function (inputLabelClass) {
  /** Get array of non-empty class names to be added */
  const classes = inputLabelClass.trim().split(` `).map(x => x.trim()).filter(x => x.length > 0);

  /** Loop through classes to be added... */
  classes.forEach((className) => {
    /** If the class to be added isn't already in the classes array, append to array */
    if ( !this.inputLabelClasses().includes(className) )
      this.inputLabelClasses().push(className);
  });
  
  /** Return this object for call chaining */
  return this;
};

/** Add wrapper class helper */
Input.prototype.addWrapperClass = function (wrapperClass) {
  /** Get array of non-empty class names to be added */
  const classes = wrapperClass.trim().split(` `).map(x => x.trim()).filter(x => x.length > 0);

  /** Loop through classes to be added... */
  classes.forEach((className) => {
    /** If the class to be added isn't already in the classes array, append to array */
    if ( !this.wrapperClasses().includes(className) )
      this.wrapperClasses().push(className);
  });
  
  /** Return this object for call chaining */
  return this;
};

/** Remove input label class helper */
Input.prototype.removeInputLabelClass = function (inputLabelClass) {
  /** Get array of non-empty class names to be removed */
  const classes = inputLabelClass.trim().split(` `).map(x => x.trim()).filter(x => x.length > 0);

  /** Loop through classes to be removed... */
  classes.forEach((className) => {
    /** If the class to be removed is in the classes array, splice out of array */
    if ( this.inputLabelClasses().includes(className) )
      this.inputLabelClasses().splice(this.inputLabelClasses().findIndex(className), 1);
  });
  
  /** Return this object for call chaining */
  return this;
};

/** Remove wrapper class helper */
Input.prototype.removeWrapperClass = function (wrapperClass) {
  /** Get array of non-empty class names to be removed */
  const classes = wrapperClass.trim().split(` `).map(x => x.trim()).filter(x => x.length > 0);

  /** Loop through classes to be removed... */
  classes.forEach((className) => {
    /** If the class to be removed is in the classes array, splice out of array */
    if ( this.wrapperClasses().includes(className) )
      this.wrapperClasses().splice(this.wrapperClasses().findIndex(className), 1);
  });
  
  /** Return this object for call chaining */
  return this;
};

/** Create method for rendering element */
Input.prototype.render = function (indent = 0) {
  /** Validate width */
  const widthClass = validation.validateWidth(this.width());
  
  /** Create wrapper div and add width and wrapper classes */
  const wrapper = new ezhtml.Div().addClass(widthClass).addClass(this.wrapperClasses().join(` `));
  
  /** Create label element */
  const inputLabel = new ezhtml.Label().addClass(this.inputLabelClasses().join(` `)).text(this.label());

  /** Append label to wrapper */
  wrapper.append(inputLabel);
  
  /** Create input and add input classes */
  const input = new ezhtml.Input();
  
  /** Transfer input properties */
  input.accept(this.accept());
  input.alt(this.alt());
  input.attributes(this.attributes());
  input.autocomplete(this.autocomplete());
  input.autofocus(this.autofocus());
  input.checked(this.checked());
  input.classes(this.classes());
  input.dirname(this.dirname());
  input.disabled(this.disabled());
  input.form(this.form());
  input.formaction(this.formaction());
  input.formenctype(this.formenctype());
  input.formmethod(this.formmethod());
  input.formnovalidate(this.formnovalidate());
  input.formtarget(this.formtarget());
  input.height(this.height());
  input.id(this.id());
  input.lang(this.lang());
  input.list(this.list());
  input.max(this.max());
  input.maxlength(this.maxlength());
  input.min(this.min());
  input.multiple(this.multiple());
  input.name(this.name());
  input.pattern(this.pattern());
  input.placeholder(this.placeholder());
  input.readonly(this.readonly());
  input.required(this.required());
  input.size(this.size());
  input.src(this.src());
  input.step(this.step());
  input.style(this.style());
  input.title(this.title());
  input.type(this.type());
  input.value(this.value());
  /** Native HTML input width property ignored here, was OK to do so since all inputs 100% wide */
  
  /** Append input to wrapper */
  wrapper.append(input);

  /** Return markup */
  return wrapper.render(indent);
};

/** Export class from module */
module.exports.Input = Input;
