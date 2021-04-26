const mongoose = require('mongoose')
const marked = require('marked')
const slugify = require('slugify')
const createDomPurify = require('dompurify')
const { JSDOM } = require('jsdom')
const dompurify = createDomPurify(new JSDOM().window)

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



