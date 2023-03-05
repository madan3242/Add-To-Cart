import { User } from "../models/User.js"

export const signup = async (req, res) => {

    let {name, email, password} = req.body;

    let user = User.findOne({ email: email });

    if(user){
        res.status().json()
    }

    user = {
        name,
        email,
        password,
        dob: new Date.now(),
        gender: "",
        address,
        photo,
    }

    let address = {
        streetno: "",
        city: "",
        state: "",
        pincode: ""
    }

    let photo = {

    }

    await user.save();

}

export const login = async (req, res) => {
    let { email, password } = req.body;
    
}