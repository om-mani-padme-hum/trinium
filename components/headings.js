/** Require external modules */
const ezhtml = require(`ezhtml`);
const ezobjects = require(`ezobjects`);

/** Require local modules */
const validation = require(`../validation`);

for ( let i = 1; i <= 6; i++ ) {
  /** Configure class */
  const configHeading = {
    className: `H${i}`,
    extends: ezhtml[`H${i}`],
    extendsConfig: ezhtml[`configH${i}`],
    properties: [
      { name: `size`, type: `string`, default: `tiny` },
      { name: `wrapperClasses`, type: `Array`, arrayOf: { type: `string` } }
    ]
  };

  /** Create class */
  ezobjects.createClass(configHeading);

  /** Add wrapper class helper */
  global[`H${i}`].prototype.addWrapperClass = function (wrapperClass) {
    /** Append class to classes array */
    this.wrapperClasses().push(wrapperClass);

    /** Return this object for call chaining */
    return this;
  };

  /** Render heading */
  global[`H${i}`].prototype.render = function (indent = 0) {
    /** Validate size and rank */
    const sizeClass = validation.validateSize(this.size());

    /** Create wrapper div */
    const wrapper = new ezhtml.Div().addClass(sizeClass).addClass(this.wrapperClasses().join(` `));

    /** Create heading of appropriate rank and transfer content */
    const heading = new ezhtml[`H${i}`]();

    /** Transfer properties */
    heading.attributes(this.attributes());
    heading.classes(this.classes());
    heading.content(this.content());
    heading.id(this.id());
    heading.lang(this.lang());
    heading.style(this.style());
    heading.title(this.title());
    
    /** Add trinium heading class */
    heading.addClass(`h${i}`);

    /** Append heading to wrapper */
    wrapper.append(heading);

    /** Render wrapper */
    return wrapper.render(indent);
  };

  /** Export class */
  module.exports[`configH${i}`] = configHeading;
  module.exports[`H${i}`] = global[`H${i}`];
}
