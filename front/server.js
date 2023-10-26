const express = require("express");
const path = require("path");

// setting
const PORT = process.env.PORT || 80;
const HOST = "0.0.0.0";

// app
const app = express();

app.use(express.static(__dirname + '/build'));

//app.use(`${process.env.REACT_APP_BASE_URL}`, express.static(__dirname + '/build'));


const htmlFile = path.join(__dirname, "build", "index.html")

app.get("/*", function (req, res) {
  res.set({'access-control-allow-origin':'*'});
  res.sendFile(htmlFile);
});


// listen
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);