//оптимизация функции
function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm("А родители разрешили?");}
}

// вариант с ?
function checkAge(age) {
    return (age > 18) ? true : confirm("А родители разрешили?");
}
//вариант с ||
function checkAge(age) {
return (age > 18) || confirm("А родители разрешили?");
}

// возведение в степень с проверкой на целый инкремент > 1
var x = prompt("Введите x");
var y = prompt("Введите y");
    while ((y < 1) || ((y^0) !==y)) {
   y = +prompt("Введите целое число больше 1");
if ((y > 1) && ((y^0) === y)) break; 
} 
pow(x,y);
function pow(x,y) {
    var result = 1;
     for (var i = 0; i < y; i++) {
     result *= x;
     }
    return result; 
}
//рекурсия
function sumTo(x) {
if (x > 1) {
return x + sumTo(x-1);
} else {
return x;
}
}
//то же самое, но циклом
function sumTo(x) {
var result = 0;
for (var y = 1; y <= x; y++) {
result += y;
}
return result;
}
//факториал через рекурсию
function fact(n) {
if (n != 1) {
return n*fact(n - 1);
} else {
return n;
}
fact(5)
более кратко: 
function f(n) {
return (n !=1) ? n*fact(n-1) : n;
}
fact(5)



function pow(x,n) {
  var result = 1;

  for (var i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

var x = prompt("x?","");
var n = prompt("n?","");
if (n < 0) {
  alert('Степень ' + n + 'не поддерживается, введите целую степень, большую 0');
} else {
  alert( pow(x,n) );
}
