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
  
  for ( let i = 1; i <= 5; i++ )
    p.card().addCardClass(`px-4`).addHeaderClass(`bg-dodger-blue text-white`).header(`Example Card #${i}`).text(`This is the body portion of the card.`);
  
  res.send(p.render());
  
  next();
});

app.listen(3000, () => {
  console.log(`Trinium demo is up and running on port 3000!`);
});
