const mongoose = require('mongoose')


const partSchema = new mongoose.Schema({

Manufacturer: {
type: String,
required: true

},

Model: {
type: String,
required: true
},

Part: {
type: String,
required: true
},

Price:{
type: String,
required: true
}



})





module.exports = mongoose.model('carparts', partSchema) // passing the model to the collection



