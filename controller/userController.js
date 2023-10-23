const { use } = require('../router/userRoute');
const conn = require('../util/db')
const userController = {
     loginUser :async (req,res)=>{
        const {user,password}  = req.body;
        console.log(user,password)
        conn.query("select * from user where username = ?  and password = ?",[user,password],(err,result,fields)=>{
            if(result.length == 0){
                res.status(200).json({message:"NOMATCH"})
            }else{
                res.status(200).json({message:"MATCH"})
            }
            
        })
    }
}
module.exports = userController;