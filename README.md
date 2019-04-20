# Trinium v0.3.0

## Status

In early development, please come back later!

## Installation

`npm i trinium`

## Page

```javascript
const page = new trinium.Page();
```

A page has the following methods:

* **Page.card()** - Create a card component, append it to the page, and return it
* **Page.form()** - Create a form component, append it to the page, and return it
* **Page.heading()** - Create a heading component, append it to the page, and return it

## Components

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
