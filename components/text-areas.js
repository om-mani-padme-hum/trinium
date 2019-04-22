/** Require external modules */
const ezhtml = require(`ezhtml`);
const ezobjects = require(`ezobjects`);

/** Require local modules */
const validation = require(`./validation`);

/** Configure TextArea class */
const configTextArea = {
  className: `TextArea`,
  extends: ezhtml.TextArea,
  extendsConfig: ezhtml.configTextArea,
  properties: [
    { name: `label`, type: `string` },
    { name: `labelClasses`, type: `string` },
    { name: `width`, type: `string`, default: `100` },
    { name: `wrapperClasses`, type: `string` }
  ]
};

/** Create TextArea class */
ezobjects.createClass(configTextArea);

/** Add input label class helper */
TextArea.prototype.addLabelClass = function (labelClass) {
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
TextArea.prototype.addWrapperClass = function (wrapperClass) {
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
TextArea.prototype.removeLabelClass = function (labelClass) {
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
TextArea.prototype.removeWrapperClass = function (wrapperClass) {
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
TextArea.prototype.render = function (indent = 0) {
  /** Validate width */
  const widthClass = validation.validateWidth(this.width());
  
  /** Create wrapper div and add width and wrapper classes */
  const wrapper = new ezhtml.Div().addClass(widthClass).addClass(this.wrapperClasses().join(` `));
  
  /** Create label element */
  const label = new ezhtml.Label().addClass(this.labelClasses().join(` `)).text(this.label());

  /** Append label to wrapper */
  wrapper.append(label);
  
  /** Create text area */
  const textArea = new ezhtml.TextArea();

  /** Transfer properties */
  textArea.attributes(this.attributes());
  textArea.autofocus(this.autofocus());
  textArea.classes(this.classes());
  textArea.content(this.options());
  textArea.dirname(this.dirname());
  textArea.disabled(this.disabled());
  textArea.form(this.form());
  textArea.id(this.id());
  textArea.lang(this.lang());
  textArea.maxlength(this.maxlength());
  textArea.name(this.name());
  textArea.readonly(this.readonly());
  textArea.required(this.required());
  textArea.rows(this.rows());
  textArea.style(this.style());
  textArea.text(this.text());
  textArea.title(this.title());
  textArea.wrap(this.wrap());

  /** Append text area to wrapper */
  wrapper.append(textArea);

  /** Return markup */
  return wrapper.render(indent);
};

/** Export class from module */
module.exports.TextArea = TextArea;
