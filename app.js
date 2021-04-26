const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Part = require('./models/carpart-m')
const bodyParser = require('body-parser');
require('dotenv').config()
app.use(bodyParser.json());

// Routes Declare
const partRouter = require('./routes/carparts')

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false}))



//Render html file
app.get('/', async  (req,res)=> {
   const parts = await Part.find();

    res.render('carpart/index' , {parts: parts})
})


// connecting to database
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true, })
const dbc = mongoose.connection

dbc.once('open', () => console.log('Connected to Database!'))
dbc.on('error', (error) => console.error(error))



app.use('/carparts', partRouter)

app.listen(5000, () => console.log('Server Started'))