# Trinium v0.4.2

## Status

In early development, please come back later!

## Installation

`npm i trinium`

## Example Snippet of Trinium Demo Page

```javascript
/** Server example home page */
app.get(`/`, (req, res, next) => {
  /** Create new trinium page */
  const p = new trinium.Page();

  /** Set page title, and add required CSS and JavaScript */
  p.title(`Trinium Demo`);
  p.css().push(`/css/trinium.css`);
  p.javascript().push(`/js/trinium.js`);
  
  /** Create 100% wide H2 heading component */
  p.h2().size(`100`).text(`Welcome To Trinium...`);
  
  /** Create small card component with a white on steel blue header */
  const card = p.card().size(`small`).addHeaderClass(`bg-steel-blue text-white`).header(`A Variety of Components`);
  
  /** Append three paragraphs to the body of the card */
  card.append(new ezhtml.Paragraph().text(`Trinium comes with a number of built in components, some with APIs that help speed up the design process, such as this simple and easy to use card component with a white on blue header and rounded borders.  Card components have a wrapper that contains a header and a body.  The header is accessible by the .header() method, and everything else that's appended will end up in the body.`));
  card.append(new ezhtml.Paragraph().text(`Next, it's what we've all been waiting for: a simple JavaScript API for creating customized web forms, such as the account application form that you see on this page.  The forms have methods for adding headings, alerts, spaces, and buttons along with checkbox, color, date, datetime, email, file, hidden, month, multiselect, number, password, radio, range, select, tel, textarea, text, time, url, and week inputs.`));
  card.append(new ezhtml.Paragraph().text(`We certainly can't forget about tables like the one shown below.  Tables also have their own API and it's so simple I probably don't have to do anything except give you the names of the methods.  They are .head(), .body(), .footer(), .row(), .header(), and .data().  Each of these return the corresponding element from the <a href='http://github.com/om-mani-padme-hum/ezhtml'>EZ HTML</a> library.`));

  /** Create fixed 500px form component */
  const form = p.form().size(`500px`).addWrapperClass(`fixed`);
  
  /** Set form action and method properties */
  form.action(`/`).method(`GET`);
  
  /** Create 16 column wide form heading (16 columns is also the default and represents 100% wide) */
  form.heading().cols(16).rank(1).text(`Join Our Community...`);
  
  /** Create 13 column wide error-type alert */
  form.alert().cols(13).colsBefore(1).type(`error`).strong(`Error!`).text(`Your password must contain at least one lowercase letter, one uppercase letter, and one number!`);
  
  /** Create two required six column wide text inputs, separated by 2 space columns */
  form.text().cols(6).colsAfter(2).name(`firstName`).label(`First Name:`).required(true);
  form.text().cols(6).name(`lastName`).label(`Last Name:`).required(true);

  /** Create two required seven column wide password inputs, separated by 1 space column */
  form.password().cols(7).colsAfter(1).name(`password`).label(`Choose Password:`).required(true);
  form.password().cols(7).name(`password2`).label(`Confirm Password:`).required(true);
  
  /** Create optional eight column wide email input */
  form.email().cols(8).name(`email`).label(`Email Address:`);
  
  /** Create eight column wide horizontally arranged radio group input */
  form.radios().cols(8).name(`sex`).label(`Sex:`).align(`horizontal`);
  form.option().value(`female`).text(`Female`).selected(true);
  form.option().value(`male`).text(`Male`);
  
  /** Create six column wide submit button spaced 5 space columns in with a white on steel blue appearance */
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
    
    /** Create table data cells with example data and edit/delete buttons */
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
```
## Page Class

```javascript
const p = new trinium.Page();
```

A page has the following methods:

* **Page.blank(append = true)** - Create a blank component, append it to the page if the append boolean is true, and return it wrapped in a flex-box div of desired size
* **Page.card(append = true)** - Create a card component, append it to the page if the append boolean is true, and return it wrapped in a flex-box div of desired size
* **Page.form(append = true, wrapper = true)** - Create a form component, return it if wrapper is false, otherwise append it to the page if the append boolean is true, and return it wrapped in a flex-box div of desired size
* **Page.heading(append = true, wrapper = true)** - Create a heading component, return it if wrapper is false, otherwise append it to the page if the append boolean is true, and return it wrapped in a flex-box div of desired size
* **Page.stack(append = true)** - Create a stack component, append it to the page if the append boolean is true, and return it wrapped in a flex-box div of desired size
* **Page.table(append = true, wrapper = true)** - Create a table component, return it if wrapper is false, otherwise append it to the page if the append boolean is true, and return it wrapped in a flex-box div of desired size

## Component Classes

### Blanks

Blanks are essentially empty contains that you can append content of your own choosing or leave as empty spaces in your layout.  They definitely don't have to be blank and in reality are EZ HTML Div elements that have Trinium wrapper classes for flex-boxing.

* **Blank.addWrapperClass(className)** - Add class to blank wrapper
* **Blank.size(keyword)** - Set the size of the blank using one of the size keywords
* See the documentation for [EZ HTML Elements and Container Elements](https://github.com/om-mani-padme-hum/ezhtml#method-signatures-common-to-all-elements) for all other methods

### Cards

The card structure is as follows:

* Wrapper `<div>` of class **trinium-card**
* * Header `<div>` of class **trinium-card-header**
* * Body `<div>` of class **trinium-card-body**

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

### Tables
Our tables are implemented using the EZ Tables library which provides a simple interface for moving from head to body to footer, while appending arbitrary numbers of rows, headers, and data cells.

* **Table.addWrapperClass(className)** - Add class to table wrapper
* **Table.size(keyword)** - Set the size of the table using one of the size keywords
* See the documentation for [EZ Tables](https://github.com/om-mani-padme-hun/eztables) for all other methods

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
