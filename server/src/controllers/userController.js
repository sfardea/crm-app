	

const User = require('../models/userModel')

// Add a new user account
module.exports.createUser = (req, res) => {
  let newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
    buildings: req.body.buildings 
  })
  newUser.save(function (error) {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true,
      message: 'User saved successfully!'
    })
  }) 
}

// Get all users
module.exports.getUsers = (req, res) => {
    User.find({}, 'username email password role buildings', function (error, users) {
    if (error) { console.error(error); }
    console.log(users)
    res.send({
      users: users
    })
  }).sort({_id:-1})

}

// Update a user
module.exports.updateUser = (req, res) => {
    Post.findById(req.params.id, 'title description', function (error, user) {
    
    if (error) { console.error(error) }
    
    user.username = req.body.username,
    user.email = req.body.email,
    user.password = req.body.password,
    user.role = req.body.role,
    user.buildings = req.body.buildings

    post.save(function (error) {
    
        if (error) { console.log(error) }
      
      res.send({
          success: true
      })
    })
  })
}