// importing node framework
const express = require("express");

const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");
// Respond with "Hello World via Github Actions" for requests that hit our root "/"
app.get("/", function (req, res) {
	return res.render("index", { title: "DEMARRAGE" });
});

// listen to port 7000 by default
app.listen(process.env.PORT || 7000, () => {
	console.log("Server is running");
});

module.exports = app;
