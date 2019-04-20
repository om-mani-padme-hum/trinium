const express = require(`express`);
const fs = require(`fs`);
const trinium = require(`./index`);

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
  const p = new trinium.Page();

  p.title(`Trinium Demo`);
  p.css().push(`/css/trinium.css`);
  p.javascript().push(`/js/trinium.js`);
  
  p.heading().size(`100`).rank(2).addWrapperClass(`text-center`).text(`Example Trinium Page`);
  
  p.card().size(`small`).addHeaderClass(`bg-steel-blue text-white mt-2`).header(`Example Card`).text(`This is the body portion of the card.`);
  
  const form = p.form().size(`medium`).addWrapperClass(`fixed px-6`);
  
  /** Set form action and method properties */
  form.action(`/`).method(`GET`);
  
  /** Create form heading (default 16 cols wide) */
  form.heading().rank(4).text(`Create Account`);
  
  /** Add alert */
  form.alert().cols(13).colsBefore(1).type(`error`).strong(`Error!`).text(`Your password must contain at least one lowercase letter, one uppercase letter, and one number!`);
  
  /** Create two text inputs, allowing only letters and quotes */
  form.text().cols(6).colsAfter(2).name(`firstName`).label(`First Name:`).required(true).pattern(`^[a-zA-Z&quot;]+$`);
  form.text().cols(6).name(`lastName`).label(`Last Name:`).required(true).pattern(`^[a-zA-Z&quot;]+$`);

  /** Create password inputs, requiring one uppercase letter, one lowercase letter, one number, at minimum 8 chars */
  form.password().cols(7).colsAfter(1).name(`password`).label(`Choose Password:`).required(true).pattern(`(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).[^\s]{8,}`);
  form.password().cols(7).name(`password2`).label(`Confirm Password:`).required(true).pattern(`(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).[^\s]{8,}`);
  
  /** Create email input */
  form.email().cols(8).name(`email`).label(`Email Address:`).pattern(`[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$`);
  
  /** Create horizontal radio group input */
  form.radios().cols(8).name(`sex`).label(`Sex:`).align(`horizontal`);
  form.option().value(`female`).text(`Female`).selected(true);
  form.option().value(`male`).text(`Male`);
  
  /** Create buttons */
  form.button().cols(4).colsBefore(3).colsAfter(2).type(`reset`).text(`Reset`);
  form.button().cols(4).colsAfter(3).type(`submit`).text(`Submit`);

  res.send(p.render());
  
  next();
});

app.listen(3000, () => {
  console.log(`Trinium demo is up and running on port 3000!`);
});
