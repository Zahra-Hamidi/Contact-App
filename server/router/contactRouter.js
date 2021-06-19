const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Contact = require('../model/contact');
const data = require('../data')

router.get('/',async(req,res)=>{
    const contactCraeted = await Contact.insertMany(data.contacts);
    res.send(contactCraeted);
});

router.post('/add',async(req,res)=>{
    const contact = new Contact({
        name:req.body.name,
        email:req.body.email
    });
    const saveContact = await contact.save();
    res.send(saveContact);
});

router.post('/edit/:id',async(req,res)=>{
    let editContact =await Contact.findByIdAndUpdate(req.params.id,{
                name:req.body.name,
                email:req.body.email
    })
    res.send({message:"this contact is update"})
});

router.get('/all',async(req,res)=>{
    const AllContact = await Contact.find({});
    res.send(AllContact);
});

router.delete('/delete/:id',async(req,res)=>{
    const deleteContact = await Contact.findByIdAndDelete(req.params.id);
    try {
        res.send({message:"this contact is remove"})
    } catch (error) {
        console.log(error);
    }
        
})

module.exports = router;