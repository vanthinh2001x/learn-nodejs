const express = require("express");
const app = express();
const port = 3000;
app.get("", (req, res) => {
  res.send("hellow express");
});

app.get("/about", (req, res) => {
  res.send([{ name: "Thinh", age: 20 }]);
});

app.listen(port, () => {
  console.log("example app listening at ...");
});
