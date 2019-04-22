/** Require external modules */
const ezhtml = require(`ezhtml`);
const ezobjects = require(`ezobjects`);
const octicons = require(`octicons`);

/** Require local modules */
const validation = require(`./validation`);

/** Configure class */
const configAlert = {
  className: `Alert`,
  extends: ezhtml.Div,
  extendsConfig: ezhtml.configDiv,
  properties: [
    { name: `strong`, type: `string` },
    { name: `type`, type: `string`, default: `error` },
    { name: `width`, type: `string`, default: `100` },
    { name: `wrapperClasses`, type: `Array`, arrayOf: { type: `string` } }
  ]
};

/** Create class */
ezobjects.createClass(configAlert);

/** Add wrapper class helper */
Alert.prototype.addWrapperClass = function (wrapperClass) {
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
Alert.prototype.removeWrapperClass = function (wrapperClass) {
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

/** Render alert component */
Alert.prototype.render = function (indent = 0) {
  /** Validate width */
  const widthClass = validation.validateWidth(this.width());
  
  /** Validate alert type */
  validation.validateAlertType(this.type());
  
  /** Create wrapper div and add width and wrapper classes */
  const wrapper = new ezhtml.Div().addClass(widthClass).addClass(this.wrapperClasses().join(` `));
  
  /** Create alert div */
  const alert = new ezhtml.Div();
  
  /** Transfer properties */
  alert.attributes(this.attributes());
  alert.classes(this.classes());
  alert.content(this.content());
  alert.id(this.id());
  alert.lang(this.lang());
  alert.style(this.style());
  alert.title(this.title());
  
  /** Apply alert class appropriate for type */
  if ( this.type() == `error` )
    alert.addClass(`alert-error`);
  else if ( this.type() == `warning` )
    alert.addClass(`alert-warning`);
  else if ( this.type() == `success` )
    alert.addClass(`alert-success`);
  else if ( this.type() == `info` )
    alert.addClass(`alert-info`);

  /** Assume alert is error type, so default to alert icon */
  let icon = octicons.alert.toSVG({ width: 16 })
  
  /** If alert is warning type, use issue opened icon */
  if ( this.type() == `warning` )
    icon = octicons[`issue-opened`].toSVG({ width: 16 });
  
  /** Otherwise, if alert is success type, use check icon */
  else if ( this.type() == `success` )
    icon = octicons.check.toSVG({ width: 16 });
  
  /** Otherwise, if alert is info type, use question mark */
  else if ( this.type() == `info` )
    icon = octicons.question.toSVG({ width: 16 });
  
  const strong = new ezhtml.Strong().text(icon + `&nbsp;&nbsp;` + this.strong() + ` `);
  
  /** Prepend strong text to alert if it has length */
  if ( this.strong().length > 0 )
    alert.prepend(strong);
  
  /** Append alert to wrapper */
  wrapper.append(alert);
  
  /** Return markup */
  return wrapper.render(indent);
};

/** Export class from module */
module.exports.configAlert = configAlert;
module.exports.Alert = Alert;
