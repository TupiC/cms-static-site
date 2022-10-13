#!/bin/sh
npx sass ./src/sass/style.scss ./dist/style.css
cp ./src/index.html ./dist/
cp ./src/favicons/*.* ./dist/
cp -R ./src/images ./dist/
cp -R ./src/fonts ./dist/fonts
npx esbuild ./src/js/main.js --bundle --outfile=./dist/main.js  --minify

