/** Require external modules */
const ezhtml = require(`ezhtml`);
const ezobjects = require(`ezobjects`);

/** Require local modules */
const alerts = require(`./alerts`);
const anchors = require(`./anchors`);
const blanks = require(`./blanks`);
const buttons = require(`./buttons`);
const cards = require(`./cards`);
const checkboxGroups = require(`./checkbox-groups`);
const containers = require(`./containers`);
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

/** Configure class */
const configAccordianSection = {
  className: `AccordianSection`,
  extends: ezhtml.Container,
  extendsConfig: ezhtml.configContainer,
  properties: [
    { name: `bodyClasses`, type: `Array`, arrayOf: { type: `string` } },
    { name: `headerContainer`, type: `Container` },
    { name: `headerClasses`, type: `Array`, arrayOf: { type: `string` } },
  ]
};

/** Create class */
ezobjects.createClass(configAccordianSection);

/** Add body class helper */
AccordianSection.prototype.addBodyClass = function (bodyClass) {
  /** Get array of non-empty class names to be added */
  const classes = bodyClass.trim().split(` `).map(x => x.trim()).filter(x => x.length > 0);

  /** Loop through classes to be added... */
  classes.forEach((className) => {
    /** If the class to be added isn't already in the classes array, append to array */
    if ( !this.bodyClasses().includes(className) )
      this.bodyClasses().push(className);
  });
  
  /** Return this object for call chaining */
  return this;
};

/** Add header class helper */
AccordianSection.prototype.addHeaderClass = function (headerClass) {
  /** Get array of non-empty class names to be added */
  const classes = headerClass.trim().split(` `).map(x => x.trim()).filter(x => x.length > 0);

  /** Loop through classes to be added... */
  classes.forEach((className) => {
    /** If the class to be added isn't already in the classes array, append to array */
    if ( !this.headerClasses().includes(className) )
      this.headerClasses().push(className);
  });
  
  /** Return this object for call chaining */
  return this;
};

/** Create, if desired append, and return new alert component */
AccordianSection.prototype.alert = function (append = true) {
  /** Create alert */
  const alert = new alerts.Alert();
  
  /** Append alert to section, if desired */
  if ( append )
    this.append(alert);
  
  /** Return alert for call chaining */
  return alert;
};

/** Create, if desired append, and return new anchor component */
AccordianSection.prototype.anchor = function (append = true, wrapper = true) {
  /** If no wrapper is desired, return plain anchor */
  if ( !wrapper )
    return new ezhtml.Anchor();
  
  /** Create anchor */
  const anchor = new anchors.Anchor();
  
  /** Append anchor to section, if desired */
  if ( append )
    this.append(anchor);
  
  /** Return anchor for call chaining */
  return anchor;
};

/** Create, if desired append, and return new blank component */
AccordianSection.prototype.blank = function (append = true) {
  /** Create blank */
  const blank = new blanks.Blank();
  
  /** Append blank to section, if desired */
  if ( append )
    this.append(blank);
  
  /** Return blank for call chaining */
  return blank;
};

/** Create, if desired append, and return new button component */
AccordianSection.prototype.button = function (append = true, wrapper = true) {
  /** If no wrapper is desired, return plain button */
  if ( !wrapper )
    return new ezhtml.Button();
  
  /** Create button */
  const button = new buttons.Button();
  
  /** Append button to section, if desired */
  if ( append )
    this.append(button);
  
  /** Return button for call chaining */
  return button;
};

/** Create, if desired append, and return new card component */
AccordianSection.prototype.card = function (append = true) {
  /** Create card */
  const card = new cards.Card();
  
  /** Append card to section, if desired */
  if ( append )
    this.append(card);
  
  /** Return card for call chaining */
  return card;
};

