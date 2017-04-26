//назначение события при помощи addEventListener
<input type="button" id="hider" value="Нажмите, чтобы спрятать текст" />

  <div id="text">Текст</div>

  <script>
    var button = document.getElementById("hider");
    button.addEventListener("click", hideText);
    button.addEventListener("click", hideSelf);
    
    function hideText() {
      var text = document.getElementById('text');
      text.textContent = '';
      //text.innerHTML = '';
      //document.body.removeChild(text);
    };
    function hideSelf() {
      document.body.removeChild(document.getElementById("hider"));
    };
    /*через HTML: 
    <input type="button" onclick = "this.style.display='none'">  


    
  </script>
