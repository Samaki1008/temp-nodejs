// const name ='sammed'
// const os = require('os');
// console.log(os.platform())
// const http = require('http');

// console.log(name)

const _ = require('lodash');
const items = [1, [2,3,[4]]]
const newItem = _.flattenDeep(items)
console.log(newItem);