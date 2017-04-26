//прототипное наследование, _proto_ 

    var head = {
      glasses: 1
    };
    
    var table = {
      pen: 3,
      __proto__:  head
    };
        
    var bed = {
      sheet: 1,
      pillow: 2,
      __proto__: table
    };
     
    var pockets = {
      money: 2000,
      __proto__: bed
    };
    
    alert( pockets.pen ); // 3
    alert( bed.glasses ); // 1
    alert( table.money ); // undefined

//F.prototype и его изменение
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

var rabbit = new Rabbit();

Rabbit.prototype = {}; //для новых, будущих объектов

var rabbit2 = new Rabbit(); //новый объект
alert( rabbit.eats ); //есть в предыдущем, до изменения
alert( rabbit2.eats ); //нет в новом, после изменения

Rabbit.prototype.eats = false;
alert( rabbit.eats ); //false, т.к. указывает на rabbit._proto_

delete rabbit.eats; 
alert( rabbit.eats ); // true. delete не выполнится, т.к. у rabbit нет eats. он есть в прототипе.

delete Rabbit.prototype.eats; 
alert( rabbit.eats ); // undefined, т.к. свойство удалилось из rabbit._proto_

//F.prototype и this
function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function() {
  alert( this.name );
}

var rabbit = new Rabbit("Rabbit");

rabbit.sayHi(); //"Rabbit", т.к. this == rabbit. 
Rabbit.prototype.sayHi(); //undefined, ссылка на прототип, а он безымянный
Object.getPrototypeOf(rabbit).sayHi(); //undefined, ссылка на прототип, а он безымянный
rabbit.__proto__.sayHi(); //undefined, ссылка на прототип, а он безымянный


//из функционального в прототипный стиль
//было:
function CoffeeMachine(power) {
  var waterAmount = 0;

  var WATER_HEAT_CAPACITY = 4200;

  function getTimeToBoil() {
    return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  this.run = function() {
    setTimeout(function() {
      alert( 'Кофе готов!' );
    }, getTimeToBoil());
  };

  this.setWaterAmount = function(amount) {
    waterAmount = amount;
  };

}

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.setWaterAmount(50);
coffeeMachine.run();

//стало:

function CoffeeMachine(power) {
      this._power = power;
      this._waterAmount = 0;
    }
    CooffeeMachine.prototype.WATER_HEAT_CAPACITY = 4200;
    
    CooffeeMachine.prototype._getTimeToBoil = function() {
        return this._waterAmount * this.WATER_HEAT_CAPACITY * 80 / this._power;
    };
       CooffeeMachine.prototype.run = function() {
        setTimeout(function() {
          alert( 'Кофе готов!' );
        }, this._getTimeToBoil());
      };
    
      CooffeeMachine.prototype.setWaterAmount = function(amount) {
        this._waterAmount = amount;
      };
    
    }
    
    var coffeeMachine = new CoffeeMachine(10000);
    coffeeMachine.setWaterAmount(50);
    coffeeMachine.run();

//часы прототипированием
 function Clock(options) {
      this._template = options.template;
    }
    
    Clock.prototype._render = function render() {
      var date = new Date();
      var hour = date.getHours();
      if (hour < 10) hour = '0' + hour;
      var min = date.getMinutes();
      if (min < 10) min = '0' + min;
      var sec = date.getSeconds();
      if (sec < 10) sec = '0' + sec;
      var output = hour + this._template.charAt(1) + min + this._template.charAt(3) + sec; //replace("h", hour).replace('m', min).replace('s', sec);
      console.log(output);
      
    };
    
    Clock.prototype.start = function() {
      this._render()
      var self = this;
      this._timer = setInterval(function(){
        self._render();
        }, 1000);
    };
    
    Clock.prototype.stop = function() {
      clearInterval(this._timer);
    };
    
    var clock = new Clock({
      template: 'h:m:s'
    });
    clock.start();

// расширение свойств часов и добавление потомка
ExtendedClock.prototype = Object.create(Clock.prototype);
    
    ExtendedClock.prototype.constructor = ExtendedClock;
    
    ExtendedClock.prototype.start = function() {
      this._render();
      var self = this;
      this._timer = setInterval(function() {
        self._render()
      }, this._precision);
    };
   
     var lowResolutionClock = new ExtendedClock({
        template: 'h:m:s',
        precision: 10000
    });

    lowResolutionClock.start();

//прототипное наследование с меню (Menu было задано изначально)
function AnimatingMenu() {
      Menu.apply(this, arguments);
    } 
    
    AnimatingMenu.prototype = Object.create(Menu.prototype);
    
    AnimatingMenu.prototype.STATE_ANIMATING = 2;
    
    AnimatingMenu.prototype.open = function() {
      this._state = this.STATE_ANIMATING;
      var self = this;
      this._timer = setTimeout(function(){
        Menu.prototype.open.call(self);
        }, 1000);
    }
    
    AnimatingMenu.prototype.close = function() {
      clearTimeout(this._timer);
      Menu.prototype.close.call(this);
    }
    
    AnimatingMenu.prototype._stateAsString = function() {
      
      switch (this._state) {
        case this.STATE_ANIMATING:
          return 'анимация';

        default:
          return Menu.prototype._stateAsString.call(this);
      }
    };
   
    var menu = new AnimatingMenu();

    menu.showState(); // закрыто

    menu.open();
    menu.showState(); // анимация

    setTimeout(function() {
      menu.showState(); // открыто

      menu.close();
      menu.showState(); // закрыто (закрытие без анимации)
    }, 1000);
