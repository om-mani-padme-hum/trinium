/** Require external modules */
const ezhtml = require(`ezhtml`);
const ezobjects = require(`ezobjects`);

/** Require local modules */
const accordians = require(`./accordians`);
const alerts = require(`./alerts`);
const anchors = require(`./anchors`);
const blanks = require(`./blanks`);
const buttons = require(`./buttons`);
const cards = require(`./cards`);
const checkboxGroups = require(`./checkbox-groups`);
const forms = require(`./forms`);
const headings = require(`./headings`);
const images = require(`./images`);
const inputs = require(`./inputs`);
const orderedLists = require(`./ordered-lists`);
const paragraphs = require(`./paragraphs`);
const radioGroups = require(`./radio-groups`);
const selects = require(`./selects`);
const tables = require(`./tables`);
const textAreas = require(`./text-areas`);
const unorderedLists = require(`./unordered-lists`);
const validation = require(`./validation`);

/** Configure class */
const configContainer = {
  className: `Container`,
  extends: ezhtml.Container,
  extendsConfig: ezhtml.configContainer,
  properties: [
    { name: `parent`, instanceOf: `Child` },
    { name: `width`, type: `string`, default: `100` },
    { name: `wrapperClasses`, type: `Array`, arrayOf: { type: `string` } }
  ]
};

/** Create class */
ezobjects.createClass(configContainer);

/** Create, if desired append, and return new accordian component */
Container.prototype.accordian = function (append = true) {
  /** Create accordian */
  const accordian = new accordians.Accordian();
  
  /** Append accordian to container, if desired */
  if ( append )
    this.append(accordian);
  
  /** Return accordian for call chaining */
  return accordian;
};

