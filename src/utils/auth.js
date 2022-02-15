const jwt = require('jsonwebtoken')
// const userModel = require('models/user.model.js')

async function checkAuth (req, res, next) {
  if(!req.headers.token){
    res.status(403).json({error : 'No Token Found'})
  }
  jwt.verify(token, process.env.SECRET, async (err, decoded) =>{
    if(err) return res.send('Token not valid')
    console.log(decoded)
    const user = await userModel.findOne({email : decoded.email})
    if(user){
      res.locals.user = user
      next()
    }
    else {res.send('User not found')}
  })

}

module.exports = {checkAuth}
