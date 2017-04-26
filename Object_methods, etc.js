//calculator using this and object constructor
function Calculator() {

  this.read = function() {
    this.a = +prompt("Число", 0);
    this.b = +prompt("Второе число", 0);
  };

  this.sum = function() {
    return this.a + this.b;
  };

  this.mul = function() {
    return this.a * this.b;
  };
}

var calculator = new Calculator();
calculator.read();

alert( "Сумма=" + calculator.sum() );
alert( "Произведение=" + calculator.mul() );

//var startingValue = 0;
function Accumulator(value) {

this.value = startingValue + value;  

this.read = function() {
value = +prompt ("Insert a number", 0);
}


var accumulator = new Accumulator(1); 

// Accumulator using Object methods and this
function Accumulator(startingValue) {

this.value = startingValue;  

this.read = function() {
return this.value += +prompt ("Insert a number", 0);

};
}

var accumulator = new Accumulator(1); 

//objet.defineProperty and getters + setters: get firstName and lastName, set new fullName
function User(fullName) {
  this.fullName = fullName;
  
 Object.defineProperties(this, {
   firstName: {
   get: function() {
    return this.fullName.split(' ')[0];
   },

   set: function(newFirstName) {
	return this.fullName = newFirstName + " " + this.lastName;
	}
  },
  lastName: {
  get: function() {
    return this.fullName.split(' ')[1];
	},
  set: function(newLastName) {
	return this.fullName = this.firstName + " " + newLastName;
	}
  }
   });
  
}

var vasya = new User("Василий Попкин");

alert( vasya.firstName ); // Василий
alert( vasya.lastName ); // Попкин

vasya.lastName = 'Сидоров';

alert( vasya.fullName )

//Static methods and fabricated methods
function Article() {
  this.created = new Date;

  Article.count++; 
  Article.last = this.created; 
}
Article.count = 0; 

Article.showStats = function() {
  alert( 'Всего: ' + this.count + ', Последняя: ' + this.last );
};

new Article();
new Article();

Article.showStats(); // Всего: 2, Последняя: (дата)

new Article();

Article.showStats(); // Всего: 3, Последняя: (дата)

//my version of above
function Article() {
    this.created = new Date();
    this.count = total.push(this);
    }
  
  Article.showStats = function() {
  return "Всего: " + total.length + " , " + "Последняя: " + total[total.length - 1].created;
}

var total = []; 

new Article();
new Article();

Article.showStats(); // Всего: 2, Последняя: (дата)

new Article();

Article.showStats(); // Всего: 3, Последняя: (дата)
"Всего: 3 , Последняя: Tue Mar 21 2017 16:03:17 GMT+0300 (MSK)"

//call, method borrowing

function sumArgs() {
arguments.reduce = [].reduce; //copying the method
return arguments.reduce(function(a,b) {
return a + b;
});
}
alert( sumArgs(1, 2, 3, 4, 5));

// another option of above

function sumArgs() {
return [].reduce.call(arguments, function(a,b) {
return a + b;
});
}
alert( sumArgs(1, 2, 3, 4, 5));

//func application to args
function sum() {
  return [].reduce.call(arguments, function(a, b) {
    return a + b;
  });
}

function mul() {
  return [].reduce.call(arguments, function(a, b) {
    return a * b;
  });
}

function applyAll(func, arg1, arg2) {
var arr = [].slice.call(arguments);
arr.splice(0, 1);
 return func.apply(this, arr);
}

alert( applyAll(Math.min, 2, -2, 3) );
