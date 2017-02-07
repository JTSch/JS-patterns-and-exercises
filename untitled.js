
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