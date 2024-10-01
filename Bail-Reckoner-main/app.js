const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const MongoStore = require('connect-mongo');
const ejsMate = require("ejs-mate");
const methodoverride = require("method-override");
const passport = require("passport");
const localstrategy = require("passport-local");
const bodyParser = require("body-parser");
const cors = require("cors");
// const User = require("./models/user.js");

const app = express();



app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodoverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "public")));



// Middleware
app.use(bodyParser.json());
app.use(cors());


// MongoDB Connection
// mongoose
//   .connect("mongodb://localhost/bailCheckerDB", {})
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.log(err));


//new route:::eligibility checker
const offenseRoutes = require("./routes/offenses");
app.use("/api/offenses", offenseRoutes);

app.get("/form", (req, res) => {
  res.render("eligibility/index.ejs");
});

//index route render home page
app.get("/home", (req, res) => {
  res.render("pages/index.ejs");
});

//render user form
// app.get("/form", (req, res) => {
//   res.render("pages/form.ejs");
// });

//render about page
app.get("/about", (req, res) => {
  res.render("pages/about.ejs");
});

//render features page
app.get("/features", (req, res) => {
  res.render("pages/features.ejs");
});

//render login page
app.get("/multilogin", (req, res) => {
  res.render("pages/multilogin.ejs");
});

//render contact page
app.get("/contact", (req, res) => {
  res.render("pages/contact.ejs");
});

//render signup page for user
app.get("/signup", (req, res) => {
  res.render("pages/signup.ejs");
});

//render signup page for user appform
app.get("/login", (req, res) => {
  res.render("pages/login.ejs");
});

//render signup page for user appform
app.get("/appform", (req, res) => {
  res.send("working on it")
});

//render check status page checkstatus
app.get("/checkstatus", (req, res) => {
  res.render("pages/status.ejs");
});


//render form application
app.get("/applyform",(req,res)=>{
  res.render("pages/form.ejs");
})

//Eligibilty output
app.post("/eligibility",(req,res)=>{
  res.send("hii");
})

//redirect to efilling
app.get("/efilling",(req,res)=>{
  res.redirect("https://filing.ecourts.gov.in/pdedev/");
})

// Start Server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
