/** Require external modules */
const ezhtml = require(`ezhtml`);
const ezobjects = require(`ezobjects`);

/** Require local modules */
const validation = require(`./validation`);

/** Configure Select class */
const configSelect = {
  className: `Select`,
  extends: ezhtml.Select,
  extendsConfig: ezhtml.configSelect,
  properties: [
    { name: `label`, type: `string` },
    { name: `labelClasses`, type: `Array`, arrayOf: { type: `string` } },
    { name: `options`, type: `array`, arrayOf: { instanceOf: `Option` } },
    { name: `width`, type: `string`, default: `100` },
    { name: `wrapperClasses`, type: `Array`, arrayOf: { type: `string` } }
  ]
};

/** Create Select class */
ezobjects.createClass(configSelect);

/** Add input label class helper */
Select.prototype.addInputLabelClass = function (labelClass) {
  /** Get array of non-empty class names to be added */
  const classes = labelClass.trim().split(` `).map(x => x.trim()).filter(x => x.length > 0);

  /** Loop through classes to be added... */
  classes.forEach((className) => {
    /** If the class to be added isn't already in the classes array, append to array */
    if ( !this.labelClasses().includes(className) )
      this.labelClasses().push(className);
  });
  
  /** Return this object for call chaining */
  return this;
};

/** Add wrapper class helper */
Select.prototype.addWrapperClass = function (wrapperClass) {
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
Select.prototype.removeInputLabelClass = function (labelClass) {
  /** Get array of non-empty class names to be removed */
  const classes = labelClass.trim().split(` `).map(x => x.trim()).filter(x => x.length > 0);

  /** Loop through classes to be removed... */
  classes.forEach((className) => {
    /** If the class to be removed is in the classes array, splice out of array */
    if ( this.labelClasses().includes(className) )
      this.labelClasses().splice(this.labelClasses().findIndex(className), 1);
  });
  
  /** Return this object for call chaining */
  return this;
};

/** Remove wrapper class helper */
Select.prototype.removeWrapperClass = function (wrapperClass) {
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
Select.prototype.render = function (indent = 0) {
  /** Validate width */
  const widthClass = validation.validateWidth(this.width());
  
  /** Create wrapper div and add width and wrapper classes */
  const wrapper = new ezhtml.Div().addClass(widthClass).addClass(this.wrapperClasses().join(` `));
  
  /** Create label element */
  const label = new ezhtml.Label().addClass(this.labelClasses().join(` `)).text(this.label());

  /** Append label to wrapper */
  wrapper.append(label);
  
  /** Create select */
  const select = new ezhtml.Select();
  
  /** Transfer input properties */
  select.attributes(this.attributes());
  select.autofocus(this.autofocus());
  select.classes(this.classes());
  select.content(this.options());
  select.disabled(this.disabled());
  select.form(this.form());
  select.id(this.id());
  select.lang(this.lang());
  select.multiple(this.multiple());
  select.name(this.name());
  select.required(this.required());
  select.size(this.size());
  select.style(this.style());
  select.title(this.title());
  
  /** Append select to wrapper */
  wrapper.append(select);

  /** Return markup */
  return wrapper.render(indent);
};

/** Export class from module */
module.exports.Select = Select;
