const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { JWT_SECRET } = require("../config/keys")
const requireLogin = require("../middleWare/requiredLogin")




router.post('/signup', (req, res) => {
    const { name, email, password } = req.body
    if (!email || !name || !password) {
        return res.status(422).json({ error: "please add all the fields" })
    }
    User.findOne({ email }).then((savedUser) => {
        if (savedUser) {
            return res.status(422).json({ error: "user already exists with that email id" })
        }
        bcrypt.hash(password, 12)
            .then(hashedPassword => {
                const user = new User({
                    name, email, password: hashedPassword
                })
                user.save()
                    .then((user) => {
                        res.json({ message: "user added successfully" })
                    })
                    .catch(err => {
                        res.json({ error: "please add all fields" })
                    })
            })
    })
        .catch(err => {
            res.json({ error: "please add all the fields" })
        })
})

router.post('/signin', (req, res) => {
    const { email, password } = req.body
    if (!email, !password) {
        return res.status(422).json({ error: "invalid email or password" })
    }
    User.findOne({ email: email })
        .then(savedUser => {
            if (!savedUser) {
                return res.status(422).json({ error: "invalid email or password" })
            }
            bcrypt.compare(password, savedUser.password)
                .then(doMatch => {
                    if (doMatch) {
                        // return res.json({ message: "Successfully Signed In" })
                        const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET)
                        const { _id, name, email } = savedUser
                        res.json({ token: token, user: { _id, name, email } })
                    } else {
                        return res.status(422).json({ error: "invalid email or password" })
                    }
                }).catch(err => {
                    console.log(err)
                })
        })
})

module.exports = router