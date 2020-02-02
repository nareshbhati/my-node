const express = require('express');

const routes = express.Router();

routes.get('/',(req,res,next)=>{
    console.log("I m second middleware Path '/'");
    res.send('<h1>I m second middleware Path "/"</h1>');
})

module.exports  =   routes;