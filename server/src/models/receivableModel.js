
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const receivableSchema = Schema({
	  title: String,
	  date: String,
	  remainingBalance: Number,
	  building: {
		type: Schema.Types.ObjectId,
		ref: 'Building'
	  }
	});

const Receivable = mongoose.model('Receivable', receivableSchema);