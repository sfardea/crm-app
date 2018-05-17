
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose');
const sampleDatabase = require('./fillDatabase')

mongoose.connect('mongodb://qanolt:1234@ds117540.mlab.com:17540/crm-app')

// sampleDatabase.fillDatabase() 

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

const userController = require('./controllers/userController')
const buildingController = require('./controllers/buildingController')
const receivableController = require('./controllers/receivableController')

// Get users
app.get('/users', (req, res) => {
	userController.getUsers(req, res)
})

// Add a new user account
app.post('/newuser', (req, res) => {
	userController.createUser(req, res)
})

// Add a new building to a user account
app.put('/newbuilding', (req, res) => {
	buildingController.createBuilding(req, res)
})

// Delete a building from a user account
app.delete('/buildings/:id', (req, res) => {
	buildingController.deleteBuilding(req, res)
})

// Get buildings
app.get('/buildings', (req, res) => {
	buildingController.getBuildings(req, res)
})

// Add a new receivable to a building
// Delete receivable from a building


// Update a user
app.put('/updateuser/:id', (req, res) => {
	userController.updateUser(req, res)
})

app.listen(process.env.PORT || 3000)

module.exports = app