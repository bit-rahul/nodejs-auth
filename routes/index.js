const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>res.send("Welcome to NodeJS-Auth app!"));

module.exports = router;