const express = require('express');
const { DBConnection } = require('./connection');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 8001;

const urlRoute = require('./routes/url');
const staticRoute = require('./routes/staticRoute');
const userRoute = require('./routes/user')

const { checkForAuth, restrictTo } = require('./middlewares/auth')

//DB Connection
DBConnection('mongodb://localhost:27017/Shortener_URL')
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("Mongo Error"));

//view engine
app.set("view engine", "ejs");
app.set("views", path.resolve('./views'));

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuth);

//routes
app.use("/url", restrictTo(["NORMAL", "ADMIN"]), urlRoute);
app.use("/", staticRoute);
app.use("/user", userRoute);

app.listen(PORT, () => console.log("Server Started Successfully!"));

