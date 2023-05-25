var groundImg,ground;
var personImg,person;
var sangeeImg,sangee;
var lineImg,line;


function preload(){
  personImg = loadImage("apple.png");
  groundImg = loadImage("road.jpg");
  sangeeImg = loadImage("sangee.png");
  lineImg = loadImage("line.png");

}

function setup() {
    createCanvas(750,550);
    person = createSprite(300,450);
    ground = createSprite(300,300);
    sangee = createSprite(200,450);
    line = createSprite(250,600);
    person.addImage("person",personImg); 
    ground.addImage("ground",groundImg);
    sangee.addImage("sangee",sangeeImg);
    line.addImage("line",lineImg);
    line.visible = true;
   
    ground.scale=1.5
    sangee.scale=1.5
    person.velocityX= -3
    ground.velocityX=-3
    person.scale=0.50
    person.depth = 3
    sangee.depth = 2
    ground.depth = 1

  sangee.visible=false  
 //person.debug=true
 //line.debug=true
 
}

function draw() {
    background(200); 

    if(keyDown("up_arrow")){
      person.y-=7
    }  
    if(keyDown("right_arrow")){
      person.x+=7
    }
    if(keyDown("left_arrow")){
      person.x-=7
    }
    if(keyDown("down_arrow")){
      person.y+=7
    }
    if(frameCount%120==0){
      sangee = createSprite(700,100,50,50)

      sangeeImg = loadImage("sangee.png");
      sangee.addImage("sangee",sangeeImg);
      sangee.y= Math.round(random(50,700))
      sangee.velocityX=-2
      sangee.lifetime=450
    }
   
    if(frameCount%140==0){
      sangee = createSprite(700,100,50,50)

      sangeeImg = loadImage("sangee.png");
      sangee.addImage("sangee",sangeeImg);
      sangee.y= Math.round(random(50,700))
      sangee.velocityX=-2
      sangee.lifetime=450
    
    }
    if(frameCount%160==0){
      sangee = createSprite(700,100,50,50)

      sangeeImg = loadImage("sangee.png");
      sangee.addImage("sangee",sangeeImg);
      sangee.y= Math.round(random(50,700))
      sangee.velocityX=-2
      sangee.lifetime=450
    
    }
    if(ground.x<300){
      ground.x=400
    }
    if(sangee.isTouching(person))  {
      person.velocityY=0
      person.velocityX=0
      sangeeImg = loadImage("sangee.png");
      sangee.addImage("sangee",sangeeImg);
      sangee.scale=20
      
      

    }
      
    
    drawSprites()
}