/** Create, if desired append, and return new checkbox group component */
AccordianSection.prototype.checkboxes = function (append = true) {
  /** Create checkbox group */
  const checkboxes = new checkboxGroups.CheckboxGroup();
  
  /** Append checkbox group to section, if desired */
  if ( append )
    this.append(checkboxes);
  
  /** Return checkbox group for call chaining */
  return checkboxes;
};

/** Create, if desired append, and return new color input component */
AccordianSection.prototype.color = function (append = true, wrapper = true) {
  /** If no wrapper is desired, return plain input of color type */
  if ( !wrapper )
    return new ezhtml.Input().type(`color`);
  
  /** Create input of color type */
  const input = new inputs.Input().type(`color`);
  
  /** Append input to section, if desired */
  if ( append )
    this.append(input);
  
  /** Return input for call chaining */
  return input;
};

/** Create, if desired append, and return new container component */
AccordianSection.prototype.container = function (append = true) {
  /** Create container */
  const container = new containers.Container();
  
  /** Append container to section, if desired */
  if ( append )
    this.append(container);
  
  /** Return container for call chaining */
  return container;
};

/** Create, if desired append, and return new date input component */
AccordianSection.prototype.date = function (append = true, wrapper = true) {
  /** If no wrapper is desired, return plain input of date type */
  if ( !wrapper )
    return new ezhtml.Input().type(`date`);
  
  /** Create input of date type */
  const input = new inputs.Input().type(`date`);
  
  /** Append input to section, if desired */
  if ( append )
    this.append(input);
  
  /** Return input for call chaining */
  return input;
};

/** Create, if desired append, and return new datetime input component */
AccordianSection.prototype.datetime = function (append = true, wrapper = true) {
  /** If no wrapper is desired, return plain input of datetime type */
  if ( !wrapper )
    return new ezhtml.Input().type(`datetime-local`);
  
  /** Create input of datetime type */
  const input = new inputs.Input().type(`datetime-local`);
  
  /** Append input to section, if desired */
  if ( append )
    this.append(input);
  
  /** Return input for call chaining */
  return input;
};

/** Create, if desired append, and return new email input component */
AccordianSection.prototype.email = function (append = true, wrapper = true) {
  /** If no wrapper is desired, return plain input of email type */
  if ( !wrapper )
    return new ezhtml.Input().type(`email`);
  
  /** Create input of email type */
  const input = new inputs.Input().type(`email`);
  
  /** Append input to section, if desired */
  if ( append )
    this.append(input);
  
  /** Return input for call chaining */
  return input;
};

/** Create, if desired append, and return new file input component */
AccordianSection.prototype.file = function (append = true, wrapper = true) {
  /** If no wrapper is desired, return plain input of file type */
  if ( !wrapper )
    return new ezhtml.Input().type(`file`);
  
  /** Create input of file type */
  const input = new inputs.Input().type(`file`);
  
  /** Append input to section, if desired */
  if ( append )
    this.append(input);
  
  /** Return input for call chaining */
  return input;
};

/** Create, if desired append, and return new form component */
AccordianSection.prototype.header = function () {
  /** If the header container is null, create new and set */
  if ( !this.headerContainer() )
    this.headerContainer(this.container(false));
  
  /** Return header container for call chaining */
  return this.headerContainer();
}
/** Loop from 1 to 6 to create heading methods... */
for ( let i = 1; i <= 6; i++ ) {
  AccordianSection.prototype[`h${i}`] = function (append = true, wrapper = true) {
    /** If no wrapper is desired, return plain heading */
    if ( !wrapper )
      return new ezhtml[`H${i}`]();

    /** Create heading */
    const heading = new headings[`H${i}`]();

    /** Append heading to section, if desired */
    if ( append )
      this.append(heading);

    /** Return heading for call chaining */
    return heading;
  };
}

/** Create, if desired append, and return new hidden input component */
AccordianSection.prototype.hidden = function (append = true, wrapper = true) {
  /** If no wrapper is desired, return plain input of hidden type */
  if ( !wrapper )
    return new ezhtml.Input().type(`hidden`);
  
  /** Create input of hidden type */
  const input = new inputs.Input().type(`hidden`);
  
  /** Append input to section, if desired */
  if ( append )
    this.append(input);
  
  /** Return input for call chaining */
  return input;
};

