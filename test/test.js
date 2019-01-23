const assert = require("assert");
const two = require("../two");

describe("return number", () => {
  it("test passed", () => {
    assert.equal(2, two());
  });
  it("test passed", () => {
    assert.equal(2, two.valueOf());
  });
  it("Two should not equal.", () => {
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
    assert.equal(01, two.baseOf());
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
    assert.equal("Ⅱ", two.roman());
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
  it("test passed", () => {
    assert.equal("TWO", two.upperCase());
  });
});

describe("return unicode", () => {
  it("It should be return ✌️", () => {
    assert.equal("✌️", two.peace());
  });
  it("It should be return ✌️", () => {
    assert.equal("✌️", two.victory());
  });
  it("It should be return 👀", () => {
    assert.equal("👀", two.eyes());
  });
  it("It should be return 🕑", () => {
    assert.equal("🕑", two.oclock());
  });
  it("It should be return 🛌", () => {
    assert.equal("🛌", two.oclockStatus());
  });
  it("It should be return 🛌", () => {
    assert.equal("🛌", two.oclockStatus("am"));
  });
  it("It should be return 👨‍💻", () => {
    assert.equal("👨‍💻", two.oclockStatus("pm"));
  });
});

describe("compare", () => {
  it("return bigger", () => {
    assert(2, two.bigger(1, 2));
  });
  it("return bigger", () => {
    assert(10, two.bigger(10, 5));
  });
  it("return smaller", () => {
    assert(1, two.bigger(1, 2));
  });
  it("return smaller", () => {
    assert(5, two.bigger(10, 5));
  });
});

describe("calculate", () => {
  it("return add result", () => {
    assert(3, two.add(1, 2));
  });
  it("return add result", () => {
    assert(3, two.add(1));
  });
  it("return subtract result", () => {
    assert(5, two.subtract(10, 5));
  });
  it("return subtract result", () => {
    assert(8, two.subtract(10));
  });
  it("return subtract result", () => {
    assert(-1, two.subtract(1, 2));
  });
  it("return subtract result", () => {
    assert(-1, two.subtract(1));
  });
  it("return multiply result", () => {
    assert(2, two.times());
  });
  it("return multiply result", () => {
    assert(10, two.times(5));
  });
  it("return divide result", () => {
    assert(2.5, two.divide(5));
  });
  it("return divide result", () => {
    assert(1, two.divide(2));
  });
  it("return divide result", () => {
    assert(0.5, two.divide());
  });
});
