const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var {Staff} = require('../models/staff.js');





module.exports = {

// action to localhost : 3000/staff Get All Staff
GetAllStaff: (req,res)=>{
    Staff.find((err,docs)=>{
        if(!err){res.send(docs);}
        else{ console.log('Errore in Retriving Staff : '+JSON.stringify(err,undefined,2));}

    });

},

// Action to get an Staff By Id
GetStattById: (req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given Id ');

    Staff.findById(req.params.id,(err,doc)=>{
        if(!err){res.send(doc);}
        else{ console.log('Errore in Retriving Staff : '+JSON.stringify(err,undefined,2));}
    });
},

// Action to register Staff
PostRegister: (req,res)=>{
    var staffemp = new Staff({
        name : req.body.name,
        status : req.body.status,
        age: req.body.age,
        workArea : req.body.workArea,
        address :req.body.address,
        joinDate : req.body.joinDate,
        phoneNumber : req.body.phoneNumber,
        image: req.file.path,
    });
    staffemp.save((err,docs)=>{
        if(!err){res.send(docs);}
        else{ console.log('Errore in Staff saving Data : '+JSON.stringify(err,undefined,2));}

    });
},

// action to Edit Staff By Id
PutEditStaffById: (req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given Id ');

    let staffId = req.params.id;

    if (req.file !== undefined) {
       
        // Collect staff parameters from request.  
            staffParams = {
                name : req.body.name,
                status : req.body.status,
                age: req.body.age,
                workArea : req.body.workArea,
                address :req.body.address,
                joinDate : req.body.joinDate,
                phoneNumber : req.body.phoneNumber,
                image: req.file.path,};}else { // if there its not a image file - not save image
      
              
                // Collect staff parameters from request.  
                    staffParams = {
                        name : req.body.name,
                        status : req.body.status,
                        age: req.body.age,
                        workArea : req.body.workArea,
                        address :req.body.address,
                        joinDate : req.body.joinDate,
                        phoneNumber : req.body.phoneNumber,
                      
                    
                      }}

    // Use findByIdAndUpdate to locate a staff by ID and update the document record in one command.    
    Staff.findByIdAndUpdate(staffId, {
        // This method takes an ID followed by parameters you’d like to replace for that document
        //  by using the $set command    
            $set: staffParams
          })
            .then(staff => {  res.send(staff);}) // send res
            .catch(error => {
              console.log(`Error updating staff by ID: ${error.message}`);
           
            });},

// Action to delete an Staff by Id
DeleteStaffById: (req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given Id ');

    Staff.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err){res.send(doc);}
        else{ console.log('Errore in Delete Staff : '+JSON.stringify(err,undefined,2));}
    });
},

}