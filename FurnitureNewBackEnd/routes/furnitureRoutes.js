"use strict";

const 
 // use the Router module in Express.js
  router = require("express").Router(),
  FurnitureController = require("../controller/furnitureController");
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



// Adding routes for each page and request type  

// route to get all Staff
router.get('/', FurnitureController.GetAllFurniture);

// route to get a furniture by Id

router.get('/:id', FurnitureController.GetFurnitureById);

// route to register a Furniture

router.post('/',upload.single("image"), FurnitureController.PostRegisterFurniture);

// route to Edit a Furniture by Id

router.put('/:id',upload.single("image"), FurnitureController.PutEditFurnitureById);

// route to delete a furniture by Id

router.delete('/:id', FurnitureController.DeleteFurnitureById);

module.exports = router;