const express = require('express')
const User = require('../models/user')

const router = express.Router()

router.get('/:id', async (req, res) => {
    try{
        const user = await User.findById(req.params.id)
        res.send(user)
    }catch(e){
        res.status(400).json({success:  false, message: e})
    }
})

router.post('/new', async (req, res) => {
    try{
        const user = new User(req.body)
        await user.save()
        res.status(201).json({success: true, data: user})
    }catch(e){
        res.status(401).json({success: false, message: e})
    }
})

// login route
router.post('/login', async (req, res) => {
    try{
        
        const user = await User.findOne({email: req.body.email})
        if(user.password !== req.body.password){
            return res.status(400).json({success: false, message: 'Username of password did not match'})
        }
        res.status(200).json({success: true, data: user})
    }catch(e){
        res.status(400).json({success: false, message: e})
    }
})

router.post('/logout', async (req, res) => {
    res.redirect('/login')
})

module.exports = router