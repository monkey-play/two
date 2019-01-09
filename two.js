(function () {
  let two = function() { return 2; };
  
  two.upHigh = function() { return "²"; }
  two.downLow = function() { return "₂"; }
  two.roman = function() { return "II"; }
  
  two.chinese = function(type) {
    switch (type) {
      case "pinyin": return "èr";
      case "financial": return "贰";
      default: return "二";
    }
  } 

  two.power = function(number) {
    return Math.pow(2, number);
  }

  if(typeof module !== 'undefined' && module.exports) {
    module.exports = two;
  } else if (typeof define === 'function' && define.amd){
    define(two);
  } else if (window) {
    window.two = two;
  }
}());
