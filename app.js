const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Part = require('./models/carpart-m')
const bodyParser = require('body-parser');
require('dotenv').config()


var port = process.env.PORT || 5000;


app.use(bodyParser.json());

// Routes Declare
const partRouter = require('./routes/carparts')
const methodOverride = require('method-override')

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false}))
app.use(methodOverride('_method'))
app.use(express.static('views/carpart'))


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

//app.listen(5000, () => console.log('Server Started'))

app.listen(port, function(error){
    console.log('Server Started on port: ' + port);
});