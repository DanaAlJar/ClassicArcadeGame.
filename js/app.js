// Enemies our player must avoid
var Enemy = function(x,y) {
    this.x = x;
    this.y = y; // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x += 100*dt;// You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
     if (this.x >= 505) {
        this.x = 0;
    }
        // Check for collision between enemies and player
    if(player.x + 30 > this.x &&  player.x < this.x + 60  && player.y + 60  > this.y  && player.y < this.y + 30 ) {
        player.x = 200;
        player.y = 320;
    }


};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.x = 200;
    this.y = 320;
    this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function() {
    // setting up the boundries 
    if (this.y > 380) {
        this.y = 380;
    }

    if (this.x > 400) {
        this.x = 400;
    }

    if (this.x < 0) {
        this.x = 0;
    }

    // Check if the player reaches the water and win the game
    if (this.y < 0) {
        this.x = 200;
        this.y = 320;
    }
};


Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(keypress) {
    if(keypress == 'left' && this.x > 0) {
        this.x -= 30;
    }
    if(keypress == 'up' && this.y > 4) {
        this.y -= 30;
    }
    if(keypress == 'right' && this.x < 450) {
        this.x += 30;
    }
    if(keypress == 'down' && this.y < 450) {
        this.y += 30;
    }
};
 
 


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
// Now instantiate your objects.
var enemy1 = new Enemy(80,90);
var enemy2 = new Enemy(60,140);
var enemy3 = new Enemy(100,60);
var enemy4 = new Enemy(90,230);

var allEnemies = [enemy1, enemy2, enemy3,enemy4];
// Place all enemy objects in an array called allEnemies
var player = new Player();// Place the player object in a variable called player




// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

