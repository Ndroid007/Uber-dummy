const userModel = require('../models/user.model');
const captainModel = require('../models/captain.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const blacklistTokenModel = require('../models/blacklistToken.model');


module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    // console.log(token);         //DEBUG
    if(!token){
        return res.status(401).json({ message: "Unauthorized"});
    }

    const isBlacklisted = await blacklistTokenModel.findOne({ token });
    if (isBlacklisted) {
        return res.status(401).json({ message: "Unauthorized"});
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // console.log("\ndecoded id:" + decoded.id);       //DEBUG
        
        const user = await userModel.findById (decoded.id);
        // console.log("\n User:"+user);       //DEBUG

        req.user = user;        // Configured to pass to router
        
        return next();

    } catch (err) {
        return res.status(401).json({ message: "Unauthorized"});
    }
}

module.exports.authCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    
    if(!token){
        return res.status(401).json({ message: "Unauthorized"});
    }
    
    const isBlacklisted = await blacklistTokenModel.findOne({ token });
    
    if (isBlacklisted) {
        return res.status(401).json({ message: "Unauthorized"});
    }
    
    
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        const captain = await captainModel.findById(decoded.id);
        
        req.captain = captain;
        
        return next();

    } catch {
        return res.status(401).json({ message: "Unauthorized"});
    }

}