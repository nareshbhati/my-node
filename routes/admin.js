const express   =   require('express');

const router    =   express.Router();

router.get('/add-product',(req,res,next)=>{
    console.log("Ï m first middleware");
    res.send('<form action="products" method="POST"><input type="text" name="title"/><button type="submit">Add Product</button></form>');
})

router.post('/products',(req,res,next)=>{
    console.log("data",req.body);
    console.log(req.body.title);
    res.redirect('/');
})

module.exports= router;