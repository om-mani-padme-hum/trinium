/** Require external modules */
const ezobjects = require(`ezobjects`);

/** Configure class */
const configTable = {
  className: `Table`,
  properties: [
    { name: `bordered`, type: `boolean` },
    { name: `header`, type: `string` },
    { name: `headerClass`, type: `string` },
    { name: `rows`, type: `Array`, arrayOf: { type: `TableRow` } },
    { name: `size`, type: `string` },
    { name: `striped`, type: `boolean` }
  ]
};

/** Create class */
ezobjects.createClass(configTable);

/** Export class */
module.exports.Table = Table;
