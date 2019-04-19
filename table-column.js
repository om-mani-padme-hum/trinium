/** Require external modules */
const ezobjects = require(`ezobjects`);

/** Configure class */
const configTableColumn = {
  className: `TableColumn`,
  extends: ezhtml.Container,
  eztendsConfig: ezhtml.configContainer,
  properties: [
    { name: `class`, type: `string` },
    { name: `colspan`, type: `int` },
    { name: `footer`, type: `boolean` },
    { name: `header`, type: `boolean` }
  ]
};

/** Create class */
ezobjects.createClass(configTableColumn);

/** Export class */
module.exports.TableColumn = TableColumn;
