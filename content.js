/** Require external modules */
const ezhtml = require(`ezhtml`);
const ezobjects = require(`ezobjects`);

/** Configure class */
const configContent = {
  className: `Content`,
  extends: ezhtml.Container,
  extendsConfig: ezhtml.configContainer
};

/** Create class */
ezobjects.createClass(configContent);

/** Export class */
module.exports.Content = Content;
