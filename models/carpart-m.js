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



partSchema.pre('validate', function(next) {
  if (this.Manufacturer) {
    this.slug = slugify(this.Manufacturer, { lower: true, strict: true })
  }

  if (this.Model) {
    this.sanitizedHtml = dompurify.sanitize(marked(this.Model))
  }

  next()
})




module.exports = mongoose.model('carparts', partSchema) // passing the model to the collection



