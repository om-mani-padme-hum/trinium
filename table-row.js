/** Require external modules */
const ezobjects = require(`ezobjects`);

/** Configure class */
const configTableRow = {
  className: `TableRow`,
  properties: [
    { name: `class`, type: `string` },
    { name: `columns`, type: `Array`, arrayOf: { type: `TableColumn` } }
  ]
};

/** Create class */
ezobjects.createClass(configTableRow);

/** Export class */
module.exports.TableRow = TableRow;
