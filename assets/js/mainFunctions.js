
let _numOfPieces = 399;
let piecesImg = [];

// div

let _injectDiv = 'wrapper';

// create elements based on information in paramaters and append them to the "wrapper"/"container" div
function createElemWithAttr(appendTo, elem, attr, value) {
    if(appendTo != null) {
        if(elem && attr && value) {
            let origin = document.getElementById(appendTo);
            let element = document.createElement(elem);
            element.setAttribute(attr, value);
            origin.append(element);
        } else {
            return console.log('missing parameters');
        }
    } return;
}

function randomizeArray(arr) {
    let array = arr;
    array.sort(() => Math.random() - 0.5);
    return array;
}

function generategrid() {

    createElemWithAttr(_injectDiv, 'div', 'id', "inner-left");

    createElemWithAttr(_injectDiv, 'div', 'id', "inner-right");

    createElemWithAttr("inner-left", 'div', 'id', "puzzle-left");

    createElemWithAttr("inner-right", 'div', 'id', "puzzle-right");

}
generategrid();

function generatePuzzlePieces() {
    // declaring variables
    let i;

    let _leftSide = document.getElementById('puzzle-left');
    let _rightSide = document.getElementById('puzzle-right');

    // push img elements with appropriate name to array.
    for (i = 0; i <= _numOfPieces; i++){
        piecesImg.push('<img class="puzzleBox" id="b' + [i] + '" ondragstart="drag(event)" draggable="true" src="assets/images/puzzleparts/img (' + [i] + ').png">');
    }


    // make the grid that you place the puzzle pieces(img elements) into to make a completed puzzle
    for(i = 0; i <= _numOfPieces; i++) {
        _leftSide.innerHTML += '<span id="g' + [i] + '"  ondrop="drop(event)" ondragover="allowDrop(event)"></span>';
    }
    
    // randomize the array with img elements and add img elements to "container-right"
    list = randomizeArray(piecesImg);
    for (i = 0; i <= _numOfPieces; i++) {
        _rightSide.innerHTML += piecesImg[i];
    }
}

//Drag + drop secion
function allowDrop(ev) {
    ev.preventDefault(); 
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }
// load functions
window.onload = function() {

    generatePuzzlePieces();
}

















// generate divs that are going to contain the finished puzzle
// function genPuzzleCanvas() {
    
//     let container = document.createElement('canvas');
//     container.setAttribute('id', 'container');
//     let _puzzleImage = new Image();
//     _puzzleImage.src = 'assets/images/puzzleimage.png';

//     _puzzleImage.onload = (function () {
//         let piece =  document.createElement('span');
//         let _puzzlePieces = 100;
//         let width = this.width;
//         let height = this.height;
//         let i;
//         let _puzzleSqHeight = _puzzleImage.naturalHeight / 66;
//         let _puzzleSqWidth = _puzzleImage.naturalWidth / 66; 
//         let ctx = container.getContext("2d");
// ;
//         container.width = _puzzleImage.width;
//         container.height = _puzzleImage.height;
//         document.body.appendChild(container);

//         document.body.appendChild(container);
//         ctx.drawImage(_puzzleImage, 0, 0, width, height);

//         console.log(this.width);
//         console.log(this.height);
//         console.log(_puzzleSqHeight);
//         console.log(_puzzleSqWidth)
//     });
//