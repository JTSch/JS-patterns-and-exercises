// занесение в строковый буфер
function makeBuffer() {
  
  function buffer(value) {
    if (arguments.length > 0) buffer.storage += value;
    return buffer.storage;
    };
    buffer.storage = "";

    buffer.clear = function() {
    buffer.storage = "";
  }
    return buffer;
};
var buffer = makeBuffer();

buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');
alert(buffer());

var buffer2 = makeBuffer();
buffer2(0);
buffer2(1);
buffer2(0);

alert( buffer2() );


// сортировка

users.sort(byField('name'));
users.forEach(function(user) {
  alert( user.name );

function byField(field) {
    function(a, b) {
    return a[field] > b[field] ? 1 : -1;
    }   
}

// фильтр -!!!! доделать
function filter(arr, func) {
      var newArr = arr.filter(function inBetween(a, b) {
      return function (x) {})
      return (x >= a) && (x <= b)};
    });
      }
    
    /*function inBetween(a, b) {
      return function (x) {})
      return (x >= a) && (x <= b)};
    }*/
    
    /*function inArray(arr) {
      return arr[i] = arr[i];
    }*/
    
    var arr = [1, 2, 3, 4, 5, 6, 7];

alert( filter(arr, inBetween(3, 6)) ); // 3,4,5,6

alert( filter(arr, inArray([1, 2, 10])) );
