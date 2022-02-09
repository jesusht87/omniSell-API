const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name required']
  },
  surname: {
    type: String,
    required: [true, 'Surname required']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: [true, 'This email has already been registered'], 
    match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Error: Wrong email format.'
      ]
  },
  password: {
    type: String,
    required: [true, 'Password required']
  }, 
  store: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'store',
    required: false
  }, 
  role: {
    type: String,
    required: [true, 'Role required'],
    enum : ['admin', 'manager', 'employee']
  }
})

const userModel = mongoose.model('user',userSchema)

module.exports = userModel
