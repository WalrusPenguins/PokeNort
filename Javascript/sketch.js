//This is just a list of starting points if we want to be more precise in future.
//horizontalPixels = [0,65, 130,195, 259,324,389,454,519,584,649,714,779,844,909];
//verticalPixels = [0,129,258,387,516,645,774,  903,1032,1161,1290]

sheetList = [];
pokemonList = [];
pokemonSpriteList = [];

function pokemon(num) {
    this.x = 32*num;
    this.y = 0;
    this.xvel = 0;
    this.yvel = 0;
    this.dir = 1;
    
    this.show = function(num) {
        image(pokemonSpriteList[num][2*this.dir+(frameCount % 2)],this.x,this.y,35,35);
    }
    
    this.update = function() {
        this.x += this.xvel;
        this.y += this.yvel;
    }
}

function preload() {
    overworldSpritesheet = loadImage('http://localhost/ops-clear.png');

}

function setup() {
    createCanvas(600,600);
    frameRate(8);
    
    for (var i = 0; i < 15; i++) {
        for (var j = 0; j < 11; j++) {
            if (j != 11 || i < 3) {
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
    
    for (var i = 0; i < sheetList.length; i++) {
        pokemonList[i].show(i);
        pokemonList[i].update();
    }
    
    Inputs();
}


//Please ignore how clapped this is idk what else to do hahaha
function Inputs() {
    if (keyIsDown(37)) {
        for (var i = 0; i < sheetList.length; i++) {
            pokemonList[i].xvel = -5;
            pokemonList[i].yvel = 0;
            pokemonList[i].dir = 2;
        }  
    }
    if (keyIsDown(38)) {
        for (var i = 0; i < sheetList.length; i++) {
            pokemonList[i].xvel = 0;
            pokemonList[i].yvel = -5;
            pokemonList[i].dir = 0;
        }  
    }
    if (keyIsDown(39)) {
        for (var i = 0; i < sheetList.length; i++) {
            pokemonList[i].xvel = 5;
            pokemonList[i].yvel = 0;
            pokemonList[i].dir = 3;
        }  
    }
    if (keyIsDown(40)) {
        for (var i = 0; i < sheetList.length; i++) {
            pokemonList[i].xvel = 0;
            pokemonList[i].yvel = 5;
            pokemonList[i].dir = 1;
        }  
    }  
}