
function tt(){
	for(var i=1; i <= 100; i++){
		if(i%3 == 0){
			console.log("Fizz");
			continue;
		}
		if((i%5 == 0) && (i%3 !== 0)){
			console.log("Buzz");
			continue;
		}
		console.log(i);
	}
}

function tt1(){
	for(var i=1; i <= 100; i++){
		if((i%5 == 0) && (i%3 == 0)){
			console.log("FizzBuzz");
			continue;
		}
		console.log(i);
	}
}

function tt2(a,b){
var c = Math.min(a, b);
if(a !== b){
console.log(c);
}
else{
	console.log("no min");
}
}
function tt3(){
  for (var str = "#"; str.length < 8; str += "#")
    console.log(str);
}

// 3.1. Минимум 
function min(a, b) {
  return a < b ?  a : b;
}
console.log(min(a, b))

//3.2. Рекурсия
function IsEven(n) {
return n % 2 == 0 ? true : false;
  if (n < 0) return IsEven(-n);
  else return IsEven(n-2);
 }
console.log(IsEven(n))
