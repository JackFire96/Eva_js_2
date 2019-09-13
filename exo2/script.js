'use strict';

var DrawBar = function DrawBar(sum,nbr){
    this.sum = sum;
    this.nbr = nbr
}

DrawBar.prototype.createBar = function() {
    var container = document.createElement('div');
    var bar = document.createElement('div');
    container.style.border = '1px solid';
    bar.style.width = '0%';
    document.querySelector('body').appendChild(container);
    container.appendChild(bar);
}

DrawBar.prototype.render = function() {
    this.createBar();
  }

var DrawBar = new DrawBar();
 DrawBar.render();