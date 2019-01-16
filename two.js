(function () {
  let two = function () { return 2; };

  two.upHigh = function () { return "²"; }
  two.downLow = function () { return "₂"; }
  two.roman = function () { return "II"; }
  two.chinese = function (type) {
    switch (type) {
      case "pinyin": return "èr";
      case "financial": return "贰";
      default: return "二";
    }
  }
  two.japanese = function () { return '二'; };

  two.power = function (number = 1) {
    return Math.pow(two(), number);
  }

  two.base = function (number) {
    return two().toString(number);
  }

  two.baseOf = function (number = 1) {
    return number.toString(two());
  }

  two.negative = function () { return -two(); };

  // unicode emoji
  two.peace = function () { return "✌️"; }
  two.victory = function () { return "✌️"; }
  two.eyes = function () { return "👀"; }

  two.cny = function () { return '￥2'; }
  two.dollor = function () { return '$2'; }
  two.jpy = function () { return '￥2E'; }

  two.square = function (number = 1) {
    return Math.sqrt(number);
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = two;
  } else if (typeof define === 'function' && define.amd) {
    define(two);
  } else if (window) {
    window.two = two;
  }
}());
