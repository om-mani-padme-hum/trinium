/** Require external modules */
const ezhtml = require(`ezhtml`);
const ezobjects = require(`ezobjects`);

/** Require local modules */
const validation = require(`./validation`);

/** Configure class */
const configOrderedList = {
  className: `OrderedList`,
  extends: ezhtml.OrderedList,
  extendsConfig: ezhtml.configOrderedList,
  properties: [
    { name: `width`, type: `string`, default: `100` },
    { name: `wrapperClasses`, type: `Array`, arrayOf: { type: `string` } }
  ]
};

/** Create class */
ezobjects.createClass(configOrderedList);

/** Add wrapper class helper */
OrderedList.prototype.addWrapperClass = function (wrapperClass) {
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

/** Create, if desired append, and return new list item */
OrderedList.prototype.item = function (append = true) {
  /** Create list item */
  const item = new ezhtml.ListItem();
  
  /** Append list item to list, if desired */
  if ( append )
    this.append(item);
  
  /** Return list item for call chaining */
  return item;
};

/** Remove wrapper class helper */
OrderedList.prototype.removeWrapperClass = function (wrapperClass) {
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

/** Render ordered list component */
OrderedList.prototype.render = function (indent = 0) {
  /** Validate width */
  const widthClass = validation.validateWidth(this.width());
  
  /** Create wrapper div and add width and wrapper classes */
  const wrapper = new ezhtml.Div().addClass(widthClass).addClass(this.wrapperClasses().join(` `));
  
  /** Create ordered list */
  const orderedList = new ezhtml.OrderedList();
  
  /** Transfer properties */
  orderedList.attributes(this.attributes());
  orderedList.classes(this.classes());
  orderedList.content(this.content());
  orderedList.id(this.id());
  orderedList.lang(this.lang());
  orderedList.style(this.style());
  orderedList.title(this.title());

  /** Append ordered list to wrapper */
  wrapper.append(orderedList);
  
  /** Return markup */
  return wrapper.render(indent);
};

/** Export class from module */
module.exports.configOrderedList = configOrderedList;
module.exports.OrderedList = OrderedList;
