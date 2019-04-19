## Cards

The card structure is as follows:

* Wrapper `<div>` of class **trinium-card**
* * Header `<div>` of class **trinium-card-header**
* * Body `<div>` of class **trinium-card-body**

When you append content to the card using either the `.text()` method or the `.append()` or `.prepend()` methods, the content
will be added to the body `<div>` of the card.  The header can only contain plain text (or manually typed HTML), and can be set 
by means of the `.header()` method.

### Card.addCardClass(className) - Add class to card wrapper
### Card.addHeaderClass(className) - Add class to card header
### Card.addBodyClass(className) - Add class to card body
### Card.header(markup) - Text or HTML markup to include in header `<div>`