/** Create, if desired append, and return new image component */
AccordianSection.prototype.image = function (append = true, wrapper = true) {
  /** If no wrapper is desired, return plain image */
  if ( !wrapper )
    return new ezhtml.Image();
  
  /** Create image */
  const image = new images.Image();
  
  /** Append image to section, if desired */
  if ( append )
    this.append(image);
  
  /** Return image for call chaining */
  return image;
};

/** Create, if desired append, and return new month input component */
AccordianSection.prototype.month = function (append = true, wrapper = true) {
  /** If no wrapper is desired, return plain input of month type */
  if ( !wrapper )
    return new ezhtml.Input().type(`month`);
  
  /** Create input of month type */
  const input = new inputs.Input().type(`month`);
  
  /** Append input to section, if desired */
  if ( append )
    this.append(input);
  
  /** Return input for call chaining */
  return input;
};

/** Create, if desired append, and return new multiselect component */
AccordianSection.prototype.multiselect = function (append = true, wrapper = true) {
  /** If no wrapper is desired, return plain multiselect */
  if ( !wrapper )
    return new ezhtml.Select().multiple(true);
  
  /** Create multiselect */
  const multiselect = new selects.Select().multiple(true);
  
  /** Append multiselect to section, if desired */
  if ( append )
    this.append(multiselect);
  
  /** Return multiselect for call chaining */
  return multiselect;
};

/** Create, if desired append, and return new number input component */
AccordianSection.prototype.number = function (append = true, wrapper = true) {
  /** If no wrapper is desired, return plain input of number type */
  if ( !wrapper )
    return new ezhtml.Input().type(`number`);
  
  /** Create input of number type */
  const input = new inputs.Input().type(`number`);
  
  /** Append input to section, if desired */
  if ( append )
    this.append(input);
  
  /** Return input for call chaining */
  return input;
};

/** Create, if desired append, and return new input/select option */
AccordianSection.prototype.option = function (append = true) {
  /** Create option */
  const option = new ezhtml.Option();
  
  /** Init last container to null */
  let lastAccordianSection = null;
  
  /** Loop through contents... */
  this.content().forEach((content) => {
    /** If valid container found, set as last container */
    if ( [`CheckboxGroup`, `RadioGroup`, `Select`].includes(content.constructor.name) )
      lastAccordianSection = content;
  });
  
  /** If no valid container found, throw error */
  if ( !lastAccordianSection )
    throw new ReferenceError(`AccordianSection.option(): No container exists to place option in, option should succeed checkboxes, radios, or select.`);
  
  /** Append option to last container, if desired */
  if ( append )
    lastAccordianSection.options().push(option);
  
  /** Return heading for call chaining */
  return option;
};

/** Create, if desired append, and return new ordered list component */
AccordianSection.prototype.orderedList = function (append = true, wrapper = true) {
  /** If no wrapper is desired, return plain ordered list */
  if ( !wrapper )
    return new ezhtml.OrderedList();
  
  /** Create ordered list */
  const orderedList = new orderedLists.OrderedList();
  
  /** Append ordered list to section, if desired */
  if ( append )
    this.append(orderedList);
  
  /** Return ordered list for call chaining */
  return orderedList;
};

/** Create, if desired append, and return new paragraph component */
AccordianSection.prototype.paragraph = function (append = true, wrapper = true) {
  /** If no wrapper is desired, return plain paragraph */
  if ( !wrapper )
    return new ezhtml.Paragraph();

  /** Create paragraph */
  const paragraph = new paragraphs.Paragraph();
  
  /** Append paragraph to section, if desired */
  if ( append )
    this.append(paragraph);
  
  /** Return paragraph for call chaining */
  return paragraph;
};

