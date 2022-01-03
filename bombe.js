
let bombTile = randomBombTile();
console.log('Bomb is in '+ bombTile);

let score = 0;
let win = false;

function getRandomInt(min, max) {

    return Math.floor((max-min)*Math.random() +min);
}

function randomBombTile() {
    let bombRow = getRandomInt(0, 4);
    let bombColumn = getRandomInt(0, 4);

    return '#tile-'+ bombRow +'-'+ bombColumn;
}

function doClick(id) {
    console.log('clicked on '+ id);

    let tile = document.querySelector(id);

    if (win == false) {
        if (tile.style.backgroundColor == '') {
            score++;

            console.log('Tile dug');
            document.querySelector('#score').innerHTML = "Essais : "+score;
        }

        if (id == bombTile) {
            tile.style.backgroundColor = '#f00';
            tile.src = './bombTile.png';

            win = true;
            document.querySelector('#rainbow').innerHTML = 'YEAH! BRAVO!';
        }
        else {
            tile.style.backgroundColor = '#0f0';
            tile.src = './searchedTile.png';
        }
    }
}