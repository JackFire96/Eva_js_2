'use strict';

/**
 * grid generator
 * @constructor
 * @param {number} xAxis
 * @param {number} yAxis
 */
var GridGenerator = function GridGenerator(xAxis, yAxis) {
  this.xAxis = xAxis;
  this.yAxis = yAxis;
}
/**
 * render
 */
GridGenerator.prototype.render = function() {
  this.renderGrid();
}

/**
 * Set interval
 */
GridGenerator.prototype.setInterval = function(el) {
  setTimeout(function() {
    el.style.background = this.randomColor();
    this.setInterval(el);
  }.bind(this), this.randomNumber(500, 1000));
}

/**
 * GridGenrator
 */
GridGenerator.prototype.renderGrid = function() {
  var elBody = document.querySelector('body');
  var elTable = document.createElement('table');

  for (var i = 0; i < this.xAxis; i += 1) {
    var elTr = document.createElement('tr');
    for (var j = 0; j < this.yAxis; j += 1) {
      var elTd = document.createElement('td');
      this.setInterval(elTd);

      elTd.style.width = '80px';
      elTd.style.height = '80px';
      elTr.appendChild(elTd);
    }

    elTable.appendChild(elTr);
  }
  elBody.appendChild(elTable);
}
GridGenerator.prototype.randomNumber = function(min,max) {
  return Math.floor(Math.random() * (max - min)) + min; ;
}
/**
 * randomColor
 * @return {string} color
 */
GridGenerator.prototype.randomColor = function() {
  var colors = ['red', 'yellow', 'blue', 'pink', 'green','purple','grey','brown'];
  return colors[Math.floor(Math.random() * colors.length)];
}

var gridGenerator = new GridGenerator(10, 10);
gridGenerator.render();