/** Create, if desired append, and return new password input component */
AccordianSection.prototype.password = function (append = true, wrapper = true) {
  /** If no wrapper is desired, return plain input of password type */
  if ( !wrapper )
    return new ezhtml.Input().type(`password`);
  
  /** Create input of password type */
  const input = new inputs.Input().type(`password`);
  
  /** Append input to section, if desired */
  if ( append )
    this.append(input);
  
  /** Return input for call chaining */
  return input;
};

/** Create, if desired append, and return new radio group component */
AccordianSection.prototype.radios = function (append = true) {
  /** Create radio group */
  const radios = new radioGroups.RadioGroup();
  
  /** Append radio group to section, if desired */
  if ( append )
    this.append(radios);
  
  /** Return radio group for call chaining */
  return radios;
};

/** Create, if desired append, and return new range input component */
AccordianSection.prototype.range = function (append = true, wrapper = true) {
  /** If no wrapper is desired, return plain input of range type */
  if ( !wrapper )
    return new ezhtml.Input().type(`range`);
  
  /** Create input of range type */
  const input = new inputs.Input().type(`range`);
  
  /** Append input to section, if desired */
  if ( append )
    this.append(input);
  
  /** Return input for call chaining */
  return input;
};

/** Remove body class helper */
AccordianSection.prototype.removeBodyClass = function (bodyClass) {
  /** Get array of non-empty class names to be removed */
  const classes = bodyClass.trim().split(` `).map(x => x.trim()).filter(x => x.length > 0);

  /** Loop through classes to be removed... */
  classes.forEach((className) => {
    /** If the class to be removed is in the classes array, splice out of array */
    if ( this.bodyClasses().includes(className) )
      this.bodyClasses().splice(this.bodyClasses().findIndex(className), 1);
  });
  
  /** Return this object for call chaining */
  return this;
};

/** Remove header class helper */
AccordianSection.prototype.removeHeaderClass = function (headerClass) {
  /** Get array of non-empty class names to be removed */
  const classes = headerClass.trim().split(` `).map(x => x.trim()).filter(x => x.length > 0);

  /** Loop through classes to be removed... */
  classes.forEach((className) => {
    /** If the class to be removed is in the classes array, splice out of array */
    if ( this.headerClasses().includes(className) )
      this.headerClasses().splice(this.headerClasses().findIndex(className), 1);
  });
  
  /** Return this object for call chaining */
  return this;
};

/** Render section */
AccordianSection.prototype.render = function (indent = 0) {
  /** Create section header and add header classes */
  const sectionHeader = new ezhtml.Div().addClass(`accordian-header`).addClass(this.headerClasses().join(` `));

  /** Create section anchor and set JavaScript URL to use our trinium library */
  const sectionAnchor = new ezhtml.Anchor().href(`javascript:toggleAccordian()`);
                                                                                                
  /** Create header anchor and append header text */
  sectionHeader.append(sectionAnchor);
  
  /** Append additional content from header container to anchor */
  sectionAnchor.content().push(...this.header().content());
    
  /** Create section body and transfer content */
  const sectionBody = new ezhtml.Div().addClass(`accordian-body`).addClass(this.bodyClasses().join(` `)).content(this.content());
  
  /** Render wrapper */
  return sectionHeader.render(indent) + sectionBody.render(indent);
};

/** Create, if desired append, and return new select component */
AccordianSection.prototype.select = function (append = true, wrapper = true) {
  /** If no wrapper is desired, return plain select */
  if ( !wrapper )
    return new ezhtml.Select();
  
  /** Create select */
  const select = new selects.Select();
  
  /** Append select to section, if desired */
  if ( append )
    this.append(select);
  
  /** Return select for call chaining */
  return select;
};

/** Create, if desired append, and return new span element */
AccordianSection.prototype.span = function (append = true) {
  /** Create span element */
  const span = new ezhtml.Span();
  
  /** Append span to section, if desired */
  if ( append )
    this.append(span);
  
  /** Return span for call chaining */
  return span;
};

