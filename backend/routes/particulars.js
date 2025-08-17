const router = require('express').Router()
const Particular = require('../models/particular.js')

router.get('/', async (req, res) => {
	const particulars = await Particular.findAll()
	res.json(particulars)
})

module.exports = router
