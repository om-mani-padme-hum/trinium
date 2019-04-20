/** Require external modules */
const express = require(`express`);
const ezhtml = require(`ezhtml`);
const fs = require(`fs`);
const octicons = require(`octicons`);
const trinium = require(`./index`);

/** Create express app */
const app = express();

/** Serve CSS files from /css dir */
app.get(`/css/:filename`, (req, res, next) => {
  if ( !req.params.filename.match(/\.(css|map)$/) )
    return res.status(404).end();
  
  const cssOptions = {
    root: __dirname + '/css/',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };

  res.sendFile(req.params.filename, cssOptions, function (err) {
    if ( err )
      next(err);
  });
});

/** Serve image files from /images dir */
app.get(`/images/:filename`, (req, res, next) => {
  if ( !req.params.filename.match(/\.(gif|png|jpg|svg|ico)$/) )
    return res.status(404).end();
  
  const imageOptions = {
    root: __dirname + '/images/',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };

  res.sendFile(req.params.filename, imageOptions, function (err) {
    if ( err )
      next(err);
  });
});

/** Serve JavaScript files from /js dir */
app.get(`/js/:filename`, (req, res, next) => {
  if ( !req.params.filename.match(/\.(js|map)$/) )
    return res.status(404).end();
  
  const jsOptions = {
    root: __dirname + '/js/',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };

  res.sendFile(req.params.filename, jsOptions, function (err) {
    if ( err )
      next(err);
  });
});

