const router = require('express').Router()
const Client = require('../models/client.js')

router.get('/', async (req, res) => {
	const clients = await Client.findAll()
	res.json(clients)
})

router.post('/', async (req, res) => {
	try {
		const { title, firstName, lastName, address } = req.body
		const newClient = await Client.create({
			title,
			firstName,
			lastName,
			address,
		})
		res.json(newClient)
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
})

module.exports = router
