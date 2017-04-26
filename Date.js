//returns the Russian designation of the week day
var date = new Date();  
function getWeekDay(date) {
    switch(date.getDay()) {
    case 0: return "вс";
    case 1: return "пн";
    case 2: return "вт";
    case 3: return "ср";
    case 4: return "чт";
    case 5: return "пт";
    case 6: return "сб";
  }
  
}
alert( getWeekDay(date) );
 




//returns the European date designation
 function getLocalDay(date) {
  var days = ['7', '1', '2', '3', '4', '5', '6']; //or if ('0') return '7';
  return days[date.getDay()];
}

var date = new Date();  
alert( getLocalDay(date) );




//return the number of a day "days" days ago from today 
var date = new Date(2015, 0, 2);


 function getDateAgo(date, days) {
   var newDate = new Date(date);
  return newDate.getDate(newDate.setDate(newDate.getDate() - days));
    
}

alert(getDateAgo(date, 2))



//how many secs from the beginning of the day 
function getSecondsToday() {
var date = new Date();
return Math.round((date.getTime() - date.getTime(date.setHours(0,0,0,0)))/1000);
}
 getSecondsToday()



//how many secs till the beginning of the next day 
function getSecondsToTomorro() {
var today = +new Date();
var tomorrow = +new Date(today.getFullYear(), today.getMonth(), today.getDate() +1);
return Math.round((tomorrow - today)/1000);
}

//date formating to the "dd.mm.yy" type  
function formatDate(d) {
return d.toLocaleString("ru", options);
}

var d = new Date(2016, 1, 30);

var options = {
day: '2-digit',
month: '2-digit',
year: '2-digit'
};

alert(formatDate(d));

//alternative option of above
function formatDate(d) {
  var year = d.getFullYear() % 100;
  if (year < 10) year = "0" + year;
  
  var month = d.getMonth() + 1;
  if (month < 10) month = "0" + month;
  
  var date = d.getDate();
  if (date < 10) date = "0" + date;
  
  return date + '.' + month + '.' + year;
  
}

var d = new Date(2016, 1, 28);

//count how much time has passed since the "date" and return the relevant string
function formatDate(date) {
 var newDate = +new Date() - (+date);
 
  if (newDate < 1000) return "только что";
  if (newDate < 60 * 1000) return  new Date(newDate).getSeconds() + " сек. назад";
  if (newDate < 60 * 60 * 1000) return new Date(newDate).getMinutes()  + "  мин. назад";
  
  var year = date.getFullYear() % 100;
  if (year < 10) year = "0" + year;
  
  var month = date.getMonth() + 1;
  if (month < 10) month = "0" + month;
  
  var day = date.getDate();
  if (day < 10) day = "0" + day;
  
 var hours =  date.getHours();
 if (hours < 10) hours = "0" + hours;

 var minutes =  date.getMinutes();
 if (minutes < 10) minutes = "0" + minutes;
  
 return day + '.' + month + '.' + year + " " + hours + ":" + minutes;
  
}

alert( formatDate(new Date(new Date - 1)) ); // "только что"
alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
alert( formatDate(new Date(new Date() - 5 * 60 * 1000)) ); // "5 мин. назад"
alert( formatDate(new Date(new Date - 86400 * 1000)) );
