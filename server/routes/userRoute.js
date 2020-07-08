import express, { Router } from 'express';
import User from '../models/userModel';
const router= express.Router();

router.get("/createadmin",async(req,res) =>{
try{

    const user = new User({
        name: 'krunal',
        email:'xydf@gmdfg',
        password: 'dasfsd',
        isAdmin: true
    });

    const newUser = await user.save();
    res.send(newUser);

}catch(error){
    res.send("erro occured");
}

});
export default router;