const path = require("path");
const express = require("express");
const app = express();
const port = 3000;

const publicDirectoryPath = path.join(__dirname, "../public");

app.set("view engine", "hbs");
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
