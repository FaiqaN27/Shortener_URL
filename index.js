const express = require('express');
const { DBConnection } = require('./connection');
const urlRoute = require('./routes/url');
const staticRoute = require('./routes/staticRoute');
const { ejs } = require('ejs');
const path = require('path');
const app = express();
const PORT = 8001;

//DB Connection
DBConnection('mongodb://localhost:27017/Shortener_URL')
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("Mongo Error"));


//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//view engine
app.set("view engine", "ejs");
app.set("views", path.resolve('./views'));

//routes
app.use("/url", urlRoute);
app.use("/", staticRoute);

app.listen(PORT, () => console.log("Server Started Successfully!"));

