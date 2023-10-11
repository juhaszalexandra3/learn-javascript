
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// generates a random integer [0, end]
function randInt(end) {
    return Math.floor(Math.random()*(end+1));
}

window.addEventListener('keydown',this.check,false);

function check(e) {
    //alert(e.keyCode);
    draw(e);
}

canvas.addEventListener("click", this.draw, false);

function draw(e) {
    ctx.fillStyle = `rgb(${randInt(255)}, ${randInt(255)}, ${randInt(255)}, 0.5)`
    ctx.fillRect(randInt(600), randInt(300), 50, 50);
}