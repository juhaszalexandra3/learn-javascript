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

// draw initial position
draw(snake_x, snake_y);

window.addEventListener('keydown',this.check,false);

function check(e) {
    // paint white
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
    // move box
    draw(snake_x, snake_y);
}

function draw(x_pos, y_pos) {
    ctx.fillStyle = `rgb(${randInt(255)}, ${randInt(255)}, ${randInt(255)}, 0.5)`
    ctx.fillRect(x_pos, y_pos, 20, 20);
}