const express = require('express');
const router = express.Router();
const { check, validationResult } = require("express-validator");
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/', 
    async (req, res) => {
       
        const { name, email,university, rollnumber, cnic,password } = req.body
        try {

            let user = await User.findOne({ email });
            if (user) {
                return res.status(400).json({ errors: [{ msg: "User already exists" }] });
            }

            user = new User({
               name, email, university, rollnumber, cnic,password
            })
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);
            await user.save();
           

            //JsonWebToken

            const payload = {
                user: {
                    id: user.id
                }
            };
            jwt.sign(payload,
                "JWTSECRET",
                { expiresIn: 360000 }
                , (err, token) => {
                    if (err) throw err;
                    res.json({ token })
                }
            );


        } catch (err) {
            console.error(err.message);
            res.status(500).send("Server Error");
        }

    })

    //To get all Clients
    router.get('/getusers', async (req, res) => {

        try {
    
    
            const users = await User.find()
            // console.log(users)

            res.json({users});
        } catch (err) {
    
            console.error(err.message);
            res.status(500).send('Server Error');
    
        }
    })

    //
    

module.exports = router;