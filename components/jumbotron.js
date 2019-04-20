/** Require external modules */
const ezhtml = require(`ezhtml`);
const ezobjects = require(`ezobjects`);

/** Configure class */
const configJumbotron = {
  className: `Jumbotron`,
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
ezobjects.createClass(configJumbotron);

/** Export class */
module.exports.configJumbotron = configJumbotron;
module.exports.Jumbotron = Jumbotron;
