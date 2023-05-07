const express = require('express')
const Store = require('../models/store')
const User = require('../models/user')
const router = express.Router()

router.post('/new', async (req, res) => {
    try{
        const store = new Store(req.body)
        await store.save()
        res.status(201).json({success: true, data: store})
    }catch(e){
        res.status(400).json({success: false, message: e})
    }
})


router.get('/:id', async (req, res) => {
    try{
        const store = await Store.findById(req.params.id)
        res.status(200).json({success: true, data: store})
    }catch(e){
        res.status(400).json({success: false, message: e})
    }
})

module.exports = router