// A Pen created at CodePen.io. You can find this one at http://codepen.io/dudleystorey/pen/Geprd.
// Based on previous work by [Geoff Yuen](http://codepen.io/geoffyuen/details/FCBEg/), improved with JavaScript and semantic markup. [More information on my blog](http://demosthenes.info/blog/852/A-Fresh-Approach-to-Responsive-HTML5-Tables)


var headertext = [],
headers = document.querySelectorAll("#sortTable th"),
tablerows = document.querySelectorAll("#sortTable th"),
tablebody = document.querySelector("#sortTable tbody");

for(var i = 0; i < headers.length; i++) {
  var current = headers[i];
  headertext.push(current.textContent.replace(/\r?\n|\r/,""));
} 
for (var i = 0, row; row = tablebody.rows[i]; i++) {
  for (var j = 0, col; col = row.cells[j]; j++) {
    col.setAttribute("data-th", headertext[j]);
  } 
}
