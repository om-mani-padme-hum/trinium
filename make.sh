#!/bin/bash

echo Copying EZ Forms SCSS to Trinium...
cp node_modules/ezforms/scss/ezforms.scss scss/ezforms.scss

echo Compiling SCSS...
sass scss/trinium.scss css/trinium.css

echo Done!  Starting Example...
node example.js
