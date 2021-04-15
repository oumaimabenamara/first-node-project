const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const User = require('../models/userInfoSchema');


// ___________________________________________________________________
// REGISTER
router.post('/register', async(req, res) => {
    const userFound = await User.findOne({email: req.body.email});
    console.log(userFound);
    if (userFound == null){
        // hashage du password
        bcrypt.hash(req.body.password, 10, async(error, hash) => {
            if (error) {
                res.status(500).json({message: 'server error !'})
            }
            // store hash in password DB 
            // console.log(hash);
            req.body.password = hash;
            await User.create(req.body);
            res.json({message: 'euh Register !'});
        });
    }
    else {
        res.status(400).json({message: 'E-mail exists !'});
    }
});

// LOGIN
router.post('/login', async(req, res) => {
    // Load hash from password DB
    // let passwordMatch;
    // bcrypt.compare(req.body.password, userFound.password, async(err, result) => {
    //     console.log(result);
    //     console.log(passwordMatch);
    //     passwordMatch = result;
    // });
    // const userFound = await User.findOne({ $and: [{email: req.body.email} , {passwordMatch}]});
    // if (userFound)
    // {
    //     res.json({message: 'euh Login !'});
    // }
    // else {
    //     res.status(400).json({message: 'User does not exist !'});
    // }
    const userFound = await User.findOne({email: req.body.email});
    if (userFound == null) {
        // res.json({message: 'verify E-mail'});
        res.json({message: 'verify E-mail/Password'});
    }
    else {
        const passwordMatch = await bcrypt.compare(req.body.password, userFound.password);
        if (passwordMatch) {
            // create a token 
            const tokenData = {
                email: userFound.email,
                userId: userFound._id,
                firstName: userFound.firstName
            };
            const createdToken = jwt.sign(tokenData, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRES});
            res.json({message: 'euh Login !', token: createdToken});
        }
        else {
            // res.json({message: 'verify Password'});
            res.json({message: 'verify E-mail/Password'});
        }
    }
});

module.exports = router;

