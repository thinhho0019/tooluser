 
const userController = {
     loginUser :async (req,res)=>{
        const {user,password}  = req.body;
            if( user == 'admin' && password == 'admin'){
                res.status(200).json({message:"success"})
            }else{
                res.status(200).send({message:"Password Not Match"})
            }
    
    }
}
module.exports = userController;