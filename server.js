let express = require("express");
let app = express();
let cors = require("cors")();
let port = 8000;

app.use(cors);

app.use(express.static(__dirname + "/dist"));

app.listen(port, () => console.log("listening!"));
