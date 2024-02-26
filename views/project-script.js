function sixteenGrids(gridNum) {
    let mainDiv = document.querySelector('.main')
    mainDiv.innerHTML = '';
    gridInput.focus();
    let mainDivWidth = 600;
    let mainDivHeight = 600;

    for (let i = 0; i < gridNum; i++) {
        let sketchRow = document.createElement('div')
        let sketchRowWidth = mainDivWidth;
        let sketchRowHeight = mainDivHeight / gridNum;
        sketchRow.style.cssText = "display: flex; box-sizing: border-box; border: 0.2px solid black;"
        sketchRow.style.width = sketchRowWidth + 'px';
        sketchRow.style.height = sketchRowHeight + 'px';
        mainDiv.appendChild(sketchRow)
        for (let j = 0; j < gridNum; j++) {
            let sketchSquare = document.createElement('div')
            let sketchSquareWidth = mainDivWidth / gridNum;
            let sketchSquareHeight = mainDivHeight / gridNum;
            sketchSquare.style.cssText = "box-sizing: border-box; border: 0.2px solid black;"
            sketchSquare.style.width = sketchSquareWidth + 'px';
            sketchSquare.style.height = sketchSquareHeight + 'px';
            sketchSquare.addEventListener("mouseover", function () {
                sketchSquare.style.backgroundColor = '#9606cf';
            });
            sketchRow.appendChild(sketchSquare)
        }
    }
}

let gridInput = document.querySelector('#gridnum');
gridInput.addEventListener('input', function () {
    let gridNum = parseInt(gridInput.value);
    if (isNaN(gridNum) || gridNum < 1 || gridNum > 100) {
        alert('Please enter a valid number between 1 and 100.');
        return;
    }
    sixteenGrids(gridNum);
});