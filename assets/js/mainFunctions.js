

// generate divs that are going to contain the finished puzzle
function genPuzzleCanvas() {

    const container = document.createElement('div');
    container.setAttribute('id', 'container');
    let piece =  document.createElement('span');
    let amountOfPieces = 100;
    let i;

    document.body.appendChild(container);

    for (i = 0; i < amountOfPieces; i++) {
        container.innerHTML += '<span id="canvas-piece">10</span>';

    }
        


}

genPuzzleCanvas();

//
    