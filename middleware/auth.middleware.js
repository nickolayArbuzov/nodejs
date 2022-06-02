const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    if(req.method === 'OPTIONS') {
        
        next()
        return
    }

    try{
        if(error) {

            return  res.status(401).json({message: 'error'})
        }

        next()
    }

    catch (e) {

        return  res.status(401).json({message: 'error'})
    }
}