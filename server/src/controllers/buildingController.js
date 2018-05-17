
const Building = require('../models/buildingModel')

module.exports.getBuildings = (req, res) => {
    Building.find({}, 'buildingname location', function (error, buildings) {
    if (error) { console.error(error); }
    console.log(buildings)
    res.send({
      buildings: buildings
    })
  }).sort({_id:-1})

}
