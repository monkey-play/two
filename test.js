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
assert.equal(2, two.power(), "Two should out two.");

assert.equal(1, two.square(), "Two should out two.");
assert.equal(2, two.square(4), "Two should out two.");
assert.equal(4, two.square(16), "Two should out two.");
assert.equal(10, two.square(100), "Two should out two.");
assert.equal(1.4142135623730951, two.square(2), "Two should out two.");

assert.equal(-2, two.negative(2), "Two should out two.");
assert.equal(10, two.base(2), "Two should out two.");
assert.equal(2, two.base(8), "Two should out two.");
assert.equal(10, two.baseOf(2), "Two should out two.");
assert.equal(1000, two.baseOf(8), "Two should out two.");
assert.equal(1001, two.baseOf(9), "Two should out two.");
assert.equal(1010, two.baseOf(10), "Two should out two.");
