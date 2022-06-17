const mix = require("laravel-mix");

mix
  .js("src/resources/js/app.js", "src/public/js")
  .postCss("src/resources/css/app.css", "src/public/css", [
    require("tailwindcss"),
  ]);
