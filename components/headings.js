/** Require external modules */
const ezhtml = require(`ezhtml`);
const ezobjects = require(`ezobjects`);

/** Require local modules */
const validation = require(`./validation`);

for ( let i = 1; i <= 6; i++ ) {
  /** Configure class */
  const configHeading = {
    className: `H${i}`,
    extends: ezhtml[`H${i}`],
    extendsConfig: ezhtml[`configH${i}`],
    properties: [
      { name: `width`, type: `string`, default: `100` },
      { name: `wrapperClasses`, type: `Array`, arrayOf: { type: `string` } }
    ]
  };

  /** Create class */
  ezobjects.createClass(configHeading);

  /** Add wrapper class helper */
  global[`H${i}`].prototype.addWrapperClass = function (wrapperClass) {
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
  global[`H${i}`].prototype.removeWrapperClass = function (wrapperClass) {
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

  /** Render heading */
  global[`H${i}`].prototype.render = function (indent = 0) {
    /** Validate size and rank */
    const widthClass = validation.validateWidth(this.width());

    /** Create wrapper div */
    const wrapper = new ezhtml.Div().addClass(widthClass).addClass(this.wrapperClasses().join(` `));

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
