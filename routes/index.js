/*
    File: index.js
    By:   Kevin Strawn
    Desc: Base page, maybe to become the 'About' tab
    Date: 7/7/19
*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('', { title: 'Welcome to the Works of Kevin Strawn' });
});

module.exports = router;
