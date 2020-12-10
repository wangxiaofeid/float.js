"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.plus = plus;
exports.minus = minus;
exports.ride = ride;
exports.sum = sum;
function isFloat(num) {
  return (/^[0-9]+.[0-9]+$/.test(num.toString())
  );
}

function getDismantling(inputNum) {
  var left = 0,
      right = 0,
      length = 0,
      isMinus = inputNum < 0;
  var inputNumFormat = isMinus ? -inputNum : inputNum;
  if (isFloat(inputNumFormat)) {
    var n1Str = inputNumFormat.toString().split(".");
    left = parseInt(n1Str[0]);
    right = parseInt(n1Str[1] || "0");
    length = n1Str[1] ? n1Str[1].length : 0;
  } else {
    left = inputNumFormat;
  }
  return {
    left: isMinus ? -left : left,
    right: isMinus ? -right : right,
    length: length
  };
}

function dismantle(n1, n2) {
  if (!(typeof n1 == "number" && typeof n2 == "number")) {
    throw new Error("The input parameter errors!");
  }

  var num1 = getDismantling(n1);
  var num2 = getDismantling(n2);

  if (num1.length > num2.length) {
    num2.right *= Math.pow(10, num1.length - num2.length);
  } else if (num1.length < num2.length) {
    num1.right *= Math.pow(10, num2.length - num1.length);
  }
  return {
    left1: num1.left,
    left2: num2.left,
    right1: num1.right,
    right2: num2.right,
    num: Math.max(num1.length, num2.length)
  };
}

function getFloat(num, length) {
  var radix = Math.pow(10, length);
  return parseFloat(parseInt(num / radix) + "." + num % radix);
}

/**
 * 四则运算：加
 * @param {number} n1
 * @param {number} n2
 */
function plus(n1, n2) {
  if (n1 === 0) {
    return n2;
  }
  if (n2 === 0) {
    return n1;
  }

  var _dismantle = dismantle(n1, n2),
      left1 = _dismantle.left1,
      left2 = _dismantle.left2,
      right1 = _dismantle.right1,
      right2 = _dismantle.right2,
      num = _dismantle.num;

  var left = left1 + left2,
      right = right1 + right2,
      radix = Math.pow(10, num);
  if (left >= 0 && right >= 0) {
    return parseFloat(left + Math.floor(right / radix) + "." + right % radix);
  } else if (left >= 0 && right < 0) {
    if (left == 0) {
      return parseFloat("-0." + -right);
    } else {
      return parseFloat(left - 1 + "." + (right + radix));
    }
  } else if (left < 0 && right < 0) {
    return parseFloat("-" + (-left + Math.floor(-right / radix)) + "." + -right % radix);
  } else if (left < 0 && right >= 0) {
    if (right == 0) {
      return left;
    } else {
      return parseFloat("" + (left < -1 ? "" : "-") + (left + 1) + "." + (radix - right));
    }
  }
}

/**
 * 四则运算：减
 * @param {number} n1
 * @param {number} n2
 */
function minus(n1, n2) {
  return plus(n1, -n2);
}

function ride(n1, n2) {
  var _dismantle2 = dismantle(n1, n2),
      left1 = _dismantle2.left1,
      left2 = _dismantle2.left2,
      right1 = _dismantle2.right1,
      right2 = _dismantle2.right2,
      num = _dismantle2.num;

  var l1 = Math.abs(left1),
      l2 = Math.abs(left2),
      r1 = Math.abs(right1),
      r2 = Math.abs(right2);

  var back = plus(plus(l1 * l2, getFloat(l1 * r2, num)), plus(getFloat(l2 * r1, num), getFloat(r1 * r2, num * num)));

  if (n1 < 0 && n2 > 0 || n1 > 0 && n2 < 0) {
    return -back;
  } else {
    return back;
  }
}

/**
 * 求和
 * @param {Array} arr
 *
 * @return {number}
 */
function sum(arr) {
  return arr.reduce(function (acc, cur) {
    return plus(acc, cur);
  }, 0);
}

exports.default = {
  plus: plus,
  minus: minus,
  ride: ride,
  sum: sum
};
//# sourceMappingURL=index.js.map