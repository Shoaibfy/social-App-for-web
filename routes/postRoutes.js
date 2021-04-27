const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Post = mongoose.model("Post")
const requireLogin = require("../middleWare/requiredLogin")


router.get('/allposts', requireLogin, (req, res) => {
    Post.find().populate("postedBy", "_id name email")
        .then(posts => {
            res.json({ posts })
        }).catch(err => {
            // res.json({ error: "No posts" })
            console.log(err)
        })
})


router.post('/createpost', requireLogin, (req, res) => {
    const { title, body, photo } = req.body
    console.log(title, body, photo)
    if (!title || !body || !photo) {
        return res.status(422).json({ error: "please enter title & body" })
    }
    req.user.password = undefined

    const post = new Post({
        title,
        body,
        photo,
        postedBy: req.user
    })
    post.save().then(result => {
        res.json({ post: result })
    }).catch(err => {
        console.log(err)
    })
})

router.get('/myposts', requireLogin, (req, res) => {
    Post.find({ postedBy: req.user._id })
        .populate("postedBy", "_id name")
        .then(mypost => {
            res.json({ mypost })
        })
        .catch(err => {
            console.log(err)
        })
})

module.exports = router