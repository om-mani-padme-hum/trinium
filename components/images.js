/** Require external modules */
const ezhtml = require(`ezhtml`);
const ezobjects = require(`ezobjects`);

/** Require local modules */
const validation = require(`./validation`);

/** Configure class */
const configImage = {
  className: `Image`,
  extends: ezhtml.Image,
  extendsConfig: ezhtml.configImage,
  properties: [
    { name: `shadow`, type: `boolean` },
    { name: `width`, type: `string`, default: `100` },
    { name: `wrapperClasses`, type: `Array`, arrayOf: { type: `string` } }
  ]
};

/** Create class */
ezobjects.createClass(configImage);

/** Add wrapper class helper */
Image.prototype.addWrapperClass = function (wrapperClass) {
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
Image.prototype.removeWrapperClass = function (wrapperClass) {
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
Image.prototype.render = function (indent = 0) {
  /** Validate width */
  const widthClass = validation.validateWidth(this.width());
  
  /** Create wrapper div and transfer content */
  const wrapper = new ezhtml.Div().addClass(widthClass).addClass(`image-wrapper`).addClass(this.wrapperClasses().join(` `));
  
  /** Create image */
  const image = new ezhtml.Image();

  /** Transfer properties */
  image.alt(this.alt());
  image.attributes(this.attributes());
  image.classes(this.classes());
  image.crossorigin(this.crossorigin());
  image.height(this.height());
  image.id(this.id());
  image.ismap(this.ismap());
  image.lang(this.lang());
  image.longdesc(this.longdesc());
  image.sizes(this.sizes());
  image.src(this.src());
  image.srcset(this.srcset());
  image.style(this.style());
  image.title(this.title());
  image.usemap(this.usemap());
  
  /** Add image class for sizing */
  image.addClass(widthClass.replace(`flex`, `width`));
  
  /** If we're to apply a shadow, add image shadow class */
  if ( this.shadow() )
    image.addClass(`shadow`);
  
  /** Append image to wrapper */
  wrapper.append(image);
  
  /** Render wrapper */
  return wrapper.render(indent);
};

/** Export class */
module.exports.configImage = configImage;
module.exports.Image = Image;