/** Server example home page */
app.get(`/`, (req, res, next) => {
  /** Create new trinium page */
  const p = new trinium.Page();

  /** Set page title, and add required CSS and JavaScript */
  p.title(`Trinium Demo`);
  p.css().push(`/css/trinium.css`);
  p.javascript().push(`/js/trinium.js`);
  
  /** Create 100% wide heading component */
  p.h2().size(`100`).text(`Welcome To Trinium...`);
  
  /** Create small card component with a white on steel blue header */
  const card = p.card().size(`small`).addHeaderClass(`bg-steel-blue text-white`).header(`A Variety of Components`);
  
  /** Append three paragraphs tot he body of the card */
  card.append(new ezhtml.Paragraph().text(`Trinium comes with a number of built in components, some with APIs that help speed up the design process, such as this simple and easy to use card component with a white on blue header and rounded borders.  Card components have a wrapper that contains a header and a body.  The header is accessible by the .header() method, and everything else that's appended will end up in the body.`));
  card.append(new ezhtml.Paragraph().text(`Next, it's what we've all been waiting for: a simple JavaScript API for creating customized web forms, such as the account application form that you see on this page.  The forms have methods for adding headings, alerts, spaces, and buttons along with checkbox, color, date, datetime, email, file, hidden, month, multiselect, number, password, radio, range, select, tel, textarea, text, time, url, and week inputs.`));
  card.append(new ezhtml.Paragraph().text(`We certainly can't forget about tables like the one shown below.  Tables also have their own API and it's so simple I probably don't have to do anything except give you the names of the methods.  They are .head(), .body(), .footer(), .row(), .header(), and .data().  Each of these return the corresponding element from the <a href='http://github.com/om-mani-padme-hum/ezhtml'>EZ HTML</a> library.`));

  /** Create fixed 500px form component */
  const form = p.form().size(`500px`).addWrapperClass(`fixed`);
  
  /** Set form action and method properties */
  form.action(`/`).method(`GET`);
  
  /** Create 16 column wide form heading (16 columns is also the default and represents 100% wide */
  form.heading().cols(16).rank(1).text(`Join Our Community...`);
  
  /** Create 13 column wide alert */
  form.alert().cols(13).colsBefore(1).type(`error`).strong(`Error!`).text(`Your password must contain at least one lowercase letter, one uppercase letter, and one number!`);
  
  /** Create two six column wide text inputs, separated by 2 space columns */
  form.text().cols(6).colsAfter(2).name(`firstName`).label(`First Name:`).required(true);
  form.text().cols(6).name(`lastName`).label(`Last Name:`).required(true);

  /** Create two seven column wide password inputs, separated by 1 space column */
  form.password().cols(7).colsAfter(1).name(`password`).label(`Choose Password:`).required(true);
  form.password().cols(7).name(`password2`).label(`Confirm Password:`).required(true);
  
  /** Create eight column wide email input */
  form.email().cols(8).name(`email`).label(`Email Address:`).pattern(`[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$`);
  
  /** Create eight column wide horizontally arranged radio group input */
  form.radios().cols(8).name(`sex`).label(`Sex:`).align(`horizontal`);
  form.option().value(`female`).text(`Female`).selected(true);
  form.option().value(`male`).text(`Male`);
  
  /** Create six column wide button spaced 5 space columns in with a white on steel blue appearance */
  form.button().addClass(`bg-steel-blue text-white`).cols(6).colsBefore(5).type(`submit`).text(`Create Account`);
  
  /** Create a tiny sized table */
  const table = p.table().size(`tiny`);
  
  /** Create table head */
  table.head();
  
  /** Create table row in table head */
  table.row();
  
  /** Create table headers with white on steel blue appearance */
  table.header().addClass(`bg-steel-blue text-white`).text(`Column 1`);
  table.header().addClass(`bg-steel-blue text-white`).text(`Column 2`);
  table.header().addClass(`bg-steel-blue text-white`).text(`&nbsp;`);
  table.header().addClass(`bg-steel-blue text-white`).text(`&nbsp;`);
  
  /** Create table body */
  table.body();
  
  /** Loop from 1 to 12 for demo table row numbers... */
  for ( let i = 1; i <= 12; i++ ) {
    /** Create table row in table body */
    table.row();
    
    /** Create table data cells with example data */
    table.data().text(`Row ${i} Data 1`);
    table.data().text(`Row ${i} Data 2`);
    table.data().style(`text-align: center;`).append(new ezhtml.Anchor().href(`edit?id=${i}`).text(octicons.pencil.toSVG({ width: 16 })));
    table.data().style(`text-align: center;`).append(new ezhtml.Anchor().href(`delete?id=${i}`).text(octicons.trashcan.toSVG({ width: 16 })));
  }
  
  /** Create tiny sized stack component */
  const stack = p.stack().size(`tiny`);
  
  /** Append 100% wide H5 heading component to the stack with bottom padding removed byway of a helper class */
  stack.append(p.h5(false).size(`100`).addWrapperClass(`pb-0`).text(`Miss Molly at Age 2ish`));
  
  /** Append 100% wide image component to the stack with shadow applied */
  stack.append(p.image(false).size(`100`).src(`/images/example.jpg`).shadow(true));
  
  /** Create fixed, small sized blank component back on the main page */
  const blank = p.blank().size(`small`).addWrapperClass(`fixed`);
  
  /** Append four paragraphs of text with example inline image, link, and special font feature */
  blank.append(new ezhtml.Paragraph().text(`The picture you saw in the stack component with nested heading and image components was of my niece Molly when she was about two years old I would guess.  <img src='/images/example.jpg' class='float-right width-150px image-shadow-sm m-2'> She's always been a cutie so I figured she'd work well in the demo.`));
  blank.append(new ezhtml.Paragraph().text(`I'm including her again in this blank component that has had three paragraphs and her image appended to show how simple it is to get text and image content to flow together using simple classes like float-left and float-right.`));
  blank.append(new ezhtml.Paragraph().text(`You can also see that it's possible to just write HTML inline in the text for simple things like inline images, <a href='http://github.com/om-mani-padme-hum/trinium'>links</a>, <i>special font features</i>, and other traditional inter-paragraph content.`));
  blank.append(new ezhtml.Paragraph().text(`You heard me refer to the stack component with the nested heading and image components containing the larger image of my niece enjoying some pizza.  Stack components are extremely useful for combining multiple smaller components adjacent to larger components, or adding headings to components like tables, images, forms, etc.`));
  
  /** Render and send page as response */
  res.send(p.render());

  /** Call next express handler */
  next();
});

/** Start server on port 3000 */
app.listen(3000, () => {
  console.log(`Trinium demo is up and running on port 3000!`);
});
