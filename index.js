const express = require('express');
const bodyParser = require('body-parser');
const PORT = 41111;
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
const userRoutes = require('./routes/user');
app.use('/', userRoutes);

app.listen(PORT, console.log("Server run at port"+ PORT));