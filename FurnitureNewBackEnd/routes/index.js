"use strict";

const 
  // use the Router module in Express.js
  // This line creates a Router object that offers its own middleware
  // and routing alongside the Express.js app object.
  router = require("express").Router(),
  // use system routes
  FurnitureRoutes = require ("./furnitureRoutes"),
  StaffRoutes = require("./staffRoutes");

// Adding routes for each page and request type
// routes for Staff module
router.use("/staff", StaffRoutes);

// routes for furniture Module

router.use("/furniture", FurnitureRoutes);


module.exports = router;