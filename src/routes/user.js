const express = require('express');
const { signup } = require('../controller/user');
const router = express.Router();



router.post('/signup',signup);

router.post('/signin', (req, res) => {
   
});

module.exports = router; 

//The HyperText Transfer Protocol (HTTP) 400 Bad Request response status code indicates that
// the server cannot or will not process the request due to something that is perceived to be a client error
// (for example, malformed request syntax,
// invalid request message framing, or deceptive request routing).

//The HTTP 201 Created success status response code indicates that the request has succeeded and has led to the creation of a resource.