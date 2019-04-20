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
    { name: `size`, type: `string`, default: `tiny` },
    { name: `wrapperClasses`, type: `Array`, arrayOf: { type: `string` } }
  ]
};

/** Create class */
ezobjects.createClass(configImage);

/** Add wrapper class helper */
Image.prototype.addWrapperClass = function (wrapperClass) {
  /** Append class to classes array */
  this.wrapperClasses().push(wrapperClass);
  
  /** Return this object for call chaining */
  return this;
};

/** Render card */
Image.prototype.render = function (indent = 0) {
  /** Validate size */
  const sizeClass = validation.validateSize(this.size());
  
  /** Create wrapper div and transfer content */
  const wrapper = new ezhtml.Div().addClass(sizeClass).addClass(`t-image-wrapper`).addClass(this.wrapperClasses().join(` `));
  
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
  image.width(this.width());
  
  /** Add image class for sizing */
  image.addClass(sizeClass.replace(`t-flex`, `t-image`));
  
  /** If we're to apply a shadow, add image shadow class */
  if ( this.shadow() )
    image.addClass(`t-image-shadow`);
  
  /** Append image to wrapper */
  wrapper.append(image);
  
  /** Render wrapper */
  return wrapper.render(indent);
};

/** Export class */
module.exports.Image = Image;
