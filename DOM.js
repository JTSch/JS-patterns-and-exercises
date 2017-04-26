//DOM-навигация
<script>
alert(document.documentElement.children[0]);
alert(document.body.children[1]);
alert(document.body.children[1].children[1]);
</script>

//проверка на наличие дочерних элементов
if (!elem.childNodes.length) {объект elem пуст} - считает все узлы
if (elem.hasChildNodes()) == if (elem.childNodes.length != 0)
if (!elem.firstChild)
if (!elem.lastChild)

//раскрашивание ячеек таблицы по диагонали в красный
<script>
var table = document.body.children[0];
      for (var i = 0; i < table.rows.length; i++) {
        table.rows[i].cells[i].style.backgroundColor = 'red';
      }
</script>

//вывод количества label в таблице
document.getElementById('age-table').getElementsByTagName('label').length

//вывод первой ячейки в таблице
document.getElementById('age-table').getElementsByTagName('td')[0];
//если нужен только текст ячейки
document.getElementById('age-table').getElementsByTagName('td')[0].innerHTML;

//поиск первого элемента по css-свойству
document.querySelector('form[name=search]');

document.querySelector('form[name=search]').getElementsByTagName('input')[0];
//кратко:
document.querySelector('form[name=search] input');

//поиск элемента с name=info[0], если неизвестно его расположение
document.getElementsByName('info[0]');

//поиск элемента с искомым именем в форме с определенным именем
document.querySelector('form[name="search-person"] [name="info[0]"]');

//вывод текста внутри тега в многоуровневом списке и количество потомков
var tags = document.getElementsByTagName('li');
    for (var i = 0; i < tags.length; i++) {
     var name = tags[i].firstChild.data; // первым элементом в узле является текст
     name = name.trim();
     var childNum = tags[i].getElementsByTagName('li').length;
    alert (name + ': ' + childNum);
      }
//benchmarking сравнения getElementsbyTagName и querySelectorAll

function bench(f, times) {
      var date = new Date;
      for (i = 0; i < times; i++) {
        f();
      }
     return new Date - date;
    }
    
    alert('getElementsByTagName ' + bench(function f() { var get = document.getElementsByTagName('p');
      for (var i = 0; i < get.length; i++) {
        var elem = get[i];
      };
    }, 10000));
    
    alert('querySelectorAll ' + bench(function f() { var selector = document.querySelectorAll('p');
      for (var j = 0; j < selector.length; j++) {
        var elem = selector[j];
      };
    }, 10000));

//полифил для elem.closest(css) 
(function() {

if(!Element.prototype.closest) {

Element.prototype.closest = function(css) {
var elem = this;
while (elem) {
if (elem.matches(css)) return elem;
else elem = elem.parentElement;  
} 
return null;
};
}
})();

//полифил для matches(для разных браузеров)
(function() {
if (!Element.prototype.matches) {
Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector
}
})();

//полифил для textContext, если работает innerText
(function() {
if (!document.documentElement.textContext === undefined) {

Object.defineProperty(Element.prototype, 'textContent', {
get: function() {
return this.innerText;
},
set: function(text) {
this.innerText = text;
}
});
}
})();

//отделить внутренние ссылки от внешних и подчеркнуть желтым
<script>
  var links = document.getElementsByTagName('a');
  for (var i = 0; i < links.length; i++) {
    if (links[i].hasAttribute('href') && links[i].matches('a[href^="http"]') || links[i].matches('a[href*="internal"]')) {
      links[i].setAttribute('class', 'external');
    };
  }
</script>
//получить див, найти свойство и вывести
<body>

  <div id="widget" data-widget-name="menu">Выберите жанр</div>

  <script>
   var divTag = document.body.children[0];
   /*another option:
   var divTag = document.getElementById('widget');*/
   var attr = divTag.dataset.widgetName;
   /*another option:
   var attr = divTag.getAttribute('data-widget-name');*/
   
   alert(attr);
  </script>

</body>

//полифил для remove(elem)
(function() {
if(!Element.prototype.remove) {
Element.prototype.remove = function remove() {
if (this.parentNode) {
this.parentNode.removeChild(this);
}
};
}
})();

//создание функции insertAfter(elem, refElem)

