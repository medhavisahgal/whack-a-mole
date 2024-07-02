let curMoleTile;
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
    for (let i = 0; i < 9; i++) {``
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.classList.add("tile");
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setMole, 1000);
}
function getrandomtile() {
    let rantile = Math.floor(Math.random() * 9);
    return rantile.toString();
}
function setMole() {
    if (curMoleTile) {
        curMoleTile.innerHTML = "";
    }
    let mole = document.createElement("img");
    mole.src = "./mole.png";
    mole.addEventListener("click", playwhackSound);
    let randomTile = getrandomtile();
    curMoleTile = document.getElementById(randomTile);
    curMoleTile.appendChild(mole);
}
function selectTile() {
    if (this === curMoleTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString();
        playwhackSound();
    }
}
function playwhackSound() {
    let whackSound = document.getElementById('whackSound');
    whackSound.play();
}