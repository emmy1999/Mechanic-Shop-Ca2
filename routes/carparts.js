const express = require('express')

const Part = require('../models/carpart-m')
const router = express.Router()


router.get('/new', (req, res) => {
res.render('carpart/new_part')


})

router.get('/:id', (req,res)=> {
    const part = Part.findByid(req.params.id)
   if (part == null ) res.redirect 
res.send(params.id)
} )

router.post('/', async (req, res)=> {
let part = new Part({
     Manufacturer: req.body.Manufacturer,
  Model: req.body.Model,
  Part: req.body.Part,
  Price: req.body,Price,
})
try {
part = await part.save();
res.redirect(`/carparts/${part.id}`)
} catch (e) {
    console.log(e)
res.render('carpart/new_part', {part : part})
}

})

module.exports = router