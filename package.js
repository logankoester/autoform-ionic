Package.describe({
  name: "meteoric:autoform-ionic",
  summary: "Ionic theme for Autoform",
  version: "0.1.7",
  git: "https://github.com/meteoric/autoform-ionic.git"
});

Package.onUse(function(api) {
  api.versionsFrom(["METEOR@1.2.1"]);
  api.use(["templating", "underscore"], "client");
  api.use("aldeed:autoform@5.8.0");
  api.addFiles([
    "ionic.html",
    "ionic.css",
    "ionic.js"
  ], "client");
});
