const floatJs = require("../lib/index.js");

function testPlus(n1, n2, value) {
  console.log(`plus(${n1}, ${n2}) == ${value} ? ${floatJs.plus(n1, n2) == value}`);
}

testPlus(0.1, 0.2, 0.3);
testPlus(0.3, -0.1, 0.2);
testPlus(-0.2, -0.1, -0.3);
testPlus(2.3, -3.1, -0.8);
testPlus(0.4, 0.9, 1.3);
testPlus(3.1, -2.3, 0.8);
testPlus(-9.4, -7.9, -17.3);
testPlus(3.1, -3.3, -0.2);
testPlus(3.3, -3.3, 0);
testPlus(3.5, -3.3, 0.2);
testPlus(0, 0, 0);
testPlus(0, 0.3, 0.3);
testPlus(0.1, 0.22, 0.32);
testPlus(0.1, 0.22222, 0.32222);
testPlus(12121.11, 0.22222, 12121.33222);

function testMinus(n1, n2, value) {
  console.log(`minus(${n1}, ${n2}) == ${value} ? ${floatJs.minus(n1, n2) == value}`);
}

testMinus(0.3, 0.1, 0.2);
testMinus(0.2, -0.1, 0.3);

function testRide(n1, n2, value) {
  console.log(`ride(${n1}, ${n2}) == ${value} ? ${floatJs.ride(n1, n2) == value}`);
}
testRide(0.631, 10, 6.31);
testRide(0.631, -10, -6.31);
testRide(-0.631, 10, -6.31);
testRide(0.631, 0, 0);

function testSum(arr, value) {
  console.log(`sum(${JSON.stringify(arr)}) == ${value} ? ${floatJs.sum(arr) == value}`);
}

testSum([0.1, 0.2], 0.3);
testSum([0.1, 0.2, 0.3], 0.6);
testSum([0.1, 0.22], 0.32);
testSum([0.1, 0.2, 0.32342], 0.62342);

console.log(floatJs.sum([0.1, 0.2, 0.32]));
console.log(floatJs.plus(0.1, 0.32));
