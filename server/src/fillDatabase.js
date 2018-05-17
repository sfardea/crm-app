
// This script fills the collections of the database with sample data

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

module.exports.fillDatabase = () => {


	const buildingSchema = Schema({
	  _id: Schema.Types.ObjectId,
	  buildingname: String,
	  location: String
	  // ,
	  // receivables: [{ type: Schema.Types.ObjectId, ref: 'Receivable' }]
	});

	const receivableSchema = Schema({
	  title: String,
	  date: String,
	  remainingBalance: Number,
	  building: {
		type: Schema.Types.ObjectId,
		ref: 'Building'
	  }
	});

	const Building = mongoose.model('Building', buildingSchema);
	const Receivable = mongoose.model('Receivable', receivableSchema);

	let building = new Building({
	  _id: new mongoose.Types.ObjectId(),
	  buildingname: 'Grand Hôtel',
	  location: 'Opéra'
	});

	building.save(function (err) {
	  if (err) return console.log(err);

	  let receivable1 = new Receivable({
	    title: 'Crédit1',
	    date: '23/06/1988',
	    remainingBalance: 34556,
	    building: building._id    // assign the _id from the person
	  });

	  receivable1.save(function (err) {
	    if (err) return console.log(err);
	    // thats it!
	  });
	});

	Receivable.
	  findOne({ title: 'Crédit1' }).
	  populate('building').
	  exec(function (err, receivable) {
	    if (err) return console.log(err);
	    console.log('The receivable named:', receivable.title , 'belongs to the:', receivable.building.buildingname);
	 });

}