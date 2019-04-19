/** Require external modules */
const ezforms = require(`ezforms`);
const ezobjects = require(`ezobjects`);

/** Configure class */
const configForm = {
  className: `Form`,
  extends: ezforms.Form,
  eztendsConfig: ezforms.configForm
};

/** Create class */
ezobjects.createClass(configForm);

/** Export class */
module.exports.Form = Form;
