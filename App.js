//npm installs
const express = require("express");
const path = require("path");
const errController = require("./controllers/error");
const app = express();
//set view engine
app.set("view engine", "ejs");
//set html directories
app.set("views", "views");
//import files
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errController.get404);

app.listen(3000, "localhost");
