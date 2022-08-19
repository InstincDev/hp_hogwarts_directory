const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts')
const connectDB = require("./config/db");
const dotenv = require('dotenv');
const homeRoutes = require('./routes/home')
const rosterRoutes = require('./routes/roster')
const housesRoutes = require('./routes/houses')
const methodOverride = require('method-override')



//Load config
dotenv.config({path: './config/config.env'});

connectDB();

app.use(expressLayouts)
app.set('layout', './layouts/main')
app.set('view engine', 'ejs');
// Static folder
app.use(express.static('public'))
// Body parser
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// Method override
app.use(
    methodOverride(function (req,res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        let method = req.body._method
        delete req.body._method
        return method
    }
}))

// Set global var
app.use(function (req, res, next) {
    res.locals.user = req.user || null
    next()
})

// Routes
app.use("/", homeRoutes)
app.use('/dashboard', rosterRoutes)
app.use('/houses', housesRoutes)

const PORT = process.env.PORT || 7000;

app.listen(
    PORT,
    console.log(
        `Server running on ${process.env.NODE_ENV} mode on PORT ${PORT}`
    )
);
