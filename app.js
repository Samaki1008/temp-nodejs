// const name ='sammed'
// const os = require('os');
// console.log(os.platform())
// const http = require('http');

// console.log(name)

// const _ = require('lodash');
// const items = [1, [2,3,[4]]]
// const newItem = _.flattenDeep(items)
// console.log(newItem);
// console.log("hello sammed");

// const http = require('http')
// const server = http.createServer((request, response)=>{

// 	response.writeHead(200, {'content-type':'text/html'})
// 	response.write('<h1> Hello world</h1>')
// 	response.end()
	
// });
// server.listen(5000)

//--------------------------------------------------------------------------------------

// const express = require('express');
// const app = express()
// const path = require('path')


// //setup static and middleware
// app.use(express.static('./public'))
// app.get('/', (req, res)=>{
// 	res.sendFile(path.resolve(__dirname, './public/index.html'))

// //one way to send render the html data

// })


// app.all('*', (req, res)=>{
// 	res.send('The file does not exists')
// })
// app.listen(5000, ()=>{
// 	console.log("server is listining on 5000")
// })
//---------------------------------------------------------------------------------------
const express = require('express');
const app = express()

const products = require('./data.js')

app.get('/', (req, res)=>{
	res.send('<h1>Home Page</h1><a href="/api/products">Click here for the products</a>')

})

app.get('/api/products', (req, res)=>{
	res.send(products)
})

app.listen(5000, ()=>{
	console.log('Server is at 5000..')
})