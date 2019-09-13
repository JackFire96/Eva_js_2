'use strict';

var DrawBar = function DrawBar(sum,nbr){
    this.sum = sum;
    this.nbr = nbr
}

DrawBar.prototype.progressBar = function() {
    var container = document.createElement('div');
    var bar = document.createElement('div');
    var width = 0;
    var id = setInterval(frame, 30);
    container.style.border = '1px solid';
    container.style.height = '50px';
    bar.style.width = '0%';
    bar.style.height = '50px';
    bar.style.background = 'red'
    document.querySelector('body').appendChild(container);
    container.appendChild(bar);
    function frame() {
        if (width >= 100) {
          clearInterval(id);
        } else {
          width++; 
          bar.style.width = width + '%'; 
          bar.innerHTML = width * 1 + '%';
        }
      }
      frame();
}

DrawBar.prototype.render = function() {
    this.progressBar();
  }

var DrawBar = new DrawBar();
 DrawBar.render();