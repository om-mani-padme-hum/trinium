#!/bin/bash

echo Compiling SCSS...
sass scss/trinium.scss css/trinium.css

echo Done!  Starting Example...
node example.js
