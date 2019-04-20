/** Require external modules */
const ezhtml = require(`ezhtml`);
const ezobjects = require(`ezobjects`);

/** Require local modules */
const validation = require(`./validation`);

/** Configure class */
const configHeading = {
  className: `Heading`,
  extends: ezhtml.Container,
  extendsConfig: ezhtml.configContainer,
  properties: [
    { name: `headingClasses`, type: `Array`, arrayOf: { type: `string` } },
    { name: `rank`, type: `int`, default: 2 },
    { name: `size`, type: `string`, default: `tiny` },
    { name: `wrapperClasses`, type: `Array`, arrayOf: { type: `string` } }
  ]
};

/** Create class */
ezobjects.createClass(configHeading);

/** Add heading class helper */
Heading.prototype.addHeadingClass = function (headingClass) {
  /** Append class to classes array */
  this.headingClasses().push(headingClass);
  
  /** Return this object for call chaining */
  return this;
};

/** Add wrapper class helper */
Heading.prototype.addWrapperClass = function (wrapperClass) {
  /** Append class to classes array */
  this.wrapperClasses().push(wrapperClass);
  
  /** Return this object for call chaining */
  return this;
};

/** Render card */
Heading.prototype.render = function (indent = 0) {
  /** Validate size and rank */
  const sizeClass = validation.validateSize(this.size());
  const rank = validation.validateHeadingRank(this.rank());
  
  /** Create wrapper div */
  const wrapper = new ezhtml.Div().addClass(sizeClass).addClass(this.wrapperClasses().join(` `));
  
  /** Create heading of appropriate rank and transfer content */
  const heading = new ezhtml[`H${rank}`]().addClass(this.headingClasses().join(` `)).content(this.content());
  
  /** Append heading to wrapper */
  wrapper.append(heading);
  
  /** Render wrapper */
  return wrapper.render(indent);
};

/** Export class */
module.exports.Heading = Heading;
