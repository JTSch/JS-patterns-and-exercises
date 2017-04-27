//event delegating to delete divs from the main div
var main = document.getElementById('main');
    
    main.onclick = function(event) {
      var target = event.target;
      if (target.tagName !== 'BUTTON') return;
        target.parentElement.remove();
    };
