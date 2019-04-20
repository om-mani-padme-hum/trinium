# Trinium v0.4.3

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
  
  /** If required, create 13 column wide error-type alert */
  if ( req.query.showPasswordCharactersError )
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

## Trinium Demo (Partial) Screnshot

![alt text](https://github.com/om-mani-padme-hum/trinium/raw/master/images/demo.png "The bottom is cut off because I couldn't take a scren shot of the page larger than my screen size.")

## Page Class

```javascript
const p = new trinium.Page();
```

A page has the following methods:

* **Page.blank(append = true)** - Create a blank component, append it to the page if the append boolean is true, and return it wrapped in a flex-box div of desired size
* **Page.card(append = true)** - Create a card component, append it to the page if the append boolean is true, and return it wrapped in a flex-box div of desired size
* **Page.form(append = true, wrapper = true)** - Create a form component, return it if wrapper is false, otherwise append it to the page if the append boolean is true, and return it wrapped in a flex-box div of desired size
* **Page.heading(append = true, wrapper = true)** - Create a heading component, return it if wrapper is false, otherwise append it to the page if the append boolean is true, and return it wrapped in a flex-box div of desired size
* **Page.image(append = true, wrapper = true)** - Create an image component, return it if wrapper is false, otherwise append it to the page if the append boolean is true, and return it wrapped in a flex-box div of desired size
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

## Helper Classes

#### Background Colors

* bg-alice-blue - #F0F8FF
* bg-antique-white - #FAEBD7
* bg-aqua - #00FFFF
* bg-aquamarine - #7FFFD4
* bg-azure - #F0FFFF
* bg-beige - #F5F5DC
* bg-bisque - #FFE4C4
* bg-black - #000000
* bg-blanched-almond - #FFEBCD
* bg-blue - #0000FF
* bg-blue-violet - #8A2BE2
* bg-brown - #A52A2A
* bg-burly-wood - #DEB887
* bg-cadet-blue - #5F9EA0
* bg-chartreuse - #7FFF00
* bg-chocolate - #D2691E
* bg-coral - #FF7F50
* bg-cornflower-blue - #6495ED
* bg-cornsilk - #FFF8DC
* bg-crimson - #DC143C
* bg-cyan - #00FFFF
* bg-dark-blue - #00008B
* bg-dark-cyan - #008B8B
* bg-dark-golden-rod - #B8860B
* bg-dark-gray - #A9A9A9
* bg-dark-grey - #A9A9A9
* bg-dark-green - #006400
* bg-dark-khaki - #BDB76B
* bg-dark-magenta - #8B008B
* bg-dark-olive-green - #556B2F
* bg-dark-orange - #FF8C00
* bg-dark-orchid - #9932CC
* bg-dark-red - #8B0000
* bg-dark-salmon - #E9967A
* bg-dark-sea-green - #8FBC8F
* bg-dark-slate-blue - #483D8B
* bg-dark-slate-gray - #2F4F4F
* bg-dark-slate-grey - #2F4F4F
* bg-dark-turquoise - #00CED1
* bg-dark-violet - #9400D3
* bg-deep-pink - #FF1493
* bg-deep-sky-blue - #00BFFF
* bg-dim-gray - #696969
* bg-dim-grey - #696969
* bg-dodger-blue - #1E90FF
* bg-fire-brick - #B22222
* bg-floral-white - #FFFAF0
* bg-forest-green - #228B22
* bg-fuchsia - #FF00FF
* bg-gainsboro - #DCDCDC
* bg-ghost-white - #F8F8FF
* bg-gold - #FFD700
* bg-golden-rod - #DAA520
* bg-gray - #808080
* bg-grey - #808080
* bg-green - #008000
* bg-green-yellow - #ADFF2F
* bg-honey-dew - #F0FFF0
* bg-hot-pink - #FF69B4
* bg-indian-red - #CD5C5C
* bg-indigo - #4B0082
* bg-ivory - #FFFFF0
* bg-khaki - #F0E68C
* bg-lavender - #E6E6FA
* bg-lavender-blush - #FFF0F5
* bg-lawn-green - #7CFC00
* bg-lemon-chiffon - #FFFACD
* bg-light-blue - #ADD8E6
* bg-light-coral - #F08080
* bg-light-cyan - #E0FFFF
* bg-light-golden-rod-yellow - #FAFAD2
* bg-light-gray - #D3D3D3
* bg-light-grey - #D3D3D3
* bg-light-green - #90EE90
* bg-light-pink - #FFB6C1
* bg-light-salmon - #FFA07A
* bg-light-sea-green - #20B2AA
* bg-light-sky-blue - #87CEFA
* bg-light-slate-gray - #778899
* bg-light-slate-grey - #778899
* bg-light-steel-blue - #B0C4DE
* bg-light-yellow - #FFFFE0
* bg-lime - #00FF00
* bg-lime-green - #32CD32
* bg-linen - #FAF0E6
* bg-magenta - #FF00FF
* bg-maroon - #800000
* bg-medium-aqua-marine - #66CDAA
* bg-medium-blue - #0000CD
* bg-medium-orchid - #BA55D3
* bg-medium-purple - #9370DB
* bg-medium-sea-green - #3CB371
* bg-medium-slate-blue - #7B68EE
* bg-medium-spring-green - #00FA9A
* bg-medium-turquoise - #48D1CC
* bg-medium-violet-red - #C71585
* bg-midnight-blue - #191970
* bg-mint-cream - #F5FFFA
* bg-misty-rose - #FFE4E1
* bg-moccasin - #FFE4B5
* bg-navajo-white - #FFDEAD
* bg-navy - #000080
* bg-old-lace - #FDF5E6
* bg-olive - #808000
* bg-olive-drab - #6B8E23
* bg-orange - #FFA500
* bg-orange-red - #FF4500
* bg-orchid - #DA70D6
* bg-pale-golden-rod - #EEE8AA
* bg-pale-green - #98FB98
* bg-pale-turquoise - #AFEEEE
* bg-pale-violet-red - #DB7093
* bg-papaya-whip - #FFEFD5
* bg-peach-puff - #FFDAB9
* bg-peru - #CD853F
* bg-pink - #FFC0CB
* bg-plum - #DDA0DD
* bg-powder-blue - #B0E0E6
* bg-purple - #800080
* bg-rebecca-purple - #663399
* bg-red - #FF0000
* bg-rosy-brown - #BC8F8F
* bg-royal-blue - #4169E1
* bg-saddle-brown - #8B4513
* bg-salmon - #FA8072
* bg-sandy-brown - #F4A460
* bg-sea-green - #2E8B57
* bg-sea-shell - #FFF5EE
* bg-sienna - #A0522D
* bg-silver - #C0C0C0
* bg-sky-blue - #87CEEB
* bg-slate-blue - #6A5ACD
* bg-slate-gray - #708090
* bg-slate-grey - #708090
* bg-snow - #FFFAFA
* bg-spring-green - #00FF7F
* bg-steel-blue - #4682B4
* bg-tan - #D2B48C
* bg-teal - #008080
* bg-thistle - #D8BFD8
* bg-tomato - #FF6347
* bg-turquoise - #40E0D0
* bg-violet - #EE82EE
* bg-wheat - #F5DEB3
* bg-white - #FFFFFF
* bg-white-smoke - #F5F5F5
* bg-yellow - #FFFF00
* bg-yellow-green - #9ACD32

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

#### Text Colors

* text-alice-blue - #F0F8FF
* text-antique-white - #FAEBD7
* text-aqua - #00FFFF
* text-aquamarine - #7FFFD4
* text-azure - #F0FFFF
* text-beige - #F5F5DC
* text-bisque - #FFE4C4
* text-black - #000000
* text-blanched-almond - #FFEBCD
* text-blue - #0000FF
* text-blue-violet - #8A2BE2
* text-brown - #A52A2A
* text-burly-wood - #DEB887
* text-cadet-blue - #5F9EA0
* text-chartreuse - #7FFF00
* text-chocolate - #D2691E
* text-coral - #FF7F50
* text-cornflower-blue - #6495ED
* text-cornsilk - #FFF8DC
* text-crimson - #DC143C
* text-cyan - #00FFFF
* text-dark-blue - #00008B
* text-dark-cyan - #008B8B
* text-dark-golden-rod - #B8860B
* text-dark-gray - #A9A9A9
* text-dark-grey - #A9A9A9
* text-dark-green - #006400
* text-dark-khaki - #BDB76B
* text-dark-magenta - #8B008B
* text-dark-olive-green - #556B2F
* text-dark-orange - #FF8C00
* text-dark-orchid - #9932CC
* text-dark-red - #8B0000
* text-dark-salmon - #E9967A
* text-dark-sea-green - #8FBC8F
* text-dark-slate-blue - #483D8B
* text-dark-slate-gray - #2F4F4F
* text-dark-slate-grey - #2F4F4F
* text-dark-turquoise - #00CED1
* text-dark-violet - #9400D3
* text-deep-pink - #FF1493
* text-deep-sky-blue - #00BFFF
* text-dim-gray - #696969
* text-dim-grey - #696969
* text-dodger-blue - #1E90FF
* text-fire-brick - #B22222
* text-floral-white - #FFFAF0
* text-forest-green - #228B22
* text-fuchsia - #FF00FF
* text-gainsboro - #DCDCDC
* text-ghost-white - #F8F8FF
* text-gold - #FFD700
* text-golden-rod - #DAA520
* text-gray - #808080
* text-grey - #808080
* text-green - #008000
* text-green-yellow - #ADFF2F
* text-honey-dew - #F0FFF0
* text-hot-pink - #FF69B4
* text-indian-red - #CD5C5C
* text-indigo - #4B0082
* text-ivory - #FFFFF0
* text-khaki - #F0E68C
* text-lavender - #E6E6FA
* text-lavender-blush - #FFF0F5
* text-lawn-green - #7CFC00
* text-lemon-chiffon - #FFFACD
* text-light-blue - #ADD8E6
* text-light-coral - #F08080
* text-light-cyan - #E0FFFF
* text-light-golden-rod-yellow - #FAFAD2
* text-light-gray - #D3D3D3
* text-light-grey - #D3D3D3
* text-light-green - #90EE90
* text-light-pink - #FFB6C1
* text-light-salmon - #FFA07A
* text-light-sea-green - #20B2AA
* text-light-sky-blue - #87CEFA
* text-light-slate-gray - #778899
* text-light-slate-grey - #778899
* text-light-steel-blue - #B0C4DE
* text-light-yellow - #FFFFE0
* text-lime - #00FF00
* text-lime-green - #32CD32
* text-linen - #FAF0E6
* text-magenta - #FF00FF
* text-maroon - #800000
* text-medium-aqua-marine - #66CDAA
* text-medium-blue - #0000CD
* text-medium-orchid - #BA55D3
* text-medium-purple - #9370DB
* text-medium-sea-green - #3CB371
* text-medium-slate-blue - #7B68EE
* text-medium-spring-green - #00FA9A
* text-medium-turquoise - #48D1CC
* text-medium-violet-red - #C71585
* text-midnight-blue - #191970
* text-mint-cream - #F5FFFA
* text-misty-rose - #FFE4E1
* text-moccasin - #FFE4B5
* text-navajo-white - #FFDEAD
* text-navy - #000080
* text-old-lace - #FDF5E6
* text-olive - #808000
* text-olive-drab - #6B8E23
* text-orange - #FFA500
* text-orange-red - #FF4500
* text-orchid - #DA70D6
* text-pale-golden-rod - #EEE8AA
* text-pale-green - #98FB98
* text-pale-turquoise - #AFEEEE
* text-pale-violet-red - #DB7093
* text-papaya-whip - #FFEFD5
* text-peach-puff - #FFDAB9
* text-peru - #CD853F
* text-pink - #FFC0CB
* text-plum - #DDA0DD
* text-powder-blue - #B0E0E6
* text-purple - #800080
* text-rebecca-purple - #663399
* text-red - #FF0000
* text-rosy-brown - #BC8F8F
* text-royal-blue - #4169E1
* text-saddle-brown - #8B4513
* text-salmon - #FA8072
* text-sandy-brown - #F4A460
* text-sea-green - #2E8B57
* text-sea-shell - #FFF5EE
* text-sienna - #A0522D
* text-silver - #C0C0C0
* text-sky-blue - #87CEEB
* text-slate-blue - #6A5ACD
* text-slate-gray - #708090
* text-slate-grey - #708090
* text-snow - #FFFAFA
* text-spring-green - #00FF7F
* text-steel-blue - #4682B4
* text-tan - #D2B48C
* text-teal - #008080
* text-thistle - #D8BFD8
* text-tomato - #FF6347
* text-turquoise - #40E0D0
* text-violet - #EE82EE
* text-wheat - #F5DEB3
* text-white - #FFFFFF
* text-white-smoke - #F5F5F5
* text-yellow - #FFFF00
* text-yellow-green - #9ACD32

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