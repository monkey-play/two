const assert = require("assert");
const two = require("../two");

describe("return number", () => {
  it("test passed", () => {
    assert.equal(2, two());
  });
  it("Two should not out not two.", () => {
    assert.notEqual(3, two());
  });
  it("test passed", () => {
    assert.equal(1024, two.power(10));
  });
  it("test passed", () => {
    assert.equal(2, two.power());
  });
  it("test passed", () => {
    assert.equal(1, two.square());
  });
  it("test passed", () => {
    assert.equal(2, two.square(4));
  });
  it("test passed", () => {
    assert.equal(4, two.square(16));
  });
  it("test passed", () => {
    assert.equal(10, two.square(100));
  });
  it("test passed", () => {
    assert.equal(1.4142135623730951, two.square(2));
  });
  it("test passed", () => {
    assert.equal(-2, two.negative(2));
  });
  it("test passed", () => {
    assert.equal(10, two.base(2));
  });
  it("test passed", () => {
    assert.equal(2, two.base(8));
  });
  it("test passed", () => {
    assert.equal(10, two.baseOf(2));
  });
  it("test passed", () => {
    assert.equal(1000, two.baseOf(8));
  });
  it("test passed", () => {
    assert.equal(1001, two.baseOf(9));
  });
  it("test passed", () => {
    assert.equal(1010, two.baseOf(10));
  });
});

describe("return string", () => {
  it("test passed", () => {
    assert.equal("²", two.upHigh());
  });
  it("test passed", () => {
    assert.equal("₂", two.downLow());
  });
  it("test passed", () => {
    assert.equal("II", two.roman());
  });
  it("test passed", () => {
    assert.equal("二", two.chinese());
  });
  it("test passed", () => {
    assert.equal("èr", two.chinese("pinyin"));
  });
  it("test passed", () => {
    assert.equal("贰", two.chinese("financial"));
  });
});

describe("return unicode", function () {
  it("It should be return ✌️", function () {
    assert.equal("✌️", two.peace());
  });
  it("It should be return ✌️", function () {
    assert.equal("✌️", two.victory());
  });
  it("It should be return 👀", function () {
    assert.equal("👀", two.eyes());
  });
});
