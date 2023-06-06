const bcrypt = require('bcrypt');
const User = require('../Model/User');

const authController = {
    register: async (req, res) => {
        const { username,
            email,
            password,
            profile_picture_path 
        } = req.body;

        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(password.salt);

        const newUser = new User({
            username,
            email,
            password: hashPassword,
            profile_picture_path,
        });

        try{
            await newUser.save();
            return res.status(201).json(newUser); 
        }
        catch(error){
            return res.json(error);
        }
    }
}

module.exports = authController;