// перебор свойст объекта и вывод результата в зависимости от наличия свойств
function isEmpty(obj) {

for (var key in obj) {
var count = 0;
count++;
}
return count ? false : true;
}
isEmpty(schedule)
//подсчет суммы всех элементов
var salaries = {};
for (var key in salaries) {
var total += salaries[key]; 
}
alert(total);

var salaries = {
"Вася": 100,
"Петя": 300,
"Даша": 250
};
//поиск максимального значения
var max = 0;
var maxName = "";
for (var key in salaries) {
if (salaries[key] > max) {
max = salaries[key];
maxName = key;
} 
alert(naxName || 'нет сотрудников');
}

//умножение численных элементов на 2

var menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
for (var item in menu) {
function isNumeric(menu[item]) {
  return !isNaN(parseFloat(menu[item])) && isFinite(menu[item]);
}
menu[item] = menu[item] * 2;
}
alert(menu);

//зеркальный объект (объект с зеркальными свойствами)

var mirror = {
abc: "",
arara: "",
xyz: ""
};
var newMirror = {};
for (key in mirror) {
  newMirror[key] = mirror[key];
  newMirror[key] = key.split('').reverse().join('');
};
console.log(newMirror);




