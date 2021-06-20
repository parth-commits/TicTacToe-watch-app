// Making the 2 elements
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

setTimeout(runLandingDemo, 2000);

async function runLandingDemo() {
    // getting a list of all the boxes on map
    const boxes = Array.prototype.slice.call(document.getElementsByClassName('tap-box'));
    const boxOrder = [1, 3, 6, 4, 8, 5];
    let inputElement = x.cloneNode(true);
    for (let i = 0; i < boxOrder.length; i++) {
        console.log(i)
        console.log(boxOrder[i]);
        // console.log(boxes[boxOrder[i]]);
        await new Promise(r => setTimeout(r, i*400));
        boxes[boxOrder[i]].appendChild(inputElement);
        if (inputElement.isEqualNode(x)) {
            inputElement = o.cloneNode(true);
        } else {
            inputElement = x.cloneNode(true);
        }
    }
    const strike = document.createElement('div');
    strike.classList.add('board-horizontal-strike-line');
    strike.classList.add('strike');
    strike.id = 'horizontal-strike-2';
    strike.style.backgroundColor = "#545454";
    await new Promise(r => setTimeout(r, 400));
    document.getElementById('landing-table').appendChild(strike);
    //document.getElementById("horizontal-strike-2").style.width = "170px";
}

//<div class="board-horizontal-strike-line strike" id="horizontal-strike-2"></div>