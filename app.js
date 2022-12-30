const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const homeRoutes = require("./routes/home");
const great_hallRoutes = require("./routes/great_hall");
const housesRoutes = require("./routes/houses");


//Load config
dotenv.config({ path: "./config/config.env" });

connectDB();

app.use(expressLayouts);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");
// Static folder
app.use(express.static("public"));
// Body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use("/", homeRoutes);
app.use("/great_hall", great_hallRoutes);
app.use("/houses", housesRoutes);

const PORT = process.env.PORT || 7000;

app.listen(
    process.env.PORT, () =>{
    console.log(
        `Server running on ${process.env.NODE_ENV} mode on PORT ${PORT}`
    )
    });
