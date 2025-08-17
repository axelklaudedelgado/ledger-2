const router = require('express').Router()
const Transaction = require('../models/transaction.js')

router.get('/', async (req, res) => {
	const transaction = await Transaction.findAll()
	res.json(transaction)
})

module.exports = router
