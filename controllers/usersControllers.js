import User from '../models/User.js';
class usersControllers {
    async register(req,res){
        try{
            const {name, email, password} = req.body;
            const user = await User.create({name, email, password});
            return res.json(user);
        }catch(e){
            console.log(e);

        }
    }
}

export default new usersControllers();
