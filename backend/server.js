const express = require('express')

require('express-async-errors')
const app = express()

const { connectToDatabase } = require('./utils/db')
const middleware = require('./utils/middleware.js')
const config = require('./config/config.js')

app.use(express.json())

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

const start = async () => {
	await connectToDatabase()
	app.listen(config.development.port, () => {
		console.log(`Server running on port ${config.development.port}`)
	})
}

start()
