"use strict";



const 
 // use the Router module in Express.js
  router = require("express").Router(),
  StaffController = require("../controller/staffController"),
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
router.get('/', StaffController.GetAllStaff);

// route to get an staff by Id
router.get('/:id', StaffController.GetStattById);

// route to register an Staff
router.post('/',upload.single("image"),StaffController.PostRegister);

// route to edit an Staff By Id

router.put('/:id',upload.single("image"),StaffController.PutEditStaffById);

// route to delete an staff by Id

router.delete('/:id', StaffController.DeleteStaffById);

module.exports = router;