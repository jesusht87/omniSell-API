const jwt = require('jsonwebtoken')
const userModel = require('../models/users.model')

async function checkAuth (req, res, next) {
  if(!req.headers.token){
    res.status(403).json({error : 'No Token Found'})
  }

  jwt.verify(req.headers.token, process.env.SECRET, async (err, decoded) => {
    if(err) return res.send('Token not valid')
    
    const user = await userModel.findById(decoded.user_id)
    
    if(user){
      res.locals.user = user
      next()
    }
    else {res.send('User not found')}
  })

}

function checkAdmin (req, res, next){
  if(res.locals.user.role == 'admin'){
    next()
  }
  else{res.send('Access forbidden')}
}

function checkManager (req, res, next){
  if(res.locals.user.role == 'admin' || res.locals.user.role == 'manager'){
    next()
  }
  else{res.send('Access forbidden')}
}

module.exports = {checkAuth,
  checkAdmin,
  checkManager}
