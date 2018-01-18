
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
  //divs is a two dimentional array
  var divs = document.querySelectorAll('#grand-node');
  //items is a one dimensional array, the last element is the length -1 cause the first element is 0
  var items = divs[0].querySelectorAll('div');
  return items[items.length - 1];
}
