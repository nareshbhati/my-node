const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    
    var a;
    a = demo();
    if(1)//a == 1)
    {
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<body><form action="message" method="POST"><input type="text" name="message"><button type="submit">Send2</button></form></body>');	
        res.write('</html>');
        return res.end();
    }
})

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function demo() {
    console.log('Taking a break...');
    await sleep(5000);
    console.log('Two seconds later, showing sleep in a loop...');
  
    // Sleep in loop
    /*for (let i = 0; i < 5; i++) {
      if (i === 3)
        await sleep(2000);
      console.log(i);
    }*/
    /*res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<body><form action="message" method="POST"><input type="text" name="message"><button type="submit">Send2</button></form></body>');	
    res.write('</html>');
    return res.end();*/
    return 1;
  }

server.listen('30001');
