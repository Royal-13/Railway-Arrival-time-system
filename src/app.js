// Imports needed modules
const path = require('path');
const express = require('express');
const hbs = require('hbs');
const railapi = require('./utils/railapi')

// Loads env variables
require('dotenv').config()

// Creates app
const app = express();

// Adds json parsing middleware
app.use(express.json());

// Initializes application port
const port = process.env.PORT || 3001;

// Define paths for Express config
const viewsPath = path.join(__dirname,'./templates/views');
const partialsPath = path.join(__dirname, './templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(path.join(__dirname, '../public')));

// Creates base URL route "/" and renders index view
app.get('', (req,res) => {
    res.render('index', {
        title: 'Get status',
    })
})

app.get('/status', (req,res) => {
    res.render('status', {
        title: 'Get status',
    })
})

app.get('/map', (req,res) => {
    res.render('map', {
        title: 'Get map',
    })
})

app.get('/about', (req,res) => {
    res.render('about', {
        title: 'About us',
    })
})

// Creates send-sms endpoint
app.post('/status', async (req, res) => {
    const { 
        trainId
    } = req.body

    if (!trainId) {
        return res.status(404).send({
            error: "Please provide the information"
        })
    }

    try {
        const response = await railapi.getdata(trainId)
        const obj =  JSON.parse(response) 
        const heading = obj.train_details.train.source_name
        const details = obj.train_details.train.source_status

        return res.json({
            heading,
            message: details
        })

    } catch(e) {
        console.log(e)

        return res.status(500).json({
            error: "Something went wrong"
        })
    }
})

// Catch all route, renders 404 page
app.get('*', (req, res) => {
    res.render('404',
        {
            search: 'page'
        }
    )
})

// Directs app to listen on port specified previously
app.listen(port, () => {
    console.log('Server is up on port ' + port)
})