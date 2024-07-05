let curMoleTile;
let curBombTile;
let gameOver = false;
window.onload = function () {
    const cursor = document.querySelector(".cursor");
    window.addEventListener("mousemove", (e) => {
        cursor.style.left = e.pageX + "px";
        cursor.style.top = e.pageY + "px";
    });
    window.addEventListener("mousedown", () => {
        cursor.classList.add("active");
    });
    window.addEventListener("mouseup", () => {
        cursor.classList.remove("active");
    });
    setgame();
}
let score = 0;
function setgame() {
    for (let i = 0; i < 9; i++) {
        ``
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        tile.classList.add("tile");
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setMole, 1000);
    setInterval(setBomb, 2000);
}
function getrandomtile() {
    let rantile = Math.floor(Math.random() * 9);
    return rantile.toString();
}
function setMole() {
    if (gameOver) return;
    if (curMoleTile) {
        curMoleTile.innerHTML = "";
    }
    let mole = document.createElement("img");
    mole.src = "./mole.png";
    mole.addEventListener("click", playwhackSound);
    let randomTile = getrandomtile();
    if (curBombTile && curBombTile.id === randomTile) {
        return;
    }
    curMoleTile = document.getElementById(randomTile);
    curMoleTile.appendChild(mole);
}
function setBomb() {
    if (gameOver) return;
    if (curBombTile) {
        curBombTile.innerHTML = "";
    }
    let bomb = document.createElement("img");
    bomb.src = "./bomb.png";
    bomb.addEventListener("click", playBombSound);
    let randomTile = getrandomtile();
    if (curMoleTile && curMoleTile.id === randomTile) {
        return;
    }
    curBombTile = document.getElementById(randomTile);
    curBombTile.appendChild(bomb);
}
function selectTile() {
    if (gameOver) return;
    if (this === curMoleTile) {
        score += 10;
        document.getElementById("score").innerText = " Score : " + score.toString();
        playwhackSound();
    }
    else if (this === curBombTile) {
        document.getElementById("score").innerText = "Game Over : " + score.toString();
        gameOver = true;
        playBombSound();
    }
}


function playwhackSound() {
    if (gameOver) return;
    let whackSound = document.getElementById('whackSound');
    whackSound.play();
}
function playBombSound() {
    if (gameOver) return;
    let bombSound = document.getElementById('BombSound');
    bombSound.play();
}