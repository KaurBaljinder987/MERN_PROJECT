const express = require('express');
const app = express.Router();
const bcrypt = require('bcrypt');
require('dotenv').config()
const jwt = require('jsonwebtoken')

const User = require('../models/user');

const secretKey = process.env.SECRETKEY;
console.log("----secretKey---", secretKey)


// user Registeration

const saltRounds = 10;

app.post("/userRegister", async (req, res) => {
    try {
        const { fname, lname, email, password } = req.body;
        console.log("----req.body---", req.body)

        let encryptedPassword = bcrypt.hashSync(password, saltRounds);
        const userData = await User.findOne({
            email: email
        })
        if (userData) {
            res.status(400).json({ message: "User already registered" })
        }
        else {
            const user = new User({
                fname,
                lname,
                email,
                password: encryptedPassword,
            })
            const createUser = await user.save()
            res.status(200).json({
                status: 'success',
                data: {
                    createUser
                },
                message: "Successfully Registered, Please Login now"
            });
        }
    }
    catch (err) {
        console.log("---err----", err)
    }
})

// user Login

app.post("/userlogin", async (req, res) => {
    try {
        console.log('req', req)
        const email = req.body.email;
        const password = req.body.password;
        const userData = await User.findOne({ email: email })
        let pwdVerify = bcrypt.compareSync(password, userData.password);
        console.log("----pwdVerify--", pwdVerify)
        if (pwdVerify) {
            const token = jwt.sign(email, secretKey);
            console.log("---token---", token)
            return res.status(200).json({
                message: "Login Successfully",
                token
            });
        }
        else {
            return res.status(400).json({ message: "Password didn't match" });
        }
    }
    catch (err) {
        console.log("---err--", err)
        return res.status(400).json({ message: "User not exists" });
    }
})

module.exports = app;
