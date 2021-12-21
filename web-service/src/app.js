const path = require("path");
const express = require("express");
const app = express();
const port = 3000;

//define paths for express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates");

//setup handlebars and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);

//setup directory to server
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "weather app",
    name: "Thinh",
  });
});

app.get("/about", (req, res) => {
  res.send([{ name: "Thinh", age: 20 }]);
});

app.listen(port, () => {
  console.log("example app listening at ...");
});
