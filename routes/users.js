const express = require('express');
const router = express.Router();

//------------ Login Route ------------//
router.get('/login',(req,res)=>res.send("Login"));

//------------ Register Route ------------//
router.get('/register',(req,res)=>res.send("Register"));

module.exports = router;