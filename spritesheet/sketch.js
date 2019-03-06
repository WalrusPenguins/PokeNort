var overworldSpritesheet;
bulbasaur = [];

function pokemon() {
    this.x = 0;
    this.y = 0;
    this.xvel = 0;
    this.yvel = 0;
    this.dir = 1;
    
    this.show = function() {
        image(bulbasaur[2*this.dir+(frameCount % 2)],this.x,this.y);
    }
    
    this.update = function() {
        this.x += this.xvel;
        this.y += this.yvel;
    }
}

function preload() {
    overworldSpritesheet = loadImage('http://localhost/OPS.png');
}

function setup() {
    createCanvas(600,600);
    frameRate(5);
    bulbasaurSheet = overworldSpritesheet.get(906, 1161, 64, 128);
    
    c = bulbasaurSheet.get(1,1);
    image(bulbasaurSheet,0,0);
    
    for (var i = 0; i < bulbasaurSheet.height; i++) {
        for (var j = 0; j < bulbasaurSheet.width; j++) {
            b = bulbasaurSheet.get(i,j);
            
            if (b === c) {
                set(i,j,0);
                updatePixels();
            }
        }
    }
    

    for (var i = 0; i < 2; i++) {
        for (var j = 0; j < 4; j++) {
            bulbasaur.push(bulbasaurSheet.get(32*i,32*j,32,32));
        }
    }
    
     b = new pokemon();
}

/*function draw() {
    
    background(60);
    
    b.show();
    b.update();
    Inputs();
    
    
}
*/

function Inputs() {
    if (keyIsDown(37)) {
        b.xvel = -4;
        b.yvel = -0;
        b.dir = 2;
    }
    if (keyIsDown(38)) {
        b.yvel = -4;
        b.xvel = -0;
        b.dir = 0;
    }
    if (keyIsDown(39)) {
        b.xvel = 4;
        b.yvel = -0;
        b.dir = 3;
    }
    if (keyIsDown(40)) {
        b.yvel = 4;
        b.xvel = -0;
        b.dir = 1;
    }  
}
