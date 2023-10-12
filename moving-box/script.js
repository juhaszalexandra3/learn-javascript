const window_width = 600;
const window_height = 300;

let snake_x = Math.floor(window_width/2);
let snake_y = Math.floor(window_height/2);
let box_size = 20;
let snake_step = box_size/2;

// generates a random integer [0, end]
function randInt(end) {
    return Math.floor(Math.random()*(end+1));
}

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

window.addEventListener('keydown',this.check,false);

function check(e) {
    //alert(e.keyCode);
    //draw(e);
    //moveSnake(e.keyCode);

    // draw white
    ctx.fillStyle = "white";
    ctx.fillRect(snake_x, snake_y, 20, 20);
    // determine snake direction
    if(e.keyCode == 37) {
        snake_x -= snake_step;
    } else if(e.keyCode == 38) {
        snake_y -= snake_step;
    } else if(e.keyCode == 39) {
        snake_x += snake_step;
    } else if(e.keyCode == 40) {
        snake_y += snake_step;
    }
    ctx.fillStyle = `rgb(${randInt(255)}, ${randInt(255)}, ${randInt(255)}, 0.5)`;
    ctx.fillRect(snake_x, snake_y, box_size, box_size);
}

canvas.addEventListener("click", this.draw, false);

function draw(e) {
    ctx.fillStyle = `rgb(${randInt(255)}, ${randInt(255)}, ${randInt(255)}, 0.5)`
    ctx.fillRect(randInt(600), randInt(300), 20, 20);
}