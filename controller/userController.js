const { use } = require('../router/userRoute');
const userService = require('../service/userService');
const { trusted } = require('../util/db');
const crypto = require('crypto');
const userController = {
     loginUser :async (req,res)=>{
        try{
            const {user,password}  = req.body;
        var userE = crypto.createHash('md5').update(user ).digest('hex');
        var passwordE = crypto.createHash('md5').update(password ).digest('hex');
 
        if (await userService.loginUser(userE,passwordE) ){
            res.status(200).json({message:"success"})
        }else{
            res.status(401).json({message:"no"})
        }
        }catch(ex){
            console.log(ex)
        }
        
    }
}
module.exports = userController;