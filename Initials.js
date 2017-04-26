<!DOCTYPE html>
<html>

<body>
  <script>
    'use strict';
//СТРОКИ
//выводит строку с заглавной буквы
   var str = prompt("Введите строку", "");
   function ucFirst(str) {
     if (!str) str.toString();
     return str[0].toUpperCase() + str.slice(1);
   } 
   alert (ucFirst(str));

//находит в тексте спам-слова

   function checkSpam(str) {
     var lowerStr = str.toLowerCase();
    if (~lowerStr.indexOf("viagra") || ~lowerStr.indexOf("xxx")) return true;
    else  return false;
   } 
   alert( checkSpam("XXx"));

// выводит строку до определенного количества знаков и добавляет ...

   function truncate(str, maxlength) {
    /* более длинный вариант
    if (str.length > maxlength) return str.substr(0, maxlength) + "...";
    else  return str;*/
     return (str.length > maxlength) ? str.substr(0, maxlength) + "..." : str;
   } 
   
   alert( truncate("Вот, что мне хотелось бы сказать на эту тему:", 10));

//вычленяет из обозначения валюты число

 function extractCurrencyValue(str) {
      return +str.slice(1);
     }
   alert(extractCurrencyValue("$150"));

//ЧИСЛА

//возвращает дробную часть из числа с учетом отрицательных чисел
function getDecimal(num) {
  return (num - Math.round(num)).toFixed(1);
}
alert(getDecimal(-1.2));

//считает рубли с копейками, избегая неточных подсчетов (можно и не через функцию)
function cost(price1, price2) {
    alert( +(price1 + price2).toFixed(2) );
    }
    cost(0.1, 0.6);

//ОБЪЕКТЫ
var user = {}; /*user = {};*/
user.name = "Вася";
user.surname = "Петров";
user.name = "Сергей";
delete user.name;

var user = {
name: "Вася",
surname: "Петров",
name: "Сергей"
}

//перебор свойств объекта и определение наличия объектов
var schedule = {}; 
function isEmpty(obj) {
  var counter = 0;
  for (var key in obj) {
  return false;
  }
    return true;
   }
alert( isEmpty(schedule) );

schedule["8:30"] = "подъём";

alert( isEmpty(schedule) );

//выводит максимальное значение в свойствах

var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

var max = 0;
var maxName = "";
for (var name in salaries) {
  if (max < salaries[name]) {
    max = salaries[name];
    maxName = name;
  }
}

alert( maxName || "нет сотрудников" );

//проверяет на число и умножает значение свойства на 2
var menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function multiplyNumeric(obj) {
  for (var key in obj) {
    if (isNumeric(obj[key])) {
      obj[key] *= 2;
    }
  }
}

multiplyNumeric(menu);

alert( "menu width=" + menu.width + " height=" + menu.height + " title=" + menu.title );

</body>

</html>