/** Add wrapper class helper */
Container.prototype.addWrapperClass = function (wrapperClass) {
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

/** Create, if desired append, and return new alert component */
Container.prototype.alert = function (append = true) {
  /** Create alert */
  const alert = new alerts.Alert();
  
  /** Append alert to container, if desired */
  if ( append )
    this.append(alert);
  
  /** Return alert for call chaining */
  return alert;
};

/** Create, if desired append, and return new anchor component */
Container.prototype.anchor = function (append = true, wrapper = true) {
  /** If no wrapper is desired, return plain anchor */
  if ( !wrapper )
    return new ezhtml.Anchor();
  
  /** Create anchor */
  const anchor = new anchors.Anchor();
  
  /** Append anchor to container, if desired */
  if ( append )
    this.append(anchor);
  
  /** Return anchor for call chaining */
  return anchor;
};

/** Create, if desired append, and return new blank component */
Container.prototype.blank = function (append = true) {
  /** Create blank */
  const blank = new blanks.Blank();
  
  /** Append blank to container, if desired */
  if ( append )
    this.append(blank);
  
  /** Return blank for call chaining */
  return blank;
};

/** Create, if desired append, and return new button component */
Container.prototype.button = function (append = true, wrapper = true) {
  /** If no wrapper is desired, return plain button */
  if ( !wrapper )
    return new ezhtml.Button();
  
  /** Create button */
  const button = new buttons.Button();
  
  /** Append button to container, if desired */
  if ( append )
    this.append(button);
  
  /** Return button for call chaining */
  return button;
};

/** Create, if desired append, and return new card component */
Container.prototype.card = function (append = true) {
  /** Create card */
  const card = new cards.Card();
  
  /** Append card to container, if desired */
  if ( append )
    this.append(card);
  
  /** Return card for call chaining */
  return card;
};

/** Create, if desired append, and return new checkbox group component */
Container.prototype.checkboxes = function (append = true) {
  /** Create checkbox group */
  const checkboxes = new checkboxGroups.CheckboxGroup();
  
  /** Append checkbox group to container, if desired */
  if ( append )
    this.append(checkboxes);
  
  /** Return checkbox group for call chaining */
  return checkboxes;
};

/** Create, if desired append, and return new color input component */
Container.prototype.color = function (append = true, wrapper = true) {
  /** If no wrapper is desired, return plain input of color type */
  if ( !wrapper )
    return new ezhtml.Input().type(`color`);
  
  /** Create input of color type */
  const input = new inputs.Input().type(`color`);
  
  /** Append input to container, if desired */
  if ( append )
    this.append(input);
  
  /** Return input for call chaining */
  return input;
};

/** Create, if desired append, and return new container component */
Container.prototype.container = function (append = true) {
  /** Create container */
  const container = new Container();
  
  /** Append container to container, if desired */
  if ( append )
    this.append(container);
  
  /** Return container for call chaining */
  return container;
};

/** Create, if desired append, and return new date input component */
Container.prototype.date = function (append = true, wrapper = true) {
  /** If no wrapper is desired, return plain input of date type */
  if ( !wrapper )
    return new ezhtml.Input().type(`date`);
  
  /** Create input of date type */
  const input = new inputs.Input().type(`date`);
  
  /** Append input to container, if desired */
  if ( append )
    this.append(input);
  
  /** Return input for call chaining */
  return input;
};

/** Create, if desired append, and return new datetime input component */
Container.prototype.datetime = function (append = true, wrapper = true) {
  /** If no wrapper is desired, return plain input of datetime type */
  if ( !wrapper )
    return new ezhtml.Input().type(`datetime-local`);
  
  /** Create input of datetime type */
  const input = new inputs.Input().type(`datetime-local`);
  
  /** Append input to container, if desired */
  if ( append )
    this.append(input);
  
  /** Return input for call chaining */
  return input;
};

/** Create, if desired append, and return new email input component */
Container.prototype.email = function (append = true, wrapper = true) {
  /** If no wrapper is desired, return plain input of email type */
  if ( !wrapper )
    return new ezhtml.Input().type(`email`);
  
  /** Create input of email type */
  const input = new inputs.Input().type(`email`);
  
  /** Append input to container, if desired */
  if ( append )
    this.append(input);
  
  /** Return input for call chaining */
  return input;
};

/** Create, if desired append, and return new file input component */
Container.prototype.file = function (append = true, wrapper = true) {
  /** If no wrapper is desired, return plain input of file type */
  if ( !wrapper )
    return new ezhtml.Input().type(`file`);
  
  /** Create input of file type */
  const input = new inputs.Input().type(`file`);
  
  /** Append input to container, if desired */
  if ( append )
    this.append(input);
  
  /** Return input for call chaining */
  return input;
};

/** Create, if desired append, and return new form component */
Container.prototype.form = function (append = true, wrapper = true) {
  /** If no wrapper is desired, return plain form */
  if ( !wrapper )
    return new ezhtml.Form();
  
  /** Create form */
  const form = new forms.Form();
  
  /** Append form to container, if desired */
  if ( append )
    this.append(form);
  
  /** Return form for call chaining */
  return form;
};

/** Loop from 1 to 6 to create heading methods... */
for ( let i = 1; i <= 6; i++ ) {
  Container.prototype[`h${i}`] = function (append = true, wrapper = true) {
    /** If no wrapper is desired, return plain heading */
    if ( !wrapper )
      return new ezhtml[`H${i}`]();

    /** Create heading */
    const heading = new headings[`H${i}`]();

    /** Append heading to container, if desired */
    if ( append )
      this.append(heading);

    /** Return heading for call chaining */
    return heading;
  };
}

/** Create, if desired append, and return new hidden input component */
Container.prototype.hidden = function (append = true, wrapper = true) {
  /** If no wrapper is desired, return plain input of hidden type */
  if ( !wrapper )
    return new ezhtml.Input().type(`hidden`);
  
  /** Create input of hidden type */
  const input = new inputs.Input().type(`hidden`);
  
  /** Append input to container, if desired */
  if ( append )
    this.append(input);
  
  /** Return input for call chaining */
  return input;
};

/** Create, if desired append, and return new image component */
Container.prototype.image = function (append = true, wrapper = true) {
  /** If no wrapper is desired, return plain image */
  if ( !wrapper )
    return new ezhtml.Image();
  
  /** Create image */
  const image = new images.Image();
  
  /** Append image to container, if desired */
  if ( append )
    this.append(image);
  
  /** Return image for call chaining */
  return image;
};

/** Create, if desired append, and return new month input component */
Container.prototype.month = function (append = true, wrapper = true) {
  /** If no wrapper is desired, return plain input of month type */
  if ( !wrapper )
    return new ezhtml.Input().type(`month`);
  
  /** Create input of month type */
  const input = new inputs.Input().type(`month`);
  
  /** Append input to container, if desired */
  if ( append )
    this.append(input);
  
  /** Return input for call chaining */
  return input;
};

/** Create, if desired append, and return new multiselect component */
Container.prototype.multiselect = function (append = true, wrapper = true) {
  /** If no wrapper is desired, return plain multiselect */
  if ( !wrapper )
    return new ezhtml.Select().multiple(true);
  
  /** Create multiselect */
  const multiselect = new selects.Select().multiple(true);
  
  /** Append multiselect to container, if desired */
  if ( append )
    this.append(multiselect);
  
  /** Return multiselect for call chaining */
  return multiselect;
};

/** Create, if desired append, and return new number input component */
Container.prototype.number = function (append = true, wrapper = true) {
  /** If no wrapper is desired, return plain input of number type */
  if ( !wrapper )
    return new ezhtml.Input().type(`number`);
  
  /** Create input of number type */
  const input = new inputs.Input().type(`number`);
  
  /** Append input to container, if desired */
  if ( append )
    this.append(input);
  
  /** Return input for call chaining */
  return input;
};

/** Create, if desired append, and return new input/select option */
Container.prototype.option = function (append = true) {
  /** Create option */
  const option = new ezhtml.Option();
  
  /** Init last container to null */
  let lastContainer = null;
  
  /** Loop through contents... */
  this.content().forEach((content) => {
    /** If valid container found, set as last container */
    if ( [`CheckboxGroup`, `RadioGroup`, `Select`].includes(content.constructor.name) )
      lastContainer = content;
  });
  
  /** If no valid container found, throw error */
  if ( !lastContainer )
    throw new ReferenceError(`Container.option(): No container exists to place option in, option should succeed checkboxes, radios, or select.`);
  
  /** Append option to last container, if desired */
  if ( append )
    lastContainer.options().push(option);
  
  /** Return heading for call chaining */
  return option;
};

/** Create, if desired append, and return new ordered list component */
Container.prototype.orderedList = function (append = true, wrapper = true) {
  /** If no wrapper is desired, return plain ordered list */
  if ( !wrapper )
    return new ezhtml.OrderedList();
  
  /** Create ordered list */
  const orderedList = new orderedLists.OrderedList();
  
  /** Append ordered list to container, if desired */
  if ( append )
    this.append(orderedList);
  
  /** Return ordered list for call chaining */
  return orderedList;
};

/** Create, if desired append, and return new paragraph component */
Container.prototype.paragraph = function (append = true, wrapper = true) {
  /** If no wrapper is desired, return plain paragraph */
  if ( !wrapper )
    return new ezhtml.Paragraph();

  /** Create paragraph */
  const paragraph = new paragraphs.Paragraph();
  
  /** Append paragraph to container, if desired */
  if ( append )
    this.append(paragraph);
  
  /** Return paragraph for call chaining */
  return paragraph;
};

/** Create, if desired append, and return new password input component */
Container.prototype.password = function (append = true, wrapper = true) {
  /** If no wrapper is desired, return plain input of password type */
  if ( !wrapper )
    return new ezhtml.Input().type(`password`);
  
  /** Create input of password type */
  const input = new inputs.Input().type(`password`);
  
  /** Append input to container, if desired */
  if ( append )
    this.append(input);
  
  /** Return input for call chaining */
  return input;
};

/** Create, if desired append, and return new radio group component */
Container.prototype.radios = function (append = true) {
  /** Create radio group */
  const radios = new radioGroups.RadioGroup();
  
  /** Append radio group to container, if desired */
  if ( append )
    this.append(radios);
  
  /** Return radio group for call chaining */
  return radios;
};

/** Create, if desired append, and return new range input component */
Container.prototype.range = function (append = true, wrapper = true) {
  /** If no wrapper is desired, return plain input of range type */
  if ( !wrapper )
    return new ezhtml.Input().type(`range`);
  
  /** Create input of range type */
  const input = new inputs.Input().type(`range`);
  
  /** Append input to container, if desired */
  if ( append )
    this.append(input);
  
  /** Return input for call chaining */
  return input;
};

/** Remove wrapper class helper */
Container.prototype.removeWrapperClass = function (wrapperClass) {
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

/** Render card */
Container.prototype.render = function (indent = 0) {
  /** Validate width */
  const widthClass = validation.validateWidth(this.width());
  
  /** Create wrapper div and transfer content */
  const wrapper = new ezhtml.Div().addClass(widthClass).addClass(`flex-container`).addClass(this.wrapperClasses().join(` `)).content(this.content());
  
  /** Render wrapper */
  return wrapper.render(indent);
};

/** Create, if desired append, and return new select component */
Container.prototype.select = function (append = true, wrapper = true) {
  /** If no wrapper is desired, return plain select */
  if ( !wrapper )
    return new ezhtml.Select();
  
  /** Create select */
  const select = new selects.Select();
  
  /** Append select to container, if desired */
  if ( append )
    this.append(select);
  
  /** Return select for call chaining */
  return select;
};

/** Create, if desired append, and return new span element */
Container.prototype.span = function (append = true) {
  /** Create span element */
  const span = new ezhtml.Span();
  
  /** Append span to container, if desired */
  if ( append )
    this.append(span);
  
  /** Return span for call chaining */
  return span;
};

/** Create, if desired append, and return new table component */
Container.prototype.table = function (append = true, wrapper = true) {
  /** If no wrapper is desired, return plain table */
  if ( !wrapper )
    return new ezhtml.Table();
  
  /** Create table */
  const table = new tables.Table();
  
  /** Append table to container, if desired */
  if ( append )
    this.append(table);
  
  /** Return table for call chaining */
  return table;
};

/** Create, if desired append, and return new telephone input component */
Container.prototype.telephone = function (append = true, wrapper = true) {
  /** If no wrapper is desired, return plain input of tel type */
  if ( !wrapper )
    return new ezhtml.Input().type(`tel`);
  
  /** Create input of tel type */
  const input = new inputs.Input().type(`tel`);
  
  /** Append input to container, if desired */
  if ( append )
    this.append(input);
  
  /** Return input for call chaining */
  return input;
};

/** Create, if desired append, and return new textarea component */
Container.prototype.textarea = function (append = true, wrapper = true) {
  /** If no wrapper is desired, return plain textarea */
  if ( !wrapper )
    return new ezhtml.TextArea();
  
  /** Create textarea */
  const textarea = new textAreas.TextArea();
  
  /** Append textarea to container, if desired */
  if ( append )
    this.append(textarea);
  
  /** Return textarea for call chaining */
  return textarea;
};

/** Create, if desired append, and return new text input component */
Container.prototype.text = function (append = true, wrapper = true) {
  /** If no wrapper is desired, return plain input of text type */
  if ( !wrapper )
    return new ezhtml.Input().type(`text`);
  
  /** Create input of text type */
  const input = new inputs.Input().type(`text`);
  
  /** Append input to container, if desired */
  if ( append )
    this.append(input);
  
  /** Return input for call chaining */
  return input;
};

/** Create, if desired append, and return new time input component */
Container.prototype.time = function (append = true, wrapper = true) {
  /** If no wrapper is desired, return plain input of time type */
  if ( !wrapper )
    return new ezhtml.Input().type(`time`);
  
  /** Create input of time type */
  const input = new inputs.Input().type(`time`);
  
  /** Append input to container, if desired */
  if ( append )
    this.append(input);
  
  /** Return input for call chaining */
  return input;
};

/** Create, if desired append, and return new unordered list component */
Container.prototype.unorderedList = function (append = true, wrapper = true) {
  /** If no wrapper is desired, return plain unordered list */
  if ( !wrapper )
    return new ezhtml.UnorderedList();
  
  /** Create unordered list */
  const unorderedList = new unorderedLists.UnorderedList();
  
  /** Append unordered list to container, if desired */
  if ( append )
    this.append(unorderedList);
  
  /** Return unordered list for call chaining */
  return unorderedList;
};

/** Create, if desired append, and return new url input component */
Container.prototype.url = function (append = true, wrapper = true) {
  /** If no wrapper is desired, return plain input of url type */
  if ( !wrapper )
    return new ezhtml.Input().type(`url`);
  
  /** Create input of url type */
  const input = new inputs.Input().type(`url`);
  
  /** Append input to container, if desired */
  if ( append )
    this.append(input);
  
  /** Return input for call chaining */
  return input;
};

/** Create, if desired append, and return new week input component */
Container.prototype.week = function (append = true, wrapper = true) {
  /** If no wrapper is desired, return plain input of week type */
  if ( !wrapper )
    return new ezhtml.Input().type(`week`);
  
  /** Create input of week type */
  const input = new inputs.Input().type(`week`);
  
  /** Append input to container, if desired */
  if ( append )
    this.append(input);
  
  /** Return input for call chaining */
  return input;
};

/** Export class and class */
module.exports.Container = Container;
module.exports.configContainer = configContainer;
