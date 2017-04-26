//создание внутренних и внешних методов и свойств.
//мой вариант (не уверена в правильности):
function CoffeeMachine(power) {
  this.waterAmount = 0;

  var WATER_HEAT_CAPACITY = 4200;

  var self = this;

  function getBoilTime() {
    return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }
  

  function onReady() {
    alert( 'Кофе готов!' );
  }

  this.run = function() {
    this.run.timerId = setTimeout(onReady, getBoilTime());//внутреннее свойство
  };

  this.stop = function() { 
  clearTimeout(this.run.timerId); //ссылка на внутреннее св-во публич.метода
  alert('Стоп!');
}
}
var coffeeMachine = new CoffeeMachine(50000);
coffeeMachine.waterAmount = 200;

coffeeMachine.run();
coffeeMachine.stop();

//исходный вариант:
function CoffeeMachine(power) {
  this.waterAmount = 0;
  var timerId; //создается переменная для таймера

  var WATER_HEAT_CAPACITY = 4200;

  var self = this;

  function getBoilTime() {
    return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }
  

  function onReady() {
    alert( 'Кофе готов!' );
  }

  this.run = function() {
    timerId = setTimeout(onReady, getBoilTime()); /*в таймер записывается отсрочка*/
  };

  this.stop = function() { //публичный метод для отмены функции с отсрочкой
  clearTimeout(timerId);
  alert('Стоп!');
}
}
var coffeeMachine = new CoffeeMachine(50000);
coffeeMachine.waterAmount = 200;

coffeeMachine.run();
coffeeMachine.stop();

//геттеры и сеттеры для свойств

function User() {
  var firstName, surname;
  this.setFirstName = function(name) {
if (!arguments.length) {
throw new Error("Нельзя без имени!");
}; 
	return firstName = name;
};
  this.setSurname = function(lastName) {
if (!arguments.length) {
throw new Error("Нельзя без фамилии!");
}; 
return surname = lastName;
};
  this.getFullName = function() {
return firstName + " " + surname;
};
}

var user = new User();
user.setFirstName("Петя");
user.setSurname("Иванов");

alert( user.getFullName() );


//публичный метод, добавление 
this.addWater = function(addedAmount) {
    if (addedAmount < 0) {
      throw new Error("Значение должно быть положительным");
    };
    if (addedAmount >= (capacity - waterAmount)) {
      throw new Error("Нельзя залить больше, чем " + capacity);
    };

    return waterAmount = waterAmount + addedAmount;
  };
//другой вариант
this.addWater = function(amount) {
return this.setWaterAmount(waterAmount + amount);
}

//сеттер для приватной функции
function onReady() {
        alert( 'Кофе готов!' );
      }
 
this.setOnReady = function(newOnReady) {
        onReady = newOnReady;
      }
    /*можно изменять в любое время onReady, т.к. в setTimeout передастся функция, края возьмет текущее значение onReady из замыкания*/
        this.run = function() {
        setTimeout(function() {        
        onReady()
      }, getTimeToBoil());
      }; 
//публичный метод для проверки запуска другого метода (таймер)
var timerId;

this.isRunning = function(){
return !!timerId; //преобразование к логическому типу через двойное НЕ
};

this.run = function() {
timerId = setTimeout(function(){
timerId = null; //обнуление предыдущего таймера 
onReady();
}, getBoilTime());
};
//наследование с "выключением" устройства
function Machine(power) {
      this._enabled = false;

      this.enable = function() {
        this._enabled = true;
      };

      this.disable = function() {
        this._enabled = false;
      };
    }

    function CoffeeMachine(power) {
      Machine.apply(this, arguments);

      var waterAmount = 0;
      var timerId;

      this.setWaterAmount = function(amount) {
        waterAmount = amount;
      };

      function onReady() {
        alert('Кофе готов!');
      }

      var parentDisable = this.disable;
      this.disable = function() {
        parentDisable.call(this);
        clearTimeout(timerId);
      }

      this.run = function() {
        if (!this._enabled) {
          throw new Error("Кофеварка выключена");
        }
        timerId = setTimeout(onReady, 1000);
      };

    }

    var coffeeMachine = new CoffeeMachine(10000);
    coffeeMachine.enable();
    coffeeMachine.run();
    coffeeMachine.disable();

//холодильник через функциональное ООП
//класс 
function Machine(power) {
      this._power = power;
      this._enabled = false;
      
       this.enable = function() {
        this._enabled = true;
      };

      this.disable = function() {
        this._enabled = false;
      };
    }

//сам холодильник
function Fridge(power) {
  
  Machine.apply(this, arguments);

  var food = []; 

  this.addFood = function() {
    if (!this._enabled) {
      throw new Error("Холодильник выключен!");
    }
    for (var i = 0; i < arguments.length; i++) {
      food.push(arguments[i]);
    }
    if (food.length >= this._power / 100) {
      throw new Error("Нет места");
    }
  };

  this.getFood = function() {
    return food.slice();
  };
  
  this.filterFood = function(func) {
    return food.filter(func);
  };
  
  this.removeFood = function(item) {
    if (food.indexOf(item) != -1) 
    return food.splice(food.indexOf(item), 1);
  };
  
  var parentDisable = this.disable;
      this.disable = function() {
        if (food.length) {
          throw new Error("Нельзя выключать! В холодильнике есть еда!");
        }; 
        parentDisable.call(this);
      }

