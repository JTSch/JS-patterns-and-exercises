<!DOCTYPE HTML>
<html>

<head>
  <meta charset="utf-8">
</head>

<body>
  <style>
  .tree span:hover {
    font-weight: bold;
    cursor: pointer;
  }
  .invisible {
    display: none;
  }
    
  </style>

  <ul class="tree">
    <li>Main item
      <ul>
        <li>Division 1
          <ul>
            <li>Subdivision</li>
            <li>Subdivision</li>
            <li>Subdivision</li>
            </ul>
        </li>
        <li>Division 2
          <ul>
            <li>Subdivision</li>
            <li>Subdivision</li>
            <li>Subdivision</li>
          </ul>
        </li>
      </ul>
    </li>
    <li>Another main item
      <ul>
        <li>Division 1
          <ul>
            <li>Subdivision</li>
            <li>Subdivision</li>
          </ul>

        </li>
        <li>Division 2
          <ul>
            <li>Subdivision</li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>

<script>
  var lis = document.getElementsByTagName('li');
  for (var i = 0; i < lis.length; i++) {
    var span = document.createElement('span');
    lis[i].prepend(span);
    span.appendChild(span.nextSibling);
  };
  
  var tree = document.getElementsByClassName('tree')[0];
  
  tree.onclick = function(event) {
    var target = event.target; 
    if (target.tagName == 'SPAN') {
    var li = target.parentNode;
    var ul = li.getElementsByTagName('ul')[0];
    if (!li.contains(ul)) return;
    ul.classList.toggle('invisible');
    };
  }
  
</script>
</body>

</html>
