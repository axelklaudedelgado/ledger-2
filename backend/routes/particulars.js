const router = require('express').Router()
const Particular = require('../models/particular.js')

router.get('/', async (req, res) => {
	const particulars = await Particular.findAll()
	res.json(particulars)
})

router.post('/', async (req, res) => {
	try {
		const { name, type } = req.body
		const newParticular = await Particular.create({
			name,
			type,
		})
		res.json(newParticular)
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
})

module.exports = router
