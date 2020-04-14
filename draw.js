const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
var mm = document.getElementById("mm");
var hannah = document.getElementById("h");
var peach = document.getElementById("peach");
const scale = 50;
const interval = 150;
const rows = canvas.height / scale;
const cols = canvas.width / scale;

var snake;

(function setup() {
    snake = new Snake();
    fruit = new Fruit();
    fruit.pickLocation();
    console.log(fruit);

    window.setInterval(() =>{
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        fruit.draw();
        snake.update();
        snake.draw();
        snake.score();

        if (snake.eat(fruit)){
            fruit.pickLocation();
        }

    }, interval);
}());

window.addEventListener('keydown', ((event) => {
    const direction = event.key.replace('Arrow', '');
    console.log(direction);
    snake.changeDirection(direction);
}))
