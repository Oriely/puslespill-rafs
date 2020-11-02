let _numOfPieces = 100;
let _puzzlePieces = [];
let _puzzlePiecesScrambled = [];


// create elements based on information in paramaters and append them to the "wrapper"/"container" div
function genElem(appendTo, elem, attr, value) {
    if (appendTo != null) {
        if (elem && attr && value) {
            let origin = document.getElementById(appendTo);
            let element = document.createElement(elem);
            element.setAttribute(attr, value);
            origin.append(element);
        }
        return;
    }
    return;
}

// set element attribute and value
function attr(elem, attribute, value) {
    document.getElementById(elem).setAttribute(attribute, value);
}

function randomizeArray(arr) {
    let array = arr;
    array.sort(() => Math.random() - 0.5);
    return array;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function genTemplate()  {
    genElem('wrapper', 'div', 'id', 'inner-top');
    genElem('wrapper', 'div', 'id', 'inner-bottom');
    genElem('inner-top', 'div', 'id', 'container');
    genElem('inner-bottom', 'div', 'id', 'puzzle-pieces');
    genElem('container', 'img', 'id', 'panda');
    attr('panda', 'src', 'assets/images/panda.png');
    attr('panda', 'width', '300px');
    attr('panda', 'draggable', 'false');
    genElem('container', 'div', 'id', 'puzzle-box');
    genElem('puzzle-box', 'div', 'id', 'puzzle-box-inner');
    genElem('container', 'img', 'id', 'pandaB');
    attr('pandaB', 'src', 'assets/images/panda.png');
    attr('pandaB', 'width', '300px');
    attr('pandaB', 'draggable', 'false');
    attr('pandaB', 'onclick', 'finishPuzzle()');
    attr('panda', 'onclick', 'finishPuzzle()');
    for (i = 0; i < _numOfPieces; i++) {
        document.getElementById('puzzle-box-inner').innerHTML += '<span class="puzzleSquare" ondragleave="hoverleave(this);" ondrop="drop(event)" onmouseover="hoverop(this)" onmouseleave="hoverleave(this)" ondragover="allowDrop(event);hoverop(this)"></span>';
    }
}

genTemplate();

function genPuzzlePieces() {
    let puzzlepiecesbox = document.getElementById('puzzle-pieces');

    for (i = 0; i < _numOfPieces; i++) {
        _puzzlePiecesScrambled.push([i]);
        _puzzlePieces.push([i]);
    }
    shuffleArray(_puzzlePiecesScrambled);
    for (i = 0; i < _numOfPieces; i++) {
        puzzlepiecesbox.innerHTML += '<span class="puzzlePiece" ondrop="drop(event)" ondragover="allowDrop(event);"><img class="puzzleimage" id="' + [i] + '" ondragstart="drag(event)" src="assets/images/puzzleparts/img' + _puzzlePiecesScrambled[i] + '.png"></img></span>';
    }
}

function finishPuzzle() {
    let puzzleSquare = document.getElementsByClassName('puzzleSquare');
    let puzzlePiece = document.getElementsByClassName('puzzlePiece');
    let puzzlebox = document.getElementById('puzzle-box');
    let puzzleboxpieces = document.getElementById('puzzle-pieces');

    for (i = 0; i < _numOfPieces; i++) {
        puzzleSquare[i].innerHTML = '';
    }
    for (i = 0; i < _numOfPieces; i++) {
        puzzlePiece[i].innerHTML = '';
    }
    puzzleboxpieces.innerHTML = '';
    for (i = 0; i < _numOfPieces; i++) {
        puzzleSquare[i].innerHTML = '<span ondrop="drop(event)" ondragover="allowDrop(event);"><img class="puzzleimage" id="' + [i] + '" ondragstart="drag(event)" src="assets/images/puzzleparts/img' + _puzzlePieces[i] + '.png"></img></span>';
    }

    for (i = 0; i < _numOfPieces; i++) {
        puzzleboxpieces.innerHTML += '<span class="puzzlePiece" ondrop="drop(event)" ondragover="allowDrop(event);"></span>';
    }

}

function hoverop(elem) {
    elem.style.opacity = "0.8";
    console.log()
}

function hoverleave(elem) {
    elem.style.opacity = "1";
}

function genPieces() {}

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
    if (ev.currentTarget.querySelectorAll('img').length > 0) {
        //   console.log(ev.currentTarget + ' | ev current target')
        //   console.log(ev.target + ' | ev target ')
    } else {
        // console.log(ev.currentTarget + ' | event. current target')
        // console.log(ev.target + ' | event.target ')

        // console.log(ev.target.id1)
        ev.target.append(document.getElementById(data));
    }
}

