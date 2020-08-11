function Snake() {
    this.x = 0;
    this.y = 0;
    this.xSpeed = scale;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];

    // update score label
    this.score = function() {
        ctx.font = "25px Arial";
	    ctx.fillStyle = "black";
	    ctx.fillText("Score: " + this.total.toString(), 5, 25);
    }

    // draw snake on canvas
    this.draw = function() {
        ctx.fillStyle = "#008000";
        for (var i = 0; i < this.tail.length; i++) {
            ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
        }
        // ctx.fillStyle = "#FF0000";
        // ctx.fillRect(this.x, this.y, scale, scale);
        ctx.drawImage(poggers, this.x, this.y, scale, scale);

    }

    // update state of game, location and size of sanke
    this.update = function() {
        // update size of snake
        for (var i=0; i<this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i+1];
        }

        this.tail[this.total -1] = {x: this.x, y: this.y};
        
        // update location of snake head
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        
        // check for boundary
        if (this.x > canvas.width) {
            this.x = 0;
        }
        if (this.x < 0) {
            this.x = canvas.width;
        }
        if (this.y > canvas.height) {
            this.y = 0;
        }
        if (this.y < 0) {
            this.y = canvas.height;
        }
    }

    // check for snake collision
    this.collision = function() {
        for (var i=0; i < this.tail.length; i++) {
            if (this.y === this.tail[i].y && this.x === this.tail[i].x) {
                console.log('Crashed')
                return true
            }
            return false
        }
    }

    // call when player dies
    this.gameover = function() {
        ctx.font = "40px Arial";
	    ctx.fillStyle = "red";
	    ctx.fillText("GAME OVER!", canvas.width/2.5, canvas.height/3);
    }

    // update snake direction based on key events
    this.changeDirection = function(direction) {
        switch(direction){
            case 'Up':
                if (this.ySpeed != scale) {
                    this.xSpeed = 0;
                    this.ySpeed = -scale;
                    break;
                }
                break;
            case 'Down':
                if (this.ySpeed != -scale) {
                    this.xSpeed = 0;
                    this.ySpeed = scale;
                    break;
                }
                break;
            case 'Left':
                if (this.xSpeed != scale) {
                    this.xSpeed = -scale;
                    this.ySpeed = 0;
                    break;
                }
                break;
            case 'Right':
                if (this.xSpeed != -scale) {
                    this.xSpeed = scale;
                    this.ySpeed = 0;
                    break;
                }
                break;
        }
    }

    // detect when snake eats and update accordingly
    this.eat = function(fruit) {
        if (this.x === fruit.x && this.y === fruit.y) {
            this.total++;
            return true;
        }
        return false;
    }
}