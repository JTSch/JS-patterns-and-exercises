//вывод последнего элемента массива
var goods = ["Яблоко", "Груша", "Слива"];
var elem = goods.length - 1;
alert( goods[elem] );

// методы для массивов

var styles = ["Джаз", "Блюз"];
styles.push("Рок-н-Ролл");
styles[styles.length - 2] = "Классика";
alert( styles.shift() );
styles.unshift("Рэп", "Рэгги");

// случайный элемент из массива
var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
var rand = Math.floor(Math.random() * arr.length); рандомное целое
alert( arr[rand] );

// запрашиваемое число добавляется в массив, кроме NuN, отмены и т.д. и выводит сумму чисел
var arr = [];
while (true) {
var item = +prompt("введите число", 0);
if (!item) break; /* также можно записать: if (value === "" || value === null || isNaN(value)) break; */
arr.push(item);
}
var sum = 0;
for (var i = 0; i < arr.length; i++) {
sum += arr[i];
}
alert(sum);

// поиск элемента в массиве и возвращение его номера. или -1
var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
function find(arr, value) {

for (var i = 0; i < arr.length; i++) {
if (arr[i] === value) return i;
}
return -1;
} 
//мой вариант:
function find(arr, value) {
String(arr);
return arr.indexOf(value);
}

// фильтр диапазона массива - ошибка! возвращает только результат математического сравнения
var arr = [5, 7, 3, 2, 8];
var arrNew = [];
function filterRange(arr, a, b) {
for (i = 0; i < arr.length; i++) {
if (a === arr[i]) {
a = arr[i];
arrNew.push(a);

//  мой вариант: сравнение позиций
        // с push
function filterRange(arr, a, b) {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    if ((arr.indexOf(arr[i]) >= arr.indexOf(a)) && (arr.indexOf(arr[i]) <= arr.indexOf(b))) {
      result.push(arr[i]);
    } else if ((arr.indexOf(arr[i]) <= arr.indexOf(a)) && (arr.indexOf(arr[i]) >= arr.indexOf(b))) {
  result.push(arr[i]);
    }
  }
return result;
}
var arr = [5, 4, 3, 8, 0];

filterRange(arr, 8, 4);

[4, 3, 8]

    //со splice
var arr = [5, 7, 3, 2, 8];
var arrNew = [];
function filterRange(arr, a, b) {
for (i = 0; i < arr.length; i++) {
if (a === arr[i]) {
a = arr[i];
}
if (b === arr[i]) {
b = arr[i];
}
}
var arrNew = arr.splice(arr.indexOf(a),(arr.indexOf(b) + 1));
return (arrNew);
}
filterRange(arr, 5, 3)
[5, 7, 3]
//сортировка массива .sort(fn)
[1, -2, 15, 2, 0, 8].sort(function(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;	
});
[-2, 0, 1, 2, 8, 15]
// сортировка в обратном порядке
[1, -2, 15, 2, 0, 8].sort(function(a, b) {
  if (a < b) return 1;
  if (a > b) return -1;	
});
[15, 8, 2, 1, 0, -2]

//более краткий способ записи
[1, -2, 15, 2, 0, 8].sort(function(a, b) {
    return a - b;
});
[-2, 0, 1, 2, 8, 15]

//добавить класс в строку
function addClass(obj, cls) {
  var classes = obj.className ? obj.className.split(' ') : [];

  for (var i = 0; i < classes.length; i++) {
    if (classes[i] == cls) return; // класс уже есть
  }

  classes.push(cls); // добавить

  obj.className = classes.join(' '); // и обновить свойство
}

var obj = {
  className: 'open menu'
};

//удалить класс из объекта
function removeClass(obj, cls) {" ");

  for (var i = 0; i < classes.length; i++) {
    if (classes[i] == cls) {
      classes.splice(classes.indexOf(cls), 1); // classes.indexOf(cls) или i 
      i--; // (проходит массив еще раз, чтобы найти повторные)
    }
  }
  obj.className = classes.join(' ');

}

var obj = {
  className: 'open menu menu'

//BBQ-case to CamelCase

function camelize(string) {
  var arr = string.split("-");
  for (var i = 1; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1); 
  }
  return arr.join("");
}
camelize("camel-case")

//сортировка объектов, являющихся частью массива, по ключу age:
var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [ vasya , masha , vovochka ];


people.sort(compareAge);
 
function compareAge(personA, personB) {
  return personA.age - personB.age;
}

//выведение массива, содержащего длины строк

var arr = ["Есть", "жизнь", "на", "Марсе"];

var arrLength = arr.map(function(arrItem)) {
  return arrItem.length;
}

alert(arrLength);

//выведение в массив промежуточных результатов суммирования
var arr = [1, 2, 3, 4, 5];

function getSums(arr) {
var newArr = []; 
if (!arr.length) return newArr;

var result = arr.reduce(function(sum, current) {
arrNew.push(sum);
return sum + current;
});
return newArr.push(result); 
}

 
