//This is just a list of starting points if we want to be more precise in future.
//horizontalPixels = [0,65, 130,195, 259,324,389,454,519,584,649,714,779,844,909];
//verticalPixels = [0,129,258,387,516,645,774,  903,1032,1161,1290]

sheetList = [];
pokemonList = [];
pokemonSpriteList = [];
positionList = [];

function pokemon(num) {
    this.x = 8*num;
    this.y = 0;
    this.xvel = 0;
    this.yvel = 0;
    this.dir = 1;
    
    for (var i = 0; i < 8; i++) {
        positionList.push([this.x,this.y,this.dir]);
    }
    
    this.show = function(num) {
        image(pokemonSpriteList[num][2*this.dir+(frameCount % 2)],this.x,this.y);
    }
    
    this.update = function(num) {
        this.x = positionList[8*num-1][0];
        this.y = positionList[8*num-1][1];
        this.dir = positionList[8*num-1][2];
    }
    
    this.movement = function() {
        this.x += this.xvel;
        this.y += this.yvel;
        if (this.yvel != 0 || this.xvel != 0) {
            positionList.unshift([this.x,this.y,this.dir]);
            positionList.pop();
        }
    }
}

function preload() {
    overworldSpritesheet = loadImage('Assets/ops-final.png');
}

function setup() {
    createCanvas(400,400);
    frameRate(8);
    
    for (var j = 0; j < 11; j++) {
        for (var i = 0; i < 15; i++) {    
            if (j != 10 || i < 3) {
                sheetList.push(overworldSpritesheet.get(65*i, 129*j, 64, 128));
            }
        }
    }
    
    for (var k = 0; k < sheetList.length; k++) {
        pokemonSpriteList[k] = [];
        for (var i = 0; i < 2; i++) {
            for (var j = 0; j < 4; j++) {
                pokemonSpriteList[k].push(sheetList[k].get(32*i,32*j,32,32));
            }
        }
        pokemonList.push(new pokemon(k));
    }
}

function draw() {
    
    background(60);
    
    pokemonList[0].movement();
    pokemonList[0].show(0);

    for (var i = 1; i < pokemonList.length; i++) {
        pokemonList[i].show(i);
        pokemonList[i].update(i);
    }
    
    Inputs();
}

//Please ignore how clapped this is idk what else to do hahaha
function Inputs() {
    if (keyIsDown(37)) {
        pokemonList[0].xvel = -4;
        pokemonList[0].yvel = 0;
        pokemonList[0].dir = 2;
    }
    if (keyIsDown(38)) {
        pokemonList[0].xvel = 0;
        pokemonList[0].yvel = -4;
        pokemonList[0].dir = 0;
    }
    if (keyIsDown(39)) {
        pokemonList[0].xvel = 4;
        pokemonList[0].yvel = 0;
        pokemonList[0].dir = 3;
    }
    if (keyIsDown(40)) {
        pokemonList[0].xvel = 0;
        pokemonList[0].yvel = 4;
        pokemonList[0].dir = 1;
    }  
}