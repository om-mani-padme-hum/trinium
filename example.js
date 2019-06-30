/** Require external modules */
const express = require(`express`);
const octicons = require(`octicons`);
const trinium = require(`./index`);

/** Create express app */
const app = express();

/** Serve CSS files from /css directory */
app.get(`/css/:filename`, (req, res, next) => {
  /** Attempt to send file from /css directory, passing any errors to next route */
  res.sendFile(req.params.filename, { root: __dirname + '/css/' }, (err) => {
    if ( err )
      next(err);
  });
});

/** Serve image files from /images directory */
app.get(`/images/:filename`, (req, res, next) => {
  /** Attempt to send file from /css directory, passing any errors to next route */
  res.sendFile(req.params.filename, { root: __dirname + '/images/' }, (err) => {
    if ( err )
      next(err);
  });
});

/** Serve JavaScript files from /js directory */
app.get(`/js/:filename`, (req, res, next) => {
  /** Attempt to send file from /css directory, passing any errors to next route */
  res.sendFile(req.params.filename, { root: __dirname + '/js/' }, (err) => {
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
  
  /** Create 100% wide H2 heading component (100% wide is the default if you don't use the width() method) */
  p.h2().text(`Welcome To Trinium...`);
  
  /** Create small card component with a white on steel blue header */
  const card = p.card().width(`medium`).addHeaderClass(`bg-steel-blue text-white`).header(`A Variety of Components`);
  
  /** Append three paragraphs to the body of the card */
  card.paragraph().text(`Trinium comes with a number of built in components, some with APIs that help speed up the design process, such as this simple and easy to use card component with a white on blue header and rounded borders.  Card components have a wrapper that contains a header and a body.  The header is accessible by the .header() method, and everything else that's appended will end up in the body.`);
  card.paragraph().text(`Next, it's what we've all been waiting for: a simple JavaScript API for creating customized web forms, such as the account application form that you see on this page.  The forms have methods for adding headings, alerts, spaces, and buttons along with checkbox, color, date, datetime, email, file, hidden, month, multiselect, number, password, radio, range, select, tel, textarea, text, time, url, and week inputs.`);
  card.paragraph().text(`We certainly can't forget about tables like the one shown below.  Tables also have their own API and it's so simple I probably don't have to do anything except give you the names of the methods.  They are .head(), .body(), .footer(), .row(), .header(), and .data().  Each of these return the corresponding element from the <a href='http://github.com/om-mani-padme-hum/ezhtml'>EZ HTML</a> library.`);

  /** Create fixed 500px form component */
  const form = p.form().width(`500px`).addWrapperClass(`fixed`);
  
  /** Set form action and method properties */
  form.action(`/`).method(`GET`);
  
  /** Create 100% wide form heading */
  form.h4().text(`Join Our Community...`);
  
  /** If required, create 100% wide error-type alert */
  if ( req.query.showPasswordCharactersError )
    form.alert().type(`error`).strong(`Error!`).text(`Your password must contain at least one lowercase letter, one uppercase letter, and one number!`);
  
  /** Create two required 40% wide text inputs, each appended by 10% wide blanks */
  form.text().width(`40`).name(`firstName`).label(`First Name:`).required(true);
  form.blank().width(`10`);
  form.text().width(`40`).name(`lastName`).label(`Last Name:`).required(true);
  form.blank().width(`10`);

  /** Create two required 40% wide password inputs, each appended by 10% wide blanks */
  form.password().width(`40`).name(`password`).label(`Choose Password:`).required(true);
  form.blank().width(`10`);
  form.password().width(`40`).name(`password2`).label(`Confirm Password:`).required(true);
  form.blank().width(`10`);
  
  /** Create optional 50% wide email input */
  form.email().width(`50`).name(`email`).label(`Email Address:`);
  
  /** Create required 50% wide horizontally arranged radio group input */
  form.radios().width(`50`).name(`sex`).label(`Sex:`).align(`horizontal`).required(true);
  form.option().value(`female`).text(`Female`).selected(true);
  form.option().value(`male`).text(`Male`);
  
  /** Create fixed 40% wide submit button in with a white on steel blue appearance */
  form.button().width(`40`).addClass(`bg-steel-blue text-white`).addWrapperClass(`fixed`).type(`submit`).text(`Create Account`);

  /** Create a small sized table */
  const table = p.table().width(`small`);
  
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
  
  /** Loop from 1 to 10 for demo table row numbers... */
  for ( let i = 1; i <= 10; i++ ) {
    /** Create table row in table body */
    table.row();
    
    /** Create table data cells with example data and edit/delete buttons */
    table.data().text(`Row ${i} Data 1`);
    table.data().text(`Row ${i} Data 2`);
    table.data().style(`text-align: center;`).append(p.anchor(false, false).href(`edit?id=${i}`).text(octicons.pencil.toSVG({ width: 16 })));
    table.data().style(`text-align: center;`).append(p.anchor(false, false).href(`delete?id=${i}`).text(octicons.trashcan.toSVG({ width: 16 })));
  }
  
  /** Create fixed small sized container component with contents centered */
  const container = p.container().width(`small`).addWrapperClass(`fixed text-center`);
  
  /** Append 100% wide H5 heading component to the container */
  container.h5().text(`Miss Molly - Age 2ish`);
  
  /** Append 100% wide image component to the container with shadow applied */
  container.image().src(`/images/example.jpg`).shadow(true);
  
  /** Create fixed, small sized blank component back on the main page */
  const blank = p.blank().width(`small`);
  
  /** Append four paragraphs of text with example inline image, link, and special font feature */
  blank.paragraph().text(`The picture you saw in the container component with nested heading and image components was of my niece Molly when she was about two years old I would guess.  <img src='/images/example.jpg' class='float-right width-150px shadow-tiny m-2'> She's always been a cutie so I figured she'd work well in the demo.`);
  blank.paragraph().text(`I'm including her again in this blank component that has had four paragraphs and her image appended to show how simple it is to get text and image content to flow together using simple classes like float-left and float-right.`);
  blank.paragraph().text(`You can also see that it's possible to just write HTML inline in the text for simple things like inline images, <a href='http://github.com/om-mani-padme-hum/trinium'>links</a>, <i>special font features</i>, and other traditional inter-paragraph content.`);
  blank.paragraph().text(`You heard me refer to the container component with the nested heading and image components containing the larger image of my niece enjoying some pizza.  Container components are extremely useful for combining multiple smaller components adjacent to larger components, or for grouping flex content together for layout purposes.`);
  
  /** Create fixed small sized container component */
  const listWest = p.container().width(`small`).addWrapperClass(`fixed`);
  
  /** Append 100% wide H4 heading component to the container */
  listWest.h4().text(`West Coast Cities`);
  
  /** Append 100% wide unordered list component to the container */
  const ul = listWest.unorderedList().addClass(`list-style-square`);
  
  /** Add several example list items */
  ul.item().text(`Seattle, WA`);
  ul.item().text(`Olympia, WA`);
  ul.item().text(`Portland, OR`);
  ul.item().text(`Eugene, OR`);
  ul.item().text(`Sacramento, CA`);
  ul.item().text(`San Francisco, CA`);
  ul.item().text(`Los Angeles, CA`);
  ul.item().text(`San Diego, CA`);
  
  /** Create fixed small sized container component */
  const listEast = p.container().width(`small`).addWrapperClass(`fixed`);
  
  /** Append 100% wide H4 heading component to the container */
  listEast.h4().text(`East Coast Cities`);
  
  /** Create 100% wide unordered list component to the container */
  const ol = listEast.orderedList();
  
  /** Add several example list items */
  ol.item().text(`Boston, MA`);
  ol.item().text(`New York, NY`);
  ol.item().text(`Washington, DC`);
  ol.item().text(`Norfolk, VA`);
  ol.item().text(`Wilmington, NC`);
  ol.item().text(`Charleston, SC`);
  ol.item().text(`Jacksonville, FL`);
  ol.item().text(`Miami, FL`);
  
  /** Create fixed 50% wide accordian component */
  const accordian = p.accordian().width(`50`).addWrapperClass(`fixed`);
  
  /** Create first accordian section */
  const section1 = accordian.section().addHeaderClass(`bg-steel-blue links-white`);
  
  /** Provide example accordian heading and body */
  section1.header().span().text(`Accordian Heading 1`);
  section1.paragraph().text(`Accordian Body 1`);
  
  /** Create second accordian section */
  const section2 = accordian.section().addHeaderClass(`bg-steel-blue links-white`);
  
  /** Provide example accordian heading and body */
  section2.header().span().text(`Accordian Heading 2`);
  section2.paragraph().text(`Accordian Body 2`);
  
  /** Create third accordian section */
  const section3 = accordian.section().addHeaderClass(`bg-steel-blue links-white`);
  
  /** Provide example accordian heading and body */
  const header = section3.header();
  
  header.span().text(`Accordian Heading 3 - `);
  header.span().addClass(`text-red text-bold`).text(`Override`);
  
  section3.paragraph().text(`Accordian Body 3`);
  
  /** Render and send page as response */
  res.send(p.render());

  /** Call next express handler */
  next();
});

/** Start server on port 3000 */
app.listen(3000, () => {
  console.log(`Trinium demo is up and running on port 3000!`);
});