/** Create, if desired append, and return new table component */
AccordianSection.prototype.table = function (append = true, wrapper = true) {
  /** If no wrapper is desired, return plain table */
  if ( !wrapper )
    return new ezhtml.Table();
  
  /** Create table */
  const table = new tables.Table();
  
  /** Append table to section, if desired */
  if ( append )
    this.append(table);
  
  /** Return table for call chaining */
  return table;
};

/** Create, if desired append, and return new telephone input component */
AccordianSection.prototype.telephone = function (append = true, wrapper = true) {
  /** If no wrapper is desired, return plain input of tel type */
  if ( !wrapper )
    return new ezhtml.Input().type(`tel`);
  
  /** Create input of tel type */
  const input = new inputs.Input().type(`tel`);
  
  /** Append input to section, if desired */
  if ( append )
    this.append(input);
  
  /** Return input for call chaining */
  return input;
};

/** Create, if desired append, and return new textarea component */
AccordianSection.prototype.textarea = function (append = true, wrapper = true) {
  /** If no wrapper is desired, return plain textarea */
  if ( !wrapper )
    return new ezhtml.TextArea();
  
  /** Create textarea */
  const textarea = new textAreas.TextArea();
  
  /** Append textarea to section, if desired */
  if ( append )
    this.append(textarea);
  
  /** Return textarea for call chaining */
  return textarea;
};

/** Create, if desired append, and return new text input component */
AccordianSection.prototype.text = function (append = true, wrapper = true) {
  /** If no wrapper is desired, return plain input of text type */
  if ( !wrapper )
    return new ezhtml.Input().type(`text`);
  
  /** Create input of text type */
  const input = new inputs.Input().type(`text`);
  
  /** Append input to section, if desired */
  if ( append )
    this.append(input);
  
  /** Return input for call chaining */
  return input;
};

/** Create, if desired append, and return new time input component */
AccordianSection.prototype.time = function (append = true, wrapper = true) {
  /** If no wrapper is desired, return plain input of time type */
  if ( !wrapper )
    return new ezhtml.Input().type(`time`);
  
  /** Create input of time type */
  const input = new inputs.Input().type(`time`);
  
  /** Append input to section, if desired */
  if ( append )
    this.append(input);
  
  /** Return input for call chaining */
  return input;
};

/** Create, if desired append, and return new unordered list component */
AccordianSection.prototype.unorderedList = function (append = true, wrapper = true) {
  /** If no wrapper is desired, return plain unordered list */
  if ( !wrapper )
    return new ezhtml.UnorderedList();
  
  /** Create unordered list */
  const unorderedList = new unorderedLists.UnorderedList();
  
  /** Append unordered list to section, if desired */
  if ( append )
    this.append(unorderedList);
  
  /** Return unordered list for call chaining */
  return unorderedList;
};

/** Create, if desired append, and return new url input component */
AccordianSection.prototype.url = function (append = true, wrapper = true) {
  /** If no wrapper is desired, return plain input of url type */
  if ( !wrapper )
    return new ezhtml.Input().type(`url`);
  
  /** Create input of url type */
  const input = new inputs.Input().type(`url`);
  
  /** Append input to section, if desired */
  if ( append )
    this.append(input);
  
  /** Return input for call chaining */
  return input;
};

/** Create, if desired append, and return new week input component */
AccordianSection.prototype.week = function (append = true, wrapper = true) {
  /** If no wrapper is desired, return plain input of week type */
  if ( !wrapper )
    return new ezhtml.Input().type(`week`);
  
  /** Create input of week type */
  const input = new inputs.Input().type(`week`);
  
  /** Append input to section, if desired */
  if ( append )
    this.append(input);
  
  /** Return input for call chaining */
  return input;
};

/** Export class */
module.exports.AccordianSection = AccordianSection;
module.exports.configAccordianSection = configAccordianSection;
