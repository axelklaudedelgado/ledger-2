const router = require('express').Router()
const Transaction = require('../models/transaction.js')

router.get('/', async (req, res) => {
	const transaction = await Transaction.findAll()
	res.json(transaction)
})

router.post('/', async (req, res) => {
	try {
		const { clientId, joNumber, date, remarks } = req.body
		const newTransaction = await Transaction.create({
			clientId,
			joNumber,
			date,
			remarks,
		})
		res.json(newTransaction)
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
})

module.exports = router
