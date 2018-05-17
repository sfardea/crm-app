
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const buildingSchema = Schema({
	  _id: Schema.Types.ObjectId,
	  buildingname: String,
	  location: String
	  // ,
	  // receivables: [{ type: Schema.Types.ObjectId, ref: 'Receivable' }]
});

const Building = mongoose.model('Building', buildingSchema)

module.exports = Building