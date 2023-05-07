const express = require('express')
const Product = require('../models/product')
const router = express.Router()

router.post('/new', async (req, res) => {
    try{
        const product = new Product(req.body)
        await product.save()
        res.status(201).json({success: true, data: product})
    }catch(e){
        res.status(400).json({success: false, message: e})
    }
})

router.get('/:id', async (req, res) => {
    try{
        const product = await Product.findById(req.params.id)
        res.status(200).json({success: true, data: product})
    }catch(e){
        res.status(404).json({success: false, message: e})
    }
})

module.exports = router