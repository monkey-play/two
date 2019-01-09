const assert = require("assert");
const two = require("./");


assert.equal(2, two(),"Two should out two.");
assert.notEqual(3, two(),"Two should not out not two.");

assert.equal("²", two.upHigh(),"Two should out two.");
assert.equal("₂", two.downLow(),"Two should out two.");
assert.equal("II", two.roman(),"Two should out two.");

assert.equal("二", two.chinese(), "Two should out two.");
assert.equal("èr", two.chinese("pinyin"), "Two should out two.");
assert.equal("贰", two.chinese("financial"), "Two should out two.");

assert.equal(1024, two.power(10), "Two should out two.");
