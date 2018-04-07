var number = 56287;
var sum = 0,
   res = [],
   sNumber = number.toString();

for (var i = 0; i < sNumber.length; i++) {
  if (sNumber[i] == '5') {
    res.push(sNumber[i].replace('5', '4'));
  } else {
    res.push(sNumber[i]);
  }
}
document.getElementById("res").innerHTML = res.join('');
