/** Require external modules */
const ezhtml = require(`ezhtml`);
const ezobjects = require(`ezobjects`);

/** Require local modules */
const validation = require(`./validation`);

/** Configure class */
const configCheckboxGroup = {
  className: `CheckboxGroup`,
  extends: ezhtml.Input,
  extendsConfig: ezhtml.configInput,
  properties: [
    { name: `align`, type: `string`, default: `horizontal` },
    { name: `groupClasses`, type: `Array`, arrayOf: { type: `string` } },
    { name: `groupLabelClasses`, type: `Array`, arrayOf: { type: `string` } },
    { name: `inputClasses`, type: `Array`, arrayOf: { type: `string` } },
    { name: `inputLabelClasses`, type: `Array`, arrayOf: { type: `string` } },
    { name: `inputWrapperClasses`, type: `Array`, arrayOf: { type: `string` } },
    { name: `label`, type: `string` },
    { name: `options`, type: `array`, arrayOf: { instanceOf: `Option` } },
    { name: `width`, type: `string`, default: `100` },
    { name: `wrapperClasses`, type: `Array`, arrayOf: { type: `string` } }
  ]
};

/** Create class */
ezobjects.createClass(configCheckboxGroup);

/** Add group class helper */
CheckboxGroup.prototype.addGroupClass = function (groupClass) {
  /** Get array of non-empty class names to be added */
  const classes = groupClass.trim().split(` `).map(x => x.trim()).filter(x => x.length > 0);

  /** Loop through classes to be added... */
  classes.forEach((className) => {
    /** If the class to be added isn't already in the classes array, append to array */
    if ( !this.groupClasses().includes(className) )
      this.groupClasses().push(className);
  });
  
  /** Return this object for call chaining */
  return this;
};

/** Add group label class helper */
CheckboxGroup.prototype.addGroupLabelClass = function (groupLabelClass) {
  /** Get array of non-empty class names to be added */
  const classes = groupLabelClass.trim().split(` `).map(x => x.trim()).filter(x => x.length > 0);

  /** Loop through classes to be added... */
  classes.forEach((className) => {
    /** If the class to be added isn't already in the classes array, append to array */
    if ( !this.groupLabelClasses().includes(className) )
      this.groupLabelClasses().push(className);
  });
  
  /** Return this object for call chaining */
  return this;
};

/** Add input class helper */
CheckboxGroup.prototype.addInputClass = function (inputClass) {
  /** Get array of non-empty class names to be added */
  const classes = inputClass.trim().split(` `).map(x => x.trim()).filter(x => x.length > 0);

  /** Loop through classes to be added... */
  classes.forEach((className) => {
    /** If the class to be added isn't already in the classes array, append to array */
    if ( !this.inputClasses().includes(className) )
      this.inputClasses().push(className);
  });
  
  /** Return this object for call chaining */
  return this;
};

/** Add input label class helper */
CheckboxGroup.prototype.addInputLabelClass = function (inputLabelClass) {
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

/** Add input wrapper class helper */
CheckboxGroup.prototype.addInputWrapperClass = function (inputWrapperClass) {
  /** Get array of non-empty class names to be added */
  const classes = inputWrapperClass.trim().split(` `).map(x => x.trim()).filter(x => x.length > 0);

  /** Loop through classes to be added... */
  classes.forEach((className) => {
    /** If the class to be added isn't already in the classes array, append to array */
    if ( !this.inputWrapperClasses().includes(className) )
      this.inputWrapperClasses().push(className);
  });
  
  /** Return this object for call chaining */
  return this;
};

/** Add wrapper class helper */
CheckboxGroup.prototype.addWrapperClass = function (wrapperClass) {
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

/** Remove group class helper */
CheckboxGroup.prototype.removeGroupClass = function (groupClass) {
  /** Get array of non-empty class names to be removed */
  const classes = groupClass.trim().split(` `).map(x => x.trim()).filter(x => x.length > 0);

  /** Loop through classes to be removed... */
  classes.forEach((className) => {
    /** If the class to be removed is in the classes array, splice out of array */
    if ( this.groupClasses().includes(className) )
      this.groupClasses().splice(this.groupClasses().findIndex(className), 1);
  });
  
  /** Return this object for call chaining */
  return this;
};

/** Remove group label class helper */
CheckboxGroup.prototype.removeGroupLabelClass = function (groupLabelClass) {
  /** Get array of non-empty class names to be removed */
  const classes = groupLabelClass.trim().split(` `).map(x => x.trim()).filter(x => x.length > 0);

  /** Loop through classes to be removed... */
  classes.forEach((className) => {
    /** If the class to be removed is in the classes array, splice out of array */
    if ( this.groupLabelClasses().includes(className) )
      this.groupLabelClasses().splice(this.groupLabelClasses().findIndex(className), 1);
  });
  
  /** Return this object for call chaining */
  return this;
};

/** Remove input class helper */
CheckboxGroup.prototype.removeInputClass = function (inputClass) {
  /** Get array of non-empty class names to be removed */
  const classes = inputClass.trim().split(` `).map(x => x.trim()).filter(x => x.length > 0);

  /** Loop through classes to be removed... */
  classes.forEach((className) => {
    /** If the class to be removed is in the classes array, splice out of array */
    if ( this.inputClasses().includes(className) )
      this.inputClasses().splice(this.inputClasses().findIndex(className), 1);
  });
  
  /** Return this object for call chaining */
  return this;
};

/** Remove input label class helper */
CheckboxGroup.prototype.removeInputLabelClass = function (inputLabelClass) {
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

/** Remove input wrapper class helper */
CheckboxGroup.prototype.removeInputWrapperClass = function (inputWrapperClass) {
  /** Get array of non-empty class names to be removed */
  const classes = inputWrapperClass.trim().split(` `).map(x => x.trim()).filter(x => x.length > 0);

  /** Loop through classes to be removed... */
  classes.forEach((className) => {
    /** If the class to be removed is in the classes array, splice out of array */
    if ( this.inputWrapperClasses().includes(className) )
      this.inputWrapperClasses().splice(this.inputWrapperClasses().findIndex(className), 1);
  });
  
  /** Return this object for call chaining */
  return this;
};

/** Remove wrapper class helper */
CheckboxGroup.prototype.removeWrapperClass = function (wrapperClass) {
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
CheckboxGroup.prototype.render = function (indent = 0) {
  /** Validate width */
  const widthClass = validation.validateWidth(this.width());
  
  /** Validate align */
  validation.validateAlign(this.align());
  
  /** Create wrapper div and add width and wrapper classes */
  const wrapper = new ezhtml.Div().addClass(widthClass).addClass(this.wrapperClasses().join(` `));
  
  /** Create group label and add group label classes */
  const groupLabel = new ezhtml.Label().addClass(this.groupLabelClasses().join(` `)).text(this.label());

  /** Append group label to wrapper */
  wrapper.append(groupLabel);
  
  /** Create group div element */
  const group = new ezhtml.Div().addClass(`options-${this.align()}`).addClass(this.groupClasses().join(` `));
  
  /** Loop through each option */
  this.options().forEach((option) => {
    /** Create input wrapper element */
    const inputWrapper = new ezhtml.Div().addClass(this.inputWrapperClasses().join(` `));

    /** Create input element */
    const input = new ezhtml.Input();
    
    /** Transfer input properties */
    input.accept(this.accept());
    input.alt(this.alt());
    input.attributes(this.attributes());
    input.autocomplete(this.autocomplete());
    input.autofocus(this.autofocus());
    input.checked(option.selected());
    input.classes(this.classes());
    input.dirname(this.dirname());
    input.disabled(this.disabled());
    input.form(this.form());
    input.formaction(this.formaction());
    input.formenctype(this.formenctype());
    input.formmethod(this.formmethod());
    input.formnovalidate(this.formnovalidate());
    input.formtarget(this.formtarget());
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
    input.type(`checkbox`);
    input.value(option.value());
    
    /** Add input classes to input */
    input.addClass(this.inputClasses().join(` `));
    
    /** Append input to input wrapper */
    inputWrapper.append(input);
    
    /** Create input label */
    const inputLabel = new ezhtml.Label().addClass(this.inputLabelClasses().join(` `));
    
    /** Transfer option content to input label */
    inputLabel.content(option.content());
    
    /** Append input label to input wrapper */
    inputWrapper.append(inputLabel);
    
    /** Append input wrapper to group */
    group.append(inputWrapper);
  });
  
  /** Append group div to wrapper */
  wrapper.append(group);  

  /** Return markup */
  return wrapper.render(indent);
};

/** Export class from module */
module.exports.CheckboxGroup = CheckboxGroup;
