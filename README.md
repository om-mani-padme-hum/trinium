# Trinium v0.6.2

## Status

In early to mid development, please come back later!

Documentation below needs updating, forms and tables are no longer based on EZ forms and EZ tables, but rather have been directly integrated.

## Installation

`npm i trinium`

## Example Snippet of Trinium Demo Page

```javascript
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
  
  /** Create fixed small sized stack component with contents centered */
  const stack = p.stack().width(`small`).addWrapperClass(`fixed text-center`);
  
  /** Append 100% wide H5 heading component to the stack */
  stack.h5().text(`Miss Molly - Age 2ish`);
  
  /** Append 100% wide image component to the stack with shadow applied */
  stack.image().src(`/images/example.jpg`).shadow(true);
  
  /** Create fixed, small sized blank component back on the main page */
  const blank = p.blank().width(`small`);
  
  /** Append four paragraphs of text with example inline image, link, and special font feature */
  blank.paragraph().text(`The picture you saw in the stack component with nested heading and image components was of my niece Molly when she was about two years old I would guess.  <img src='/images/example.jpg' class='float-right width-150px shadow-tiny m-2'> She's always been a cutie so I figured she'd work well in the demo.`);
  blank.paragraph().text(`I'm including her again in this blank component that has had four paragraphs and her image appended to show how simple it is to get text and image content to flow together using simple classes like float-left and float-right.`);
  blank.paragraph().text(`You can also see that it's possible to just write HTML inline in the text for simple things like inline images, <a href='http://github.com/om-mani-padme-hum/trinium'>links</a>, <i>special font features</i>, and other traditional inter-paragraph content.`);
  blank.paragraph().text(`You heard me refer to the stack component with the nested heading and image components containing the larger image of my niece enjoying some pizza.  Stack components are extremely useful for combining multiple smaller components adjacent to larger components, or for grouping flex content together for layout purposes.`);
  
  /** Create fixed small sized stack component */
  const listWest = p.stack().width(`small`).addWrapperClass(`fixed`);
  
  /** Append 100% wide H4 heading component to the stack */
  listWest.h4().text(`West Coast Cities`);
  
  /** Append 100% wide unordered list component to the stack */
  const ul = listWest.unorderedList().addClass(`list-style-none`);
  
  /** Add several example list items */
  ul.item().text(`Seattle, WA`);
  ul.item().text(`Olympia, WA`);
  ul.item().text(`Portland, OR`);
  ul.item().text(`Eugene, OR`);
  ul.item().text(`Sacramento, CA`);
  ul.item().text(`San Francisco, CA`);
  ul.item().text(`Los Angeles, CA`);
  ul.item().text(`San Diego, CA`);
  
  /** Create fixed small sized stack component */
  const listEast = p.stack().width(`small`).addWrapperClass(`fixed`);
  
  /** Append 100% wide H4 heading component to the stack */
  listEast.h4().text(`East Coast Cities`);
  
  /** Create 100% wide unordered list component to the stack */
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
  
  /** Render and send page as response */
  res.send(p.render());

  /** Call next express handler */
  next();
});

