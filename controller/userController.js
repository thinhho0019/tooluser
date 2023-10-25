const { use } = require('../router/userRoute');
const userService = require('../service/userService');
const { trusted } = require('../util/db');

const userController = {
     loginUser :async (req,res)=>{
        try{
            const {user,password}  = req.body;
        
        if (await userService.loginUser(user,password) ){
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