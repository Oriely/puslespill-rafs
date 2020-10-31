let _numOfPieces = 399;
let _puzzlePieces =  [];
let _puzzlePiecesScrambled = []
let _puzzlePiecesAnswer = [];


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

function generatePuzzlePieces() {
    // declaring variables
    let i;
    let _leftSide = document.getElementById('puzzle-left');
    let _rightSide = document.getElementById('puzzle-right');
    // push img elements with appropriate name to array.
    for (i = 0; i <= _numOfPieces; i++){
        _puzzlePieces.push('<img class="puzzleBox" id="b' + [i] + '" ondragstart="drag(event)" draggable="true" src="assets/images/puzzleparts/img (' + [i] + ').png">');
        _puzzlePiecesScrambled.push('<img class="puzzleBox" id="b' + [i] + '" ondragstart="drag(event)" draggable="true" src="assets/images/puzzleparts/img (' + [i] + ').png">');
    }
    
    // randomize the array with img elements and add img elements to "container-right"
    list = randomizeArray(_puzzlePiecesScrambled);
    for (i = 0; i <= _numOfPieces; i++) {
        _rightSide.innerHTML += _puzzlePiecesScrambled[i];
    }

}

function createLayout() {
    createElemWithAttr(_injectDiv, 'div', 'id', "inner-left");

    createElemWithAttr(_injectDiv, 'div', 'id', "inner-right");

    createElemWithAttr("inner-left", 'div', 'id', "puzzle-left");

    createElemWithAttr("inner-right", 'div', 'id', "puzzle-right");
    
    createElemWithAttr('wrapper', 'button', 'id', 'cheat');

    createElemWithAttr('wrapper', 'button', 'id', 'generatePuzzle');
    
    let _leftSide = document.getElementById('puzzle-left');
    document.getElementById('generatePuzzle').innerHTML = 'Generate Puzzle';
    // make the grid that you place the puzzle pieces(img elements) into to make a completed puzzle
    for(i = 0; i <= _numOfPieces; i++) {
        _leftSide.innerHTML += '</span>';
    }

}


function checkAnswer() {
    let i;
    let imgs = document.querySelector('.puzzleBox');


    for(i = 1; i < _numOfPieces; i++) {
        _puzzlePiecesAnswer.push(imgs[i].innerHTML);
    }

    if(_puzzlePiecesAnswer === _puzzlePieces) {
        console.log('help');
    }
    else {
        console.log('no');
    }
}


function knappersr()  {
    let i;
    let piecesImgs = [];
    console.log('22');
    document.getElementById('puzzle-left').innerHTML = '';
    for (i = 0; i <= _numOfPieces; i++){
        piecesImgs.push('<span class="puzzlebBox-left id="g' + [i] + '"  ondrop="drop(event)" ondragover="allowDrop(event)"><img class="puzzleBox" id="b' + [i] + '" ondragstart="drag(event)" draggable="true" src="assets/images/puzzleparts/img (' + [i] + ').png"></span>');
    }
    for (i = 0; i <= _numOfPieces; i++) {

        document.getElementById('puzzle-left').innerHTML += piecesImgs[i];
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
createLayout();

window.onload = function() {
    document.getElementById('generatePuzzle').addEventListener('click', function() {
        generatePuzzlePieces();
    });
    document.getElementById('cheat').addEventListener('click', function() {
        knappersr();

    });
    
    
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