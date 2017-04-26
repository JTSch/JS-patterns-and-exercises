//typeof, Array.isArray, duck typing
function formatDate(date) {
   var options = {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
    };
  if (date.charAt) {
    var newDate = date.split("-").reverse();
    newDate[2] = +newDate[2] % 100;
    newDate = newDate.join(".");
    return newDate;
  } 
  if (typeof date === 'number') {
    return (new Date(date * 1000)).toLocaleString('ru', options);
  }
  if (Array.isArray(date)) {
    var newDate = date.reverse();
    newDate[1] = newDate[1] + 1;
    newDate[2] = newDate[2] % 100;
    for (var i = 0; i < newDate.length; i++) {
    if (date[i] < 10) 
    date[i] = '0' + date[i];
    }
    return newDate.join('.');
  }
  if (date.getTime) {
    return date.toLocaleString('ru', options);
  }
 
}
alert( formatDate('2011-10-02') ); // 02.10.11
alert( formatDate(1234567890) ); // 14.02.09
alert( formatDate([2014, 0, 1]) ); // 01.01.14
alert( formatDate(new Date(2014, 0, 1)) ); // 01.01.14

//в JSON и обратно
var jsn = JSON.stringify(leader, '', 2);
alert(jsn);
leader = JSON.parse(jsn);

// вывод числе setInterval

function printNumbersInterval() {
    var i = 1; 
    var timerId = setInterval(function() {
    console.log(i);
    if (i == 20) {
    clearInterval(timerId)
    };
    i++;
    }, 100)
    };
    printNumbersInterval()

//вывод чисел setTimeout
function printNumbersInterval() {
    var i = 1; 
    var timerId = setTimeout(function logNumbers() {
    console.log(i);
	if (i < 20) {
	setTimeout(logNumbers, 100);
	i++;
    }
	}, 100);
	};
    printNumbersInterval()

//функция, которая возвращает обертку задержки

//функция, к которой применится обертка
function f(x) {
  alert( x );
}

//функция обертки
function delay(f, i) {
    return function() {
      var newThis = this; //запоминаем этот контекст и аргументы
      var newArg = arguments;
    setTimeout(function(){f.apply(newThis, newArg);}, i); /*передача контекста и вызова + отсрочка*/
  
    };
 }

var f1000 = delay(f, 1000);
var f1500 = delay(f, 1500);

f1000("тест"); // выведет "тест" через 1000 миллисекунд
f1500("тест2"); // выведет "тест2" через 1500 миллисекунд 


// try... catch калькулятор
while (true) { //для того, чтобы повторно запросить ввод при ошибке
     var exp = prompt("Продолжите выражение", "2+");
     if (exp == null) break; 
     
     try {
       var res = eval(exp);
       if (isNaN(res)) {
         throw new Error("Результат не установлен"); //генериров.новой ошибки
       }
       break; 
     } catch (e) {
      alert(e.message); 
     }
   }
alert(res);

  
