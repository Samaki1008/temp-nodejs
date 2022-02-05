const fs = require('fs');

const syn = fs.readFileSync('./Resource/test.txt', 'utf-8');
console.log(syn);
console.log('This is after the file reading');


fs.readFile('./Resource/test.txt', 'utf-8',(err, data)=>{
	console.log(data);	

});
console.log('This is after the data');
