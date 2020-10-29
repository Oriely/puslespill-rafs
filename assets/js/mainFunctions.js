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

function generategrid() {

    let wrapper = document.createElement('div');
    wrapper.setAttribute("id", "wrapper");
    document.body.appendChild(wrapper);
    
    var innerLeft = document.createElement('div');
    innerLeft.setAttribute('id', 'inner-left');
    
    var innerRight = document.createElement('div');
    innerRight.setAttribute('id', 'inner-right');
    
    let _puzzleGrid = document.createElement('div');
    _puzzleGrid.setAttribute('id', 'container-left');
    

    let _puzzlePieces = document.createElement('div');
    _puzzlePieces.setAttribute("id", "container-right")

    
    wrapper.append(innerLeft);

    wrapper.append(innerRight);

    innerLeft.append(_puzzleGrid);
    innerRight.append(_puzzlePieces);

}

function generatePuzzlePieces() {
    // declaring variables

    let _numOfPieces = 401;
    let i;
    let piecesImg = [];


    // push img elements with appropriate name to array.
    for (i = 1; i < _numOfPieces; i++){
        piecesImg.push('<img class="puzzleBox" draggable="true" src="assets/images/puzzleparts/img (' + [i] + ').png">');
    }

    // randomize the array order
    list = piecesImg.sort(() => Math.random() - 0.5);

    // add randomized puzzle pieces to container right
    for (i = 0; i < 400; i++){
        document.getElementById('container-right').innerHTML += list[i];
    }

    // make grid for placing pieces into a completed puzzle
    for(i = 0; i < 400; i++) {
        document.getElementById('container-left').innerHTML += '<span>' + [i] + '</span>';
    }
}

addEventListener("")
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
    generategrid();
    generatePuzzlePieces();
}
