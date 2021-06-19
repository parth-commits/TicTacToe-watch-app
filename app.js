const x = document.createElement('div');
const xline1 = document.createElement('div');
const xline2 = document.createElement('div');
xline1.classList.add('x-line-1');
xline2.classList.add('x-line-2');
x.classList.add('x');
x.appendChild(xline1);
x.appendChild(xline2);


const o = document.createElement('div');
o.classList.add('o');


const boxes = Array.prototype.slice.call(document.getElementsByClassName('tap-box'));


boxes[1].appendChild(o);