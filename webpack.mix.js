const mix = require("laravel-mix");

mix
  .ts("src/resources/js/app.ts", "src/public/js")
  .postCss("src/resources/css/app.css", "src/public/css", [
    require("tailwindcss"),
  ]);
