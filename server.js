const http = require('http');

const server = http.createServer((request, response)=>{
   if(request.url==='/'){
      response.write('Welcome to the website');
   }
   //console.log(request);
   
   if(request.url==='/above'){
      response.write('Welcome above');
   }
   response.end();

});

server.listen(5000);









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