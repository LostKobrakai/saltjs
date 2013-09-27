/*! Salt.js DOM Selector Lib. By @james2doyle */
window.$ = function(selector, ele) {
  // an object containing the matching keys and native get commands
  var matches = {
    '#': 'getElementById',
    '.': 'getElementsByClassName',
    '@': 'getElementsByName',
    '=': 'getElementsByTagName',
    '*': 'querySelectorAll'
  }[selector[0]]; // you can treat a string as an array of characters
  // now pass the selector without the key/first character
  var container = ele ? ele : document;
  var el = (container[matches](selector.slice(1)));
  // if there is one element than return the 0 element
  return ((el.length < 2) ? el[0]: el);
};
