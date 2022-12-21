"use strict";
const express = require("express");
let router = express.Router();
router.get('/', function (req, res) {
    
	// TODO: set the content type of output to be plain HTML
	
    res.status(200).send("This is a simple application receiving mytext");
});
module.exports=router;