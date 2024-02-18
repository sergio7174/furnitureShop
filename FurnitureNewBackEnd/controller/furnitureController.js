const 
express = require('express'),
router = express.Router(),
ObjectId = require('mongoose').Types.ObjectId;


var {Furniture} = require('../models/furniture.js');

multer = require("multer"),

 fs = require("fs");

//const validateCreateAlbumInput = require("../validator/create-album");
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, "-") + file.originalname);
  }
});
const upload = multer({
  storage: storage,
  fileFilter: function(req, file, callback) {
    if (
      file.mimetype !== "image/png" &&
      file.mimetype !== "image/jpg" &&
      file.mimetype !== "image/jpeg"
    ) {
      return callback(new Error("Only images are allowed"));
    }
    callback(null, true);
  },
  limits: {
    fileSize: 1024 * 1024 * 5
  }
});

module.exports = {

// Action to get all furnitures localhost : 3000/furniture
GetAllFurniture: (req,res)=>{
    Furniture.find((err,docs)=>{
        if(!err)
        {console.log("docs: "+docs)
            //res.send(docs);
            res.json(docs)
         }
        else{ console.log('Errore in Retriving Furniture : '+JSON.stringify(err,undefined,2));}

    });

},

// action to get a furniture by Id
GetFurnitureById: (req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given Id ');

    Furniture.findById(req.params.id,(err,doc)=>{
        if(!err){res.send(doc);}
        else{ console.log('Errore in Retriving Furniture : '+JSON.stringify(err,undefined,2));}
    });
},

// Action to register a Furniture 
PostRegisterFurniture: (req,res)=>{

//  console.log("Estoy en furniturecontroller -line 64 - req.file.path: "+req.file.path)
    var furnitureemp = new Furniture({
        name : req.body.name,
        price : req.body.price,
        discount: req.body.discount,
        color : req.body.color,
        avalibleCount :req.body.avalibleCount,
        description : req.body.description,
        image: req.file.path
        //image: req.body.image,
    });

    furnitureemp.save((err,docs)=>{
        if(!err){res.send(docs);}
        else{ console.log('Errore in Furniture saving Data : '+JSON.stringify(err,undefined,2));}

    });
},

// action to Edit a Furniture By Id
PutEditFurnitureById: (req,res)=>{
   
  if(!ObjectId.isValid(req.params.id)){
    return res.status(400).send('No record with given Id ');}

     let furnitureId = req.params.id;
    // if there is a image file - sve it: image:req.file.path
     if (req.file !== undefined) {
     
  // Collect furniture parameters from request.  
      furnitureParams = {
        name : req.body.name,
        price : req.body.price,
        discount: req.body.discount,
        color : req.body.color,
        avalibleCount :req.body.avalibleCount,
        description : req.body.description,
        image: req.file.path};}else { // if there its not a image file - not save image

        
          // Collect furniture parameters from request.  
              furnitureParams = {
                name : req.body.name,
                price : req.body.price,
                discount: req.body.discount,
                color : req.body.color,
                avalibleCount :req.body.avalibleCount,
                description : req.body.description,
              
                }}

  // Use findByIdAndUpdate to locate a furniture by ID and update the document record in one command.    
  Furniture.findByIdAndUpdate(furnitureId, {
  // This method takes an ID followed by parameters you’d like to replace for that document
  //  by using the $set command    
      $set: furnitureParams
    })
      .then(furniture => {  res.send(furniture);}) // send res
      .catch(error => {
        console.log(`Error updating furniture by ID: ${error.message}`);
     
      });},

      // Action to delete a furniture  by Id
      DeleteFurnitureById: (req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given Id ');

    Furniture.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err){res.send(doc);}
        else{ console.log('Errore in Delete Furniture : '+JSON.stringify(err,undefined,2));}
    });
},

}