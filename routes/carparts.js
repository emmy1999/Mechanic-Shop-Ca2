const express = require('express')

const Part = require('../models/carpart-m')
const router = express.Router()


router.get('/new', (req, res) => {
  res.render('carpart/new_part', { part: new Part() })
})

router.get('/edit/:id', async (req, res) => {
  const part = await Part.findById(req.params.id)
  res.render('carpart/edit_part', { part: part })
})



router.get('/:id', async (req, res) => {
  const part = await Part.findById()
  if (part == null) res.redirect('/')

})

router.post('/', async (req, res, next) => {
  req.part = new Part()
  next()

}, savePartAndRedirect('new'))


router.put('/:id', async (req, res, next) => {
  req.part = await Part.findById(req.params.id)
  next()

}, savePartAndRedirect('edit'))





router.delete('/:id', async (req, res)=> {
    await Part.findByIdAndDelete(req.params.id)
  res.redirect('/#products')


})


function savePartAndRedirect(path) {
  return async (req, res) => {
    let part = req.part
    part.Manufacturer = req.body.Manufacturer
    part.Model = req.body.Model
    part.Part = req.body.Part
     part.Price = req.body.Price
    try {
      part = await part.save()

     res.redirect(`/#products`)
    } catch (e) {
 

    }
  }
}






module.exports = router