/** Start server on port 3000 */
app.listen(3000, () => {
  console.log(`Trinium demo is up and running on port 3000!`);
});
```

## Trinium Demo (Partial) Screnshot

![alt text](https://github.com/om-mani-padme-hum/trinium/raw/master/images/demo.png "The bottom is cut off because I couldn't take a scren shot of the page larger than my screen size.")

## Page Class

```javascript
const p = new trinium.Page();
```

A page has the following methods:

* **Page.addWrapperClass(append = true)** - Create a blank component, append it to the page if the append boolean is true, and return it wrapped in a flex-box div of desired size
* **Page.alert(append = true)** - Create a blank component, append it to the page if the append boolean is true, and return it wrapped in a flex-box div of desired size
* **Page.anchor(append = true)** - Create a blank component, append it to the page if the append boolean is true, and return it wrapped in a flex-box div of desired size
* **Page.blank(append = true)** - Create a blank component, append it to the page if the append boolean is true, and return it wrapped in a flex-box div of desired size
* **Page.button(append = true)** - Create a blank component, append it to the page if the append boolean is true, and return it wrapped in a flex-box div of desired size
* **Page.card(append = true)** - Create a card component, append it to the page if the append boolean is true, and return it wrapped in a flex-box div of desired size
* **Page.checkboxes(append = true)** - Create a card component, append it to the page if the append boolean is true, and return it wrapped in a flex-box div of desired size
* **Page.color(append = true)** - Create a card component, append it to the page if the append boolean is true, and return it wrapped in a flex-box div of desired size
* **Page.date(append = true)** - Create a card component, append it to the page if the append boolean is true, and return it wrapped in a flex-box div of desired size
* **Page.datetime(append = true)** - Create a card component, append it to the page if the append boolean is true, and return it wrapped in a flex-box div of desired size
* **Page.email(append = true)** - Create a card component, append it to the page if the append boolean is true, and return it wrapped in a flex-box div of desired size
* **Page.file(append = true)** - Create a card component, append it to the page if the append boolean is true, and return it wrapped in a flex-box div of desired size
* **Page.form(append = true)** - Create a card component, append it to the page if the append boolean is true, and return it wrapped in a flex-box div of desired size
* **Page.h1(append = true, wrapper = true)** - Create a form component, return it if wrapper is false, otherwise append it to the page if the append boolean is true, and return it wrapped in a flex-box div of desired size
* **Page.h2(append = true, wrapper = true)** - Create a form component, return it if wrapper is false, otherwise append it to the page if the append boolean is true, and return it wrapped in a flex-box div of desired size
* **Page.h3(append = true, wrapper = true)** - Create a form component, return it if wrapper is false, otherwise append it to the page if the append boolean is true, and return it wrapped in a flex-box div of desired size
* **Page.h4(append = true, wrapper = true)** - Create a form component, return it if wrapper is false, otherwise append it to the page if the append boolean is true, and return it wrapped in a flex-box div of desired size
* **Page.h5(append = true, wrapper = true)** - Create a form component, return it if wrapper is false, otherwise append it to the page if the append boolean is true, and return it wrapped in a flex-box div of desired size
* **Page.h6(append = true, wrapper = true)** - Create a form component, return it if wrapper is false, otherwise append it to the page if the append boolean is true, and return it wrapped in a flex-box div of desired size
* **Page.hidden(append = true, wrapper = true)** - Create an image component, return it if wrapper is false, otherwise append it to the page if the append boolean is true, and return it wrapped in a flex-box div of desired size
* **Page.image(append = true, wrapper = true)** - Create an image component, return it if wrapper is false, otherwise append it to the page if the append boolean is true, and return it wrapped in a flex-box div of desired size
* **Page.month(append = true, wrapper = true)** - Create an image component, return it if wrapper is false, otherwise append it to the page if the append boolean is true, and return it wrapped in a flex-box div of desired size
* **Page.multiselect(append = true, wrapper = true)** - Create an image component, return it if wrapper is false, otherwise append it to the page if the append boolean is true, and return it wrapped in a flex-box div of desired size
* **Page.number(append = true, wrapper = true)** - Create an image component, return it if wrapper is false, otherwise append it to the page if the append boolean is true, and return it wrapped in a flex-box div of desired size
* **Page.option(append = true, wrapper = true)** - Create an image component, return it if wrapper is false, otherwise append it to the page if the append boolean is true, and return it wrapped in a flex-box div of desired size
* **Page.orderedList(append = true, wrapper = true)** - Create an image component, return it if wrapper is false, otherwise append it to the page if the append boolean is true, and return it wrapped in a flex-box div of desired size
* **Page.paragraph(append = true, wrapper = true)** - Create an image component, return it if wrapper is false, otherwise append it to the page if the append boolean is true, and return it wrapped in a flex-box div of desired size
* **Page.password(append = true, wrapper = true)** - Create an image component, return it if wrapper is false, otherwise append it to the page if the append boolean is true, and return it wrapped in a flex-box div of desired size
* **Page.radios(append = true, wrapper = true)** - Create an image component, return it if wrapper is false, otherwise append it to the page if the append boolean is true, and return it wrapped in a flex-box div of desired size
* **Page.range(append = true, wrapper = true)** - Create an image component, return it if wrapper is false, otherwise append it to the page if the append boolean is true, and return it wrapped in a flex-box div of desired size
* **Page.removeWrapperClass(append = true, wrapper = true)** - Create an image component, return it if wrapper is false, otherwise append it to the page if the append boolean is true, and return it wrapped in a flex-box div of desired size
* **Page.select(append = true)** - Create a stack component, append it to the page if the append boolean is true, and return it wrapped in a flex-box div of desired size
* **Page.stack(append = true)** - Create a stack component, append it to the page if the append boolean is true, and return it wrapped in a flex-box div of desired size
* **Page.table(append = true, wrapper = true)** - Create a table component, return it if wrapper is false, otherwise append it to the page if the append boolean is true, and return it wrapped in a flex-box div of desired size
* **Page.telephone(append = true, wrapper = true)** - Create a table component, return it if wrapper is false, otherwise append it to the page if the append boolean is true, and return it wrapped in a flex-box div of desired size
* **Page.textarea(append = true, wrapper = true)** - Create a table component, return it if wrapper is false, otherwise append it to the page if the append boolean is true, and return it wrapped in a flex-box div of desired size
* **Page.text(append = true, wrapper = true)** - Create a table component, return it if wrapper is false, otherwise append it to the page if the append boolean is true, and return it wrapped in a flex-box div of desired size
* **Page.time(append = true, wrapper = true)** - Create a table component, return it if wrapper is false, otherwise append it to the page if the append boolean is true, and return it wrapped in a flex-box div of desired size
* **Page.unorderedList(append = true, wrapper = true)** - Create a table component, return it if wrapper is false, otherwise append it to the page if the append boolean is true, and return it wrapped in a flex-box div of desired size
* **Page.url(append = true, wrapper = true)** - Create a table component, return it if wrapper is false, otherwise append it to the page if the append boolean is true, and return it wrapped in a flex-box div of desired size
* **Page.week(append = true, wrapper = true)** - Create a table component, return it if wrapper is false, otherwise append it to the page if the append boolean is true, and return it wrapped in a flex-box div of desired size

## Component Classes

### Blanks

Blanks are essentially empty contains that you can append content of your own choosing or leave as empty spaces in your layout.  They definitely don't have to be blank and in reality are EZ HTML Div elements that have Trinium wrapper classes for flex-boxing.

* **Blank.addWrapperClass(className)** - Add class to blank wrapper
* **Blank.size(keyword)** - Set the size of the blank using one of the size keywords
* See the documentation for [EZ HTML Elements and Container Elements](https://github.com/om-mani-padme-hum/ezhtml#method-signatures-common-to-all-elements) for all other methods

### Cards

The card structure is as follows:

* Wrapper `<div>` of appropriate size class
* * Header `<div>` of class **card-header**
* * Body `<div>` of class **card-body**

When you append content to the card using either the `.text()` method or the `.append()` or `.prepend()` methods, the content
will be added to the body `<div>` of the card.  The header can only contain plain text (or manually typed HTML), and can be set 
by means of the `.header()` method.

A card has the following methods:

* **Card.addBodyClass(className)** - Add class to card body
* **Card.addHeaderClass(className)** - Add class to card header
* **Card.addWrapperClass(className)** - Add class to card wrapper
* **Card.header(markup)** - Text or HTML markup to include in header `<div>`
* **Card.size(keyword)** - Set the size of the card using one of the size keywords
* See the documentation for [EZ HTML Elements and Container Elements](https://github.com/om-mani-padme-hum/ezhtml#method-signatures-common-to-all-elements) for all other methods, which apply only to the body of this card

### Forms

The forms are based on the EZ Forms library, which offers extremely easy layout control and a variety of input elements to choose from.

* **Form.addWrapperClass(className)** - Add class to form wrapper
* **Form.size(keyword)** - Set the size of the card using one of the size keywords
* See the documentation for [EZ Forms](https://github.com/om-mani-padme-hum/ezforms) for all other methods

### Images

Images are EZ HTML Image elements wrapped in a Trinium wrapper EZ HTML Div element for flex-boxing.  These images are meant to be standalone components and not used as inline images in paragraphs.

* **Image.addWrapperClass(className)** - Add class to form wrapper
* **Image.shadow(boolean)** - Boolean for including medium shadow
* **Image.size(keyword)** - Set the size of the card using one of the size keywords
* See the documentation for [EZ HTML Elements and Images](https://github.com/om-mani-padme-hum/ezhtml#method-signatures-common-to-all-elements) for all other methods

### Stacks

Stacks are used to place multiple flex components adjacent to a single flex component, or multiple components next to multiple components, etc.  It's essentially just a sub-container for flex components that wraps just like the body and has no padding so it doesn't compound padding of components.

* **Stack.addWrapperClass(className)** - Add class to table wrapper
* **Stack.size(keyword)** - Set the size of the table using one of the size keywords
* See the documentation for [EZ HTML Elements and Container Elements](https://github.com/om-mani-padme-hum/ezhtml#method-signatures-common-to-all-elements) for all other methods, which apply only to the body of this card

### Tables

Our tables are implemented using the EZ Tables library which provides a simple interface for moving from head to body to footer, while appending arbitrary numbers of rows, headers, and data cells.

* **Table.addWrapperClass(className)** - Add class to table wrapper
* **Table.size(keyword)** - Set the size of the table using one of the size keywords
* See the documentation for [EZ Tables](https://github.com/om-mani-padme-hum/eztables) for all other methods

## Component Size Keywords

#### General Keywords

* tiny
* ty
* small
* sm
* medium
* md
* large
* lg
* xlarge
* xl

#### Percentage Keywords

* 10
* 15
* 20
* 25
* 30
* 33
* 40
* 50
* 60
* 66
* 70
* 75
* 80
* 90
* 100

#### Pixel Keywords

* 100px
* 125px
* 150px
* 175px
* 200px
* 225px
* 250px
* 300px
* 350px
* 400px
* 450px
* 500px
* 550px
* 600px
* 650px
* 700px
* 750px
* 800px
* 900px
* 1000px
* 1100px
* 1200px

## Helper Classes

#### Background, Fill, and Text Colors

* bg-alice-blue, fill-alice-blue, text-alice-blue - #F0F8FF
* bg-antique-white, fill-antique-white, text-antique-white - #FAEBD7
* bg-aqua, fill-aqua, text-aqua - #00FFFF
* bg-aquamarine, fill-aquamarine, text-aquamarine - #7FFFD4
* bg-azure, fill-azure, text-azure - #F0FFFF
* bg-beige, fill-beige, text-beige - #F5F5DC
* bg-bisque, fill-bisque, text-bisque - #FFE4C4
* bg-black, fill-black, text-black - #000000
* bg-blanched-almond, fill-blanched-almond, text-blanched-almond - #FFEBCD
* bg-blue, fill-blue, text-blue - #0000FF
* bg-blue-violet, fill-blue-violet, text-blue-violet - #8A2BE2
* bg-brown, fill-brown, text-brown - #A52A2A
* bg-burly-wood, fill-burly-wood, text-burly-wood - #DEB887
* bg-cadet-blue, fill-cadet-blue, text-cadet-blue - #5F9EA0
* bg-chartreuse, fill-chartreuse, text-chartreuse - #7FFF00
* bg-chocolate, fill-chocolate, text-chocolate - #D2691E
* bg-coral, fill-coral, text-coral - #FF7F50
* bg-cornflower-blue, fill-cornflower-blue, text-cornflower-blue - #6495ED
* bg-cornsilk, fill-cornsilk, text-cornsilk - #FFF8DC
* bg-crimson, fill-crimson, text-crimson - #DC143C
* bg-cyan, fill-cyan, text-cyan - #00FFFF
* bg-dark-blue, fill-dark-blue, text-dark-blue - #00008B
* bg-dark-cyan, fill-dark-cyan, text-dark-cyan - #008B8B
* bg-dark-golden-rod, fill-dark-golden-rod, text-dark-golden-rod - #B8860B
* bg-dark-gray, fill-dark-gray, text-dark-gray - #A9A9A9
* bg-dark-grey, fill-dark-grey, text-dark-grey - #A9A9A9
* bg-dark-green, fill-dark-green, text-dark-green - #006400
* bg-dark-khaki, fill-dark-khaki, text-dark-khaki - #BDB76B
* bg-dark-magenta, fill-dark-magenta, text-dark-magenta - #8B008B
* bg-dark-olive-green, fill-dark-olive-green, text-dark-olive-green - #556B2F
* bg-dark-orange, fill-dark-orange, text-dark-orange - #FF8C00
* bg-dark-orchid, fill-dark-orchid, text-dark-orchid - #9932CC
* bg-dark-red, fill-dark-red, text-dark-red - #8B0000
* bg-dark-salmon, fill-dark-salmon, text-dark-salmon - #E9967A
* bg-dark-sea-green, fill-dark-sea-green, text-dark-sea-green - #8FBC8F
* bg-dark-slate-blue, fill-dark-slate-blue, text-dark-slate-blue - #483D8B
* bg-dark-slate-gray, fill-dark-slate-gray, text-dark-slate-gray - #2F4F4F
* bg-dark-slate-grey, fill-dark-slate-grey, text-dark-slate-grey - #2F4F4F
* bg-dark-turquoise, fill-dark-turquoise, text-dark-turquoise - #00CED1
* bg-dark-violet, fill-dark-violet, text-dark-violet - #9400D3
* bg-deep-pink, fill-deep-pink, text-deep-pink - #FF1493
* bg-deep-sky-blue, fill-deep-sky-blue, text-deep-sky-blue - #00BFFF
* bg-dim-gray, fill-dim-gray, text-dim-gray - #696969
* bg-dim-grey, fill-dim-grey, text-dim-grey - #696969
* bg-dodger-blue, fill-dodger-blue, text-dodger-blue - #1E90FF
* bg-fire-brick, fill-fire-brick, text-fire-brick - #B22222
* bg-floral-white, fill-floral-white, text-floral-white - #FFFAF0
* bg-forest-green, fill-forest-green, text-forest-green - #228B22
* bg-fuchsia, fill-fuchsia, text-fuchsia - #FF00FF
* bg-gainsboro, fill-gainsboro, text-gainsboro - #DCDCDC
* bg-ghost-white, fill-ghost-white, text-ghost-white - #F8F8FF
* bg-gold, fill-gold, text-gold - #FFD700
* bg-golden-rod, fill-golden-rod, text-golden-rod - #DAA520
* bg-gray, fill-gray, text-gray - #808080
* bg-grey, fill-grey, text-grey - #808080
* bg-green, fill-green, text-green - #008000
* bg-green-yellow, fill-green-yellow, text-green-yellow - #ADFF2F
* bg-honey-dew, fill-honey-dew, text-honey-dew - #F0FFF0
* bg-hot-pink, fill-hot-pink, text-hot-pink - #FF69B4
* bg-indian-red, fill-indian-red, text-indian-red - #CD5C5C
* bg-indigo, fill-indigo, text-indigo - #4B0082
* bg-ivory, fill-ivory, text-ivory - #FFFFF0
* bg-khaki, fill-khaki, text-khaki - #F0E68C
* bg-lavender, fill-lavender, text-lavender - #E6E6FA
* bg-lavender-blush, fill-lavender-blush, text-lavender-blush - #FFF0F5
* bg-lawn-green, fill-lawn-green, text-lawn-green - #7CFC00
* bg-lemon-chiffon, fill-lemon-chiffon, text-lemon-chiffon - #FFFACD
* bg-light-blue, fill-light-blue, text-light-blue - #ADD8E6
* bg-light-coral, fill-light-coral, text-light-coral - #F08080
* bg-light-cyan, fill-light-cyan, text-light-cyan - #E0FFFF
* bg-light-golden-rod-yellow, fill-light-golden-rod-yellow, text-light-golden-rod-yellow - #FAFAD2
* bg-light-gray, fill-light-gray, text-light-gray - #D3D3D3
* bg-light-grey, fill-light-grey, text-light-grey - #D3D3D3
* bg-light-green, fill-light-green, text-light-green - #90EE90
* bg-light-pink, fill-light-pink, text-light-pink - #FFB6C1
* bg-light-salmon, fill-light-salmon, text-light-salmon - #FFA07A
* bg-light-sea-green, fill-light-sea-green, text-light-sea-green - #20B2AA
* bg-light-sky-blue, fill-light-sky-blue, text-light-sky-blue - #87CEFA
* bg-light-slate-gray, fill-light-slate-gray, text-light-slate-gray - #778899
* bg-light-slate-grey, fill-light-slate-grey, text-light-slate-grey - #778899
* bg-light-steel-blue, fill-light-steel-blue, text-light-steel-blue - #B0C4DE
* bg-light-yellow, fill-light-yellow, text-light-yellow - #FFFFE0
* bg-lime, fill-lime, text-lime - #00FF00
* bg-lime-green, fill-lime-green, text-lime-green - #32CD32
* bg-linen, fill-linen, text-linen - #FAF0E6
* bg-magenta, fill-magenta, text-magenta - #FF00FF
* bg-maroon, fill-maroon, text-maroon - #800000
* bg-medium-aqua-marine, fill-medium-aqua-marine, text-medium-aqua-marine - #66CDAA
* bg-medium-blue, fill-medium-blue, text-medium-blue - #0000CD
* bg-medium-orchid, fill-medium-orchid, text-medium-orchid - #BA55D3
* bg-medium-purple, fill-medium-purple, text-medium-purple - #9370DB
* bg-medium-sea-green, fill-medium-sea-green, text-medium-sea-green - #3CB371
* bg-medium-slate-blue, fill-medium-slate-blue, text-medium-slate-blue - #7B68EE
* bg-medium-spring-green, fill-medium-spring-green, text-medium-spring-green - #00FA9A
* bg-medium-turquoise, fill-medium-turquoise, text-medium-turquoise - #48D1CC
* bg-medium-violet-red, fill-medium-violet-red, text-medium-violet-red - #C71585
* bg-midnight-blue, fill-midnight-blue, text-midnight-blue - #191970
* bg-mint-cream, fill-mint-cream, text-mint-cream - #F5FFFA
* bg-misty-rose, fill-misty-rose, text-misty-rose - #FFE4E1
* bg-moccasin, fill-moccasin, text-moccasin - #FFE4B5
* bg-navajo-white, fill-navajo-white, text-navajo-white - #FFDEAD
* bg-navy, fill-navy, text-navy - #000080
* bg-old-lace, fill-old-lace, text-old-lace - #FDF5E6
* bg-olive, fill-olive, text-olive - #808000
* bg-olive-drab, fill-olive-drab, text-olive-drab - #6B8E23
* bg-orange, fill-orange, text-orange - #FFA500
* bg-orange-red, fill-orange-red, text-orange-red - #FF4500
* bg-orchid, fill-orchid, text-orchid - #DA70D6
* bg-pale-golden-rod, fill-pale-golden-rod, text-pale-golden-rod - #EEE8AA
* bg-pale-green, fill-pale-green, text-pale-green - #98FB98
* bg-pale-turquoise, fill-pale-turquoise, text-pale-turquoise - #AFEEEE
* bg-pale-violet-red, fill-pale-violet-red, text-pale-violet-red - #DB7093
* bg-papaya-whip, fill-papaya-whip, text-papaya-whip - #FFEFD5
* bg-peach-puff, fill-peach-puff, text-peach-puff - #FFDAB9
* bg-peru, fill-peru, text-peru - #CD853F
* bg-pink, fill-pink, text-pink - #FFC0CB
* bg-plum, fill-plum, text-plum - #DDA0DD
* bg-powder-blue, fill-powder-blue, text-powder-blue - #B0E0E6
* bg-purple, fill-purple, text-purple - #800080
* bg-rebecca-purple, fill-rebecca-purple, text-rebecca-purple - #663399
* bg-red, fill-red, text-red - #FF0000
* bg-rosy-brown, fill-rosy-brown, text-rosy-brown - #BC8F8F
* bg-royal-blue, fill-royal-blue, text-royal-blue - #4169E1
* bg-saddle-brown, fill-saddle-brown, text-saddle-brown - #8B4513
* bg-salmon, fill-salmon, text-salmon - #FA8072
* bg-sandy-brown, fill-sandy-brown, text-sandy-brown - #F4A460
* bg-sea-green, fill-sea-green, text-sea-green - #2E8B57
* bg-sea-shell, fill-sea-shell, text-sea-shell - #FFF5EE
* bg-sienna, fill-sienna, text-sienna - #A0522D
* bg-silver, fill-silver, text-silver - #C0C0C0
* bg-sky-blue, fill-sky-blue, text-sky-blue - #87CEEB
* bg-slate-blue, fill-slate-blue, text-slate-blue - #6A5ACD
* bg-slate-gray, fill-slate-gray, text-slate-gray - #708090
* bg-slate-grey, fill-slate-grey, text-slate-grey - #708090
* bg-snow, fill-snow, text-snow - #FFFAFA
* bg-spring-green, fill-spring-green, text-spring-green - #00FF7F
* bg-steel-blue, fill-steel-blue, text-steel-blue - #4682B4
* bg-tan, fill-tan, text-tan - #D2B48C
* bg-teal, fill-teal, text-teal - #008080
* bg-thistle, fill-thistle, text-thistle - #D8BFD8
* bg-tomato, fill-tomato, text-tomato - #FF6347
* bg-turquoise, fill-turquoise, text-turquoise - #40E0D0
* bg-violet, fill-violet, text-violet - #EE82EE
* bg-wheat, fill-wheat, text-wheat - #F5DEB3
* bg-white, fill-white, text-white - #FFFFFF
* bg-white-smoke, fill-white-smoke, text-white-smoke - #F5F5F5
* bg-yellow, fill-yellow, text-yellow - #FFFF00
* bg-yellow-green, fill-yellow-green, text-yellow-green - #9ACD32

#### Image Shadow Classes

* image-shadow-ty - 3px
* image-shadow-tiny - 3px
* image-shadow - 5px
* image-shadow-sm - 5px
* image-shadow-small - 5px
* image-shadow-md - 10px
* image-shadow-medium - 10px
* image-shadow-lg - 15px
* image-shadow-large - 15px
* image-shadow-xl - 25px
* image-shadow-xlarge - 25px

#### Margin Classes

* m-0 - Margin all around 0px
* m-1 - Margin all around 5px
* m-2 - Margin all around 10px
* m-3 - Margin all around 15px
* m-4 - Margin all around 20px
* m-5 - Margin all around 30px
* m-6 - Margin all around 50px
* ml-0 - Margin left 0px
* ml-1 - Margin left 5px
* ml-2 - Margin left 10px
* ml-3 - Margin left 15px
* ml-4 - Margin left 20px
* ml-5 - Margin left 30px
* ml-6 - Margin left 50px
* mr-0 - Margin right 0px
* mr-1 - Margin right 5px
* mr-2 - Margin right 10px
* mr-3 - Margin right 15px
* mr-4 - Margin right 20px
* mr-5 - Margin right 30px
* mr-6 - Margin right 50px
* mt-0 - Margin top 0px
* mt-1 - Margin top 5px
* mt-2 - Margin top 10px
* mt-3 - Margin top 15px
* mt-4 - Margin top 20px
* mt-5 - Margin top 30px
* mt-6 - Margin top 50px
* mb-0 - Margin bottom 0px
* mb-1 - Margin bottom 5px
* mb-2 - Margin bottom 10px
* mb-3 - Margin bottom 15px
* mb-4 - Margin bottom 20px
* mb-5 - Margin bottom 30px
* mb-6 - Margin bottom 50px
* mx-0 - Margin left and right 0px
* mx-1 - Margin left and right 5px
* mx-2 - Margin left and right 10px
* mx-3 - Margin left and right 15px
* mx-4 - Margin left and right 20px
* mx-5 - Margin left and right 30px
* mx-6 - Margin left and right 50px
* my-0 - Margin top and bottom 0px
* my-1 - Margin top and bottom 5px
* my-2 - Margin top and bottom 10px
* my-3 - Margin top and bottom 15px
* my-4 - Margin top and bottom 20px
* my-5 - Margin top and bottom 30px
* my-6 - Margin top and bottom 50px

#### Padding Classes

* p-0 - Padding all around 0px
* p-1 - Padding all around 5px
* p-2 - Padding all around 10px
* p-3 - Padding all around 15px
* p-4 - Padding all around 20px
* p-5 - Padding all around 30px
* p-6 - Padding all around 50px
* pl-0 - Padding left 0px
* pl-1 - Padding left 5px
* pl-2 - Padding left 10px
* pl-3 - Padding left 15px
* pl-4 - Padding left 20px
* pl-5 - Padding left 30px
* pl-6 - Padding left 50px
* pr-0 - Padding right 0px
* pr-1 - Padding right 5px
* pr-2 - Padding right 10px
* pr-3 - Padding right 15px
* pr-4 - Padding right 20px
* pr-5 - Padding right 30px
* pr-6 - Padding right 50px
* pt-0 - Padding top 0px
* pt-1 - Padding top 5px
* pt-2 - Padding top 10px
* pt-3 - Padding top 15px
* pt-4 - Padding top 20px
* pt-5 - Padding top 30px
* pt-6 - Padding top 50px
* pb-0 - Padding bottom 0px
* pb-1 - Padding bottom 5px
* pb-2 - Padding bottom 10px
* pb-3 - Padding bottom 15px
* pb-4 - Padding bottom 20px
* pb-5 - Padding bottom 30px
* pb-6 - Padding bottom 50px
* px-0 - Padding left and right 0px
* px-1 - Padding left and right 5px
* px-2 - Padding left and right 10px
* px-3 - Padding left and right 15px
* px-4 - Padding left and right 20px
* px-5 - Padding left and right 30px
* px-6 - Padding left and right 50px
* py-0 - Padding top and bottom 0px
* py-1 - Padding top and bottom 5px
* py-2 - Padding top and bottom 10px
* py-3 - Padding top and bottom 15px
* py-4 - Padding top and bottom 20px
* py-5 - Padding top and bottom 30px
* py-6 - Padding top and bottom 50px

#### Text Alignment

* text-left - Align text left
* text-center - Align text center
* text-right - Align text right

#### Text Features

* text-indent - Indent text 15px

#### Width Classes - General

* width-tiny
* width-ty
* width-small
* width-sm
* width-medium
* width-md
* width-large
* width-lg
* width-xlarge
* width-xl

#### Width Classes - Percent

* width-10
* width-15
* width-20
* width-25
* width-30
* width-33
* width-40
* width-50
* width-60
* width-66
* width-70
* width-75
* width-80
* width-90
* width-100

#### Width Classes - Pixel

* width-5px
* width-10px
* width-15px
* width-20px
* width-25px
* width-50px
* width-75px
* width-100px
* width-125px
* width-150px
* width-175px
* width-200px
* width-225px
* width-250px
* width-300px
* width-350px
* width-400px
* width-450px
* width-500px
* width-550px
* width-600px
* width-650px
* width-700px
* width-750px
* width-800px
* width-900px
* width-1000px
* width-1100px
* width-1200px