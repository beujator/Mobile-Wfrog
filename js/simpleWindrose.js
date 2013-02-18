function windrose(angle){
  var g = Math.round(angle/22.50);
  var rose = new Array('N','NNE','NE','ENE','E','ESE','SE','SSE','S','SSW','SW','WSW','W','WNW','NW','NNW');
  return rose[g];

}
