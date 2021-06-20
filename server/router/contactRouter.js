const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Contact = require('../model/contact');



router.post('/add',async(req,res)=>{
    const contact = new Contact({
        name:req.body.name,
        email:req.body.email
    });
    const saveContact = await contact.save();
    res.send(saveContact);
});

router.post('/edit/:id',async(req,res)=>{
    let editContact =await Contact.updateOne({_id:req.params.id},{
        name:req.body.name,
        email:req.body.email
    }).then((contact)=>{
            res.send(contact) 
    })
    //res.send({message:"this contact is update"})
});

router.get('/',async(req,res)=>{
    const AllContact = await Contact.find({});
    res.send(AllContact);
});

router.delete('/delete/:id',async(req,res)=>{
    const deleteContact = await Contact.findByIdAndDelete({_id:req.params.id});
    try {
        res.send({message:"this contact is remove"})
    } catch (error) {
        console.log(error);
    }
        
})

module.exports = router;