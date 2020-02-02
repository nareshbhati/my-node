//const http      = require('http');

//const routes    =   require('./routes');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:false}));

const adminRoutes   =   require('./routes/admin');
const shopRoutes   =   require('./routes/shop');


app.use(adminRoutes);
app.use(shopRoutes);

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page Not Found</h1>');
})

//const server = http.createServer(app);

app.listen('3000');
