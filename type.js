var price = 100;
console.log(typeof price);

var price_01 = '100';
var price_02 = typeof(price_01);
console.log(price_02);

var affordable = true;
console.log(typeof affordable);

// sometimes the result shows too many digits in float number
var x = 0.1;
var y = 0.2;
var sum = x+y;
console.log(sum);

// you can fix it like this but the problem is this will return string as a result
sum = sum.toFixed(2);
console.log(sum);
console.log(typeof sum);

// To fix it you have convert it into float
sum = parseFloat(sum);
console.log(typeof sum);






