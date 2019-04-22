/** Require external modules */
const ezhtml = require(`ezhtml`);
const ezobjects = require(`ezobjects`);

/** Require local moduels */
const containers = require(`./containers`);

/** Configure class */
const configPage = {
  className: `Page`,
  extends: containers.Container,
  extendsConfig: containers.configContainer,
  properties: [
    { name: `css`, type: `Array`, arrayOf: { type: `string` } },
    { name: `javascript`, type: `Array`, arrayOf: { type: `string` } },
    { name: `title`, type: `string` }
  ]
};

/** Create class */
ezobjects.createClass(configPage);

/** Render page */
Page.prototype.render = function (indent = 0) {
  /** Create html */
  const html = new ezhtml.HTML();
  
  /** Create head */
  const head = new ezhtml.Head();
  
  /** Loop through each CSS source... */
  this.css().forEach((css) => {
    /** Create link for CSS source */
    const link = new ezhtml.Link().rel(`stylesheet`).type(`text/css`).href(css);
    
    /** Append link to head */
    head.append(link);
  });
  
  /** Create body */
  const body = new ezhtml.Body();
  
  /** Transfer content to body */
  body.content(this.content());
  
  /** Loop through each JavaScript source... */
  this.javascript().forEach((javascript) => {
    /** Create script for JavaScript source */
    const script = new ezhtml.Script().src(javascript);
    
    /** Append script to body */
    body.append(script);
  });
  
  /** Append head to html */
  html.append(head);
  
  /** Append body to html */
  html.append(body);
  
  /** Return rendered markup */
  return html.render(indent);
};

/** Export class */
module.exports.Page = Page;
