var Immutable = require('immutable')
var diff = require('immutablediff')

var test1 = require('./1.json')
var test2 = require('./2.json')
var map1 = Immutable.fromJS(test1)
var map2 = Immutable.fromJS(test2)

console.log(diff(map1, map2).toJS())
console.log(diff(map2, map1).toJS())