#Longest common substring
A simple implementation solving the [Longest common substring problem](http://en.wikipedia.org/wiki/Longest_common_substring_problem).

``` js
var lcs = require('longest-common-substring')
var string1 = [1,2,3,4,5,6,7,8]
var string2 = [21,22,23,4,5,6,77,78,7,8]
var result = longestCommonSubseq(string1, string2)
// returns:
{startString1: 3, startString2: 3, length: 3}
```
