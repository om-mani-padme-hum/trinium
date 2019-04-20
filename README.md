# Trinium v0.2.0

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

## Cards

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

## Forms

* **Card.addWrapperClass(className)** - Add class to form wrapper
* **Card.size(keyword)** - Set the size of the card using one of the size keywords
* See the documentation for [EZ Forms](https://github.com/om-mani-padme-hum/ezforms) for all other methods

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

* 100
* 90
* 80
* 75
* 70
* 66
* 60
* 50
* 40
* 33
* 30
* 25
* 20
* 15
* 10

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