insertAfter = function insertAfter(elem, refElem) {
   if (refElem.nextSibling) {
   return refElem.parentNode.insertBefore(elem,refElem.nextSinbling);
   } else {
   return refElem.parentNode.appendChild(elem);
   }
}
//либо (если сиблинга нет, то он равен null) 
else {
return refElem.parentNode.insertBefore(elem,null);
}

//функция для удаления всех потомков элемента
function removeChildren(elem) {
while (elem.lastChild) {
elem.removeChild(lastChild); 
}
}
//то же самое но через innerHTML
function removeChildren(elem) {
elem.innerHTML = "";
}
//для совместимости - через try catch

function removeChildren(elem) {
try {
elem.innerHTML = "";
} catch(e) {
while (elem.lastChild) {
elem.removeChild(lastChild); 
}
}
}
// кнопка на js
var div = document.body.children[0];
    var a = document.createElement('a');
    div.appendChild(a);
    a.style.cssText = "-moz-border-radius: 8px; \
    -webkit-border-radius: 8px; \
    border-radius: 8px; \
    border: 2px groove green; \
    display: block; \
    height: 30px; \
    line-height: 30px; \
    width: 150px; \
    text-decoration: none; \
    text-align: center; \
    color: red; \
    font-weight: bold; \
    ";
    a.setAttribute('href', "https://www.ozon.ru/context/detail/id/28019832/");
    a.textContent = "Push me";
    var input = document.createElement('input');
    div.appendChild(input);

//кнопка с доп. задающимися параметрами и timeout
function showNotification(options) {
var div = document.createElement('div');
document.body.appendChild(div);
div.classList.add('notification');
div.style.cssText = '' + options.cssText;  
div.style.top = options.top;
div.style.right = options.right;
div.innerHTML = options.html;
if (options.className) {
  div.classList.add(options.className);
};  
setInterval(function() {
div.style.display = "none";	
}, 1000);
}
showNotification({
top: 10,
right: 10,
html: "Привет",
className: "welcome"
})


//МЕТРИКА

//высота нижнего непрокрученного текста
elem.scrollHeight - elem.scrollTop - clientHeight; //scrollTop и нижний текст учитывают border

//расчет ширины полосы прокрутки
offsetWidth - clientWidth - clientLeft * 2;

//позиционирование
var div = document.getElementById('moving-div');
    
    
    var div2 = div.cloneNode(false);
    div2.style.visibility = 'hidden';
    
    div2.style.position = 'relative';
    div2.style.height = div.clientHeight - div.clientTop * 2 + 'px';
    
    var computedStyle = getComputedStyle(div, null) || div.currentStyle;
    div2.style.marginTop = computedStyle.marginTop;
    div2.style.marginBottom = computedStyle.marginBottom;
    
    document.body.insertBefore(div2, div);
    
    div.style.position = 'absolute';
    div.style.right = div.style.top = 0;

//позиционирование мяча по центру
var ball = document.getElementById('ball');
  var div = document.getElementById('field');
  ball.style.left = Math.round(div.clientWidth / 2 - ball.offsetWidth / 2) + 'px'; /*отступ - половина контент-ширины поля и половина размера изображения, но нужно заранее указывать размеры изображения*/
  ball.style.top = Math.round(div.clientHeight / 2 - ball.offsetHeight / 2) + 'px';

//растяжение элемента по ширине окна 
elem.style.width = 'auto';

//позиционирование заметки относительно другого элемента
function positionAt(anchor, position, elem) {
  var coords = anchor.getBoundingClientRect();
  
 switch (position) {
   case "right": 
    elem.style.top = coords.top + 'px';
    elem.style.left = coords.right + "px";
    break;
  case "top": 
    elem.style.top = coords.top - elem.offsetHeight + 'px';
    elem.style.left = coords.left + 'px';
    break;
  case "bottom": 
    elem.style.top = coords.bottom + 'px';
    elem.style.left = coords.left + 'px';
    break;
  }
}


function showNote(anchor, position, html) {
  
  var note = document.createElement('div');
  note.className = 'note'
  note.innerHTML = html;
  document.body.appendChild(note);
  
  positionAt(anchor, position, note);
}

// проход по списку и вывод количества вложенных элементов
function getElemsLength() {
 var lis = document.body.getElementsByTagName('li');
  for (var i = 0; i < lis.length; i++) {
    
    var count = lis[i].getElementsByTagName('li').length;
    if (!count) continue;
    lis[i].firstChild.data += '[' + count + ']';
  };
 }
 getElemsLength();
