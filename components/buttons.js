/** Require external modules */
const ezhtml = require(`ezhtml`);
const ezobjects = require(`ezobjects`);

/** Require local modules */
const validation = require(`./validation`);

/** Configure Button class */
const configButton = {
  className: `Button`,
  extends: ezhtml.Button,
  extendsConfig: ezhtml.configButton,
  properties: [
    { name: `width`, type: `string`, default: `100` },
    { name: `wrapperClasses`, type: `Array`, arrayOf: { type: `string` } }
  ]
};

/** Create Button class */
ezobjects.createClass(configButton);

/** Add button class helper */
Button.prototype.addButtonClass = function (buttonClass) {
  /** Get array of non-empty class names to be added */
  const classes = buttonClass.trim().split(` `).map(x => x.trim()).filter(x => x.length > 0);

  /** Loop through classes to be added... */
  classes.forEach((className) => {
    /** If the class to be added isn't already in the classes array, append to array */
    if ( !this.buttonClasses().includes(className) )
      this.buttonClasses().push(className);
  });
  
  /** Return this object for call chaining */
  return this;
};

/** Add wrapper class helper */
Button.prototype.addWrapperClass = function (wrapperClass) {
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

/** Remove button class helper */
Button.prototype.removeButtonClass = function (buttonClass) {
  /** Get array of non-empty class names to be removed */
  const classes = buttonClass.trim().split(` `).map(x => x.trim()).filter(x => x.length > 0);

  /** Loop through classes to be removed... */
  classes.forEach((className) => {
    /** If the class to be removed is in the classes array, splice out of array */
    if ( this.buttonClasses().includes(className) )
      this.buttonClasses().splice(this.buttonClasses().findIndex(className), 1);
  });
  
  /** Return this object for call chaining */
  return this;
};

/** Remove wrapper class helper */
Button.prototype.removeWrapperClass = function (wrapperClass) {
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
Button.prototype.render = function (indent = 0) {
  /** Validate width */
  const widthClass = validation.validateWidth(this.width());
  
  /** Create wrapper div and add width and wrapper classes */
  const wrapper = new ezhtml.Div().addClass(widthClass).addClass(this.wrapperClasses().join(` `));

  /** Create button element and transfer content */
  const button = new ezhtml.Button();
  
  /** Transfer properties */
  button.attributes(this.attributes());
  button.autofocus(this.autofocus());
  button.classes(this.classes());
  button.content(this.content());
  button.disabled(this.disabled());
  button.form(this.form());
  button.formaction(this.formaction());
  button.formenctype(this.formenctype());
  button.formmethod(this.formmethod());
  button.formnovalidate(this.formnovalidate());
  button.formtarget(this.formtarget());
  button.id(this.id());
  button.name(this.name());
  button.style(this.style());
  button.title(this.title());
  button.type(this.type());
      
  /** Append button to wrapper */
  wrapper.append(button);

  /** Return markup */
  return wrapper.render(indent);
};

/** Export class from module */
module.exports.Button = Button;
module.exports.configButton = configButton;
