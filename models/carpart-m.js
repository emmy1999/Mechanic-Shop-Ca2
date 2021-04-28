

const mongoose = require('mongoose') // creating a const to access the package mongoose.


const partSchema = new mongoose.Schema({ // defining the schema of the database collection for communication.
// Defining the structure of my database collection. 
Manufacturer: {
type: String,// defining the type of 
required: true // defining the data type in my collection

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





module.exports = mongoose.model('carparts', partSchema) // passing the model to the collection named carparts using the schema defined