// load functions
window.onload = function() {
    genPuzzlePieces();
}



// function genTemplate() {
//     genElem('wrapper', 'div', 'id', 'inner-top');
//     genElem('wrapper', 'div', 'id', 'inner-bottom');
//     genElem('inner-top', 'div', 'id', 'inner-top-left');
//     genElem('inner-top', 'div', 'id', 'inner-top-center');
//     genElem('inner-top', 'div', 'id', 'inner-top-right');
//     genElem('inner-bottom', 'div', 'id', 'puzzle-pieces');
//     genElem('inner-top-center', 'div', 'id', 'puzzle-box');
//     genElem('puzzle-box', 'div', 'id', 'puzzle-box-inner');
//     genElem('inner-top-left', 'span', 'id', 'test');
//     genElem('inner-top-left', 'img', 'id', 'panda');
//     attr('panda', 'src', '/assets/images/panda.png'); 
//     attr('panda', 'width', '300px');

//     attr('pandaB', 'src', '/assets/images/panda.png'); 
//     attr('pandaB', 'width', '300px'); 
//     for (i = 0; i < _numOfPieces; i++) {
//         document.getElementById('puzzle-box-inner').innerHTML += '<span ondrop="drop(event)" ondragover="allowDrop(event)"></span>';
//     }
// }


// function generatePuzzlePieces() {
//     // declaring variables
//     let i;
//     let _leftSide = document.getElementById('puzzle-left');
//     let _rightSide = document.getElementById('puzzle-right');
//     // push img elements with appropriate name to array.
//     for (i = 0; i <= _numOfPieces; i++){
//         _puzzlePieces.push('<img class="puzzleBox" id="b' + [i] + '" ondragstart="drag(event)" draggable="true" src="assets/images/puzzleparts/img (' + [i] + ').png">');
//         _puzzlePiecesScrambled.push('<img class="puzzleBox" id="b' + [i] + '" ondragstart="drag(event)" draggable="true" src="assets/images/puzzleparts/img (' + [i] + ').png">');
//     }

//     // randomize the array with img elements and add img elements to "container-right"
//     list = randomizeArray(_puzzlePiecesScrambled);
//     for (i = 0; i <= _numOfPieces; i++) {
//         _rightSide.innerHTML += _puzzlePiecesScrambled[i];
//     }

// }

// let _leftSide = document.getElementById('puzzle-left');
// let _rightSide = document.getElementById('puzzle-right');

// document.getElementById('generatePuzzle').innerHTML = 'Generate Puzzle';
// // make the grid that you place the puzzle pieces(img elements) into to make a completed puzzle
// for(i = 0; i <= _numOfPieces; i++) {
//     _leftSide.innerHTML += '<span class="puzzlebBox-left id="g' + [i] + '"  ondrop="drop(event)" ondragover="allowDrop(event)"></span>';
//     _rightSide.innerHTML += '<span class="puzzlebBox-left id="g' + [i] + '"  ondrop="drop(event)" ondragover="allowDrop(event)"></span>';
// }


// function knappersr()  {1
//     let i;
//     let piecesImgs = [];
//     console.log('22');
//     document.getElementById('puzzle-left').innerHTML = '';
//     document.getElementById('puzzle-right').innerHTML = '';
//     for (i = 0; i <= _numOfPieces; i++) {
//         document.getElementById('puzzle-right').innerHTML += '<span class="puzzlebBox-left id="g' + [i] + '"  ondrop="drop(event)" ondragover="allowDrop(event)"></span>';
//     }
//     for (i = 0; i <= _numOfPieces; i++){
//         piecesImgs.push('<span class="puzzlebBox-left id="g' + [i] + '"  ondrop="drop(event)" ondragover="allowDrop(event)"><img class="puzzleBox" id="b' + [i] + '" ondragstart="drag(event)" draggable="true" src="assets/images/puzzleparts/img (' + [i] + ').png"></span>');
//     }
//     for (i = 0; i <= _numOfPieces; i++) {

//         document.getElementById('puzzle-left').innerHTML += piecesImgs[i];
//     }
// }


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
