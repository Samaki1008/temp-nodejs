// const http = require('http');
// const fs = require('fs');


// const server = http.createServer((request, response)=>{
//    fs.readFile('./Resource/test.txt', (err, data)=>{
//       response.end(data)

//    } );
   
// });

// server.listen(5000);

// const server = http.createServer((request, response)=>{
//    const stream = fs.createReadStream('./Resource/test.txt')
//    stream.pipe(response);
      

   
// });

// server.listen(5000);


const http = require('http')
const fs = require('fs')

const server = http.createServer((request, response)=>{
   const stream = fs.createReadStream('./Resource/test.txt')
         stream.pipe(response);      
 


});
server.listen(8000);





// http.createServer(function (request, response) {  
//    // Send the HTTP header   
//    // HTTP Status: 200 : OK  
//    // Content Type: text/plain  
//    response.writeHead(200, {'Content-Type': 'text/plain'});  
//    // Send the response body as "Hello World"  
//    response.end('Hello World\n');  
// }).listen(8081);  
// // Console will print the message  
// console.log('Server running at http://127.0.0.1:8081/');  