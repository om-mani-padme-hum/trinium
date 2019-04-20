/** Require external modules */
const eztables = require(`eztables`);
const ezhtml = require(`ezhtml`);
const ezobjects = require(`ezobjects`);

/** Require local modules */
const validation = require(`../validation`);

/** Configure class */
const configTable = {
  className: `Table`,
  extends: eztables.Table,
  extendsConfig: eztables.configTable,
  properties: [
    { name: `size`, type: `string`, default: `tiny` },
    { name: `wrapperClasses`, type: `Array`, arrayOf: { type: `string` } }
  ]
};

/** Create class */
ezobjects.createClass(configTable);

/** Add wrapper class helper */
Table.prototype.addWrapperClass = function (wrapperClass) {
  /** Append class to classes array */
  this.wrapperClasses().push(wrapperClass);
  
  /** Return this object for call chaining */
  return this;
};

/** Render table */
Table.prototype.render = function (indent = 0) {
  /** Validate size and rank */
  const sizeClass = validation.validateSize(this.size());
  
  /** Create wrapper div */
  const wrapper = new ezhtml.Div().addClass(sizeClass).addClass(this.wrapperClasses().join(` `));
  
  /** Create EZ Table */
  const table = new eztables.Table();
  
  /** Transfer properties */
  table.attributes(this.attributes());
  table.classes(this.classes());
  table.content(this.content());
  table.id(this.id());
  table.lang(this.lang());
  table.style(this.style());
  table.title(this.title());
  
  table.addClass(`table`);
  
  /** Transfer table to wrapper */
  wrapper.append(table);
  
  /** Render wrapper */
  return wrapper.render(indent);
};

/** Export class */
module.exports.configTable = configTable;
module.exports.Table = Table;
