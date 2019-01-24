# two

[![codecov](https://codecov.io/gh/monkey-play/two/branch/master/graph/badge.svg)](https://codecov.io/gh/monkey-play/two)

Everything about "2"!

万物皆2！

# Installation（安装）
  
  **WIP（施工中）**

# Quick start（快速开始）

  **WIP（施工中）**

### What you can do with it? （取你所需）

##### Basic 2（基础数字2）

```
two(); // 2
two.valueOf(); // 2
```

##### Addition（加法）

```
two() + two(); // 2 + 2 = 4
two.add(1); // 1 + 2 = 3
two.add(2); // 2 + 2 = 4
two.add(3); // 3 + 2 = 5
two.add(10, 5); // 10 + 5 = 15
```

##### Subtraction（减法）

```
two() - two(); // 2 - 2 = 0
two.subtract(1); // 1 - 2 = -1
two.subtract(2); // 2 - 2 = 0
two.subtract(3); // 3 - 2 = 1
two.subtract(10, 5); // 10 - 5 = 5
```

##### Multiplication（乘法）

```
two() * two(); // 2 * 2 = 4
two.times(1); // 1 * 2 = 2
two.times(2); // 2 * 2 = 4
two.times(3); // 3 * 2 = 6
two.times(10, 5); // 10 * 5 = 50
```

##### Multiplication（除法）

```
two() / two(); // 2 / 2 = 1
two.divide(1); // 1 / 2 = 0.5
two.divide(2); // 2 / 2 = 1
two.divide(3); // 3 / 2 = 1.5
two.divide(10, 5); // 10 / 5 = 2
```

##### Power（幂运算）

```
two.power(); // 2
two.power(3); // 8
two.power(10); // 1024
```

##### Square（开平方）

```
two.square(); // 1
two.square(4); // 2
two.square(1024); // 32
```

##### Different radices（基数）

```
two.base(2); // 10
two.base(8); // 2
two.base(10); // 2
two.base(16); // 2
# the base is 2（二进制）
two.baseOf(); // 01  # default 1
two.baseOf(10); // 1010
```

##### Different sorts of 2（花式输出2）

```
two.upHigh(); // ²
two.downLow(); // ₂
two.roman(); // Ⅱ
two.chinese(); // 二
two.chinese("pinyin"); // èr
two.chinese("financial"); // 贰
two.japanese(); // 二
two.english(); // two
two.upperCase(); // TWO
two.repeat();  // 2
two.repeat(5); // 22222
two.repeat(10); // 2222222222
```

##### Date（日期相关）

```
two.dayOfWeek(); // 周二
two.dayOfWeek("EN"); // Monday
two.monthOfYear(); // 二月
two.monthOfYear("EN"); // February
```

##### Unicode emoji（emoji表情）

```
two.peace(); // ✌️
two.victory(); // ✌️
two.eyes(); // 👀
two.oclock(); // 🕑
two.oclockStatus(); // 🛌 # default 2:00 am, you should be sleeping in the bed.（默认是凌晨两点，你应该在睡觉。）
two.oclockStatus("PM"); // 👨‍💻 # 2:00 pm, you shoulding be coding.（传参表示下午两点，你居然不在写代码？！）
two.oclockStatus("pm"); // 👨‍💻
```

##### Assert（判断）

```
two.isTwo();  // true
two.isTwo(2); // true
two.isTwo(3); // false
```

##### Compare（比较）

```
two.bigger(1, 2); // 2
two.smaller(1, 2); // 1
```

# Development（开发）
### The code（代码）

所有方法与逻辑均在`./two.js`中实现。

### Run tests（执行测试）

- Firstly（首先执行）

```
npm ci
```
OR
```
npm install
```
安装`mocha`以及相关依赖。

- Secondly（然后执行）

```
npm test
```

# License

**MIT**
