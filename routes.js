const fs    =   require('fs');

const reqHandler   =  (req,res)=>{
        if(req.url === '/'){
            res.setHeader('Content-Type','text/html');
            res.write('<html>');
            res.write('<body><form action="message" method="POST"><input type="text" name="message"><button type="submit">Send3</button></form></body>');	
            res.write('</html>');
            return res.end();
        }
        if(req.url ==='/message' && req.method=='POST'){
            const body = [];
            req.on('data',(chunk)=>{
                body.push(chunk);
                console.log(chunk);
                console.log(body);
            })
            req.on('end',()=>{
                const parserBody = Buffer.concat(body).toString();
                console.log(parserBody);
                console.log(body);
                fs.writeFileSync('message.txt',parserBody.split('=')[1]);
                res.statusCode  = '302';
                res.setHeader('Location','/');
                return res.end();
            })
            
           
        }
        /*res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<body>Hi Naresh Here</body>');	
        res.write('</html>');*/
        
}

module.exports  = reqHandler;