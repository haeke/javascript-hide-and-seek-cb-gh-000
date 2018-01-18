
function getFirstSelector(selector) {
 return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested');
}

function increaseRankBy(n) {
  var lis = document.querySelectorAll('ul.ranked-list');
  for (var i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (i + 1).toString();
  }
  
  return lis;
}

function deepestChild() {
  var lis = document.querySelectorAll('div#grand-node');
  return lis[1];
}