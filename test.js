assert = require('assert')
lcs = require('./index')

it('should find the longest common string', function() {
  var string1 = [1,2,3,4,5,6,7,8]
  var string2 = [21,22,23,4,5,6,77,78,7,8]
  var expects = {startString1: 3, startString2: 3, length: 3}
  var result = lcs(string1, string2)
  assert.equal(result.startString1, expects.startString1) 
  assert.equal(result.startString2, expects.startString2)
  assert.equal(result.length, expects.length)
})

