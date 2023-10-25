const userModel = require('../model/user')

class userService {
    async insertData(username, password){
        try{
            const result = await userModel({username:username,password:password});
            await result.save()
            return true
        }catch(ex){
            return false
        }
        

    }
    async loginUser(username,password){
        try{
            const data=await userModel.findOne({username: username,password:password})
            
            if(data == null){
                console.log(data)
                return false
            }else{
                return true
            }

        }catch(ex){
            console.log(ex)
            return false
        }
        
        
    }
}
module.exports = new userService()