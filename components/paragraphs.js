/** Require external modules */
const ezhtml = require(`ezhtml`);
const ezobjects = require(`ezobjects`);

/** Require local modules */
const validation = require(`./validation`);

/** Configure class */
const configParagraph = {
  className: `Paragraph`,
  extends: ezhtml.Paragraph,
  extendsConfig: ezhtml.configParagraph,
  properties: [
    { name: `width`, type: `string`, default: `100` },
    { name: `wrapperClasses`, type: `Array`, arrayOf: { type: `string` } }
  ]
};

/** Create class */
ezobjects.createClass(configParagraph);

/** Add wrapper class helper */
Paragraph.prototype.addWrapperClass = function (wrapperClass) {
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

/** Remove wrapper class helper */
Paragraph.prototype.removeWrapperClass = function (wrapperClass) {
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

/** Render card */
Paragraph.prototype.render = function (indent = 0) {
  /** Validate width */
  const widthClass = validation.validateWidth(this.width());
  
  /** Create wrapper div and transfer content */
  const wrapper = new ezhtml.Paragraph().addClass(widthClass).addClass(this.wrapperClasses().join(` `)).content(this.content());
  
  /** Render wrapper */
  return wrapper.render(indent);
};

/** Export class and class */
module.exports.Paragraph = Paragraph;
module.exports.configParagraph = configParagraph;