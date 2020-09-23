//creating variables
var car1,car2,car3,car4,wall1,wall2,wall3,wall4,carA,carB,carC,carD,
    speed1,weight1,
    speed2,weight2,
    speed3,weight3,
    speed4,weight4,
    deform1,deform2,deform3,deform4;
//loading images
function preload(){
  carImg=loadImage("car.png");
  wall=loadImage("wall.jpg");
}

function setup() {
  //creating canvas
  createCanvas(1200,800);
  //changing rectMode to center
  rectMode(CENTER);
  //giving speeds and weights to cars
  speed1=random(35,80);
  weight1=random(400,2500);
  speed2=random(35,80);
  weight2=random(400,2500);
  speed3=random(35,80);
  weight3=random(400,2500);
  speed4=random(35,80);
  weight4=random(400,2500);
  //calculating deformation
  deform1=(0.5*weight1*sq(speed1))/22500;
  deform2=(0.5*weight2*sq(speed2))/22500;
  deform3=(0.5*weight3*sq(speed3))/22500;
  deform4=(0.5*weight4*sq(speed4))/22500;
  //creating sprites
  carA=createSprite(90, 100, 0, 50)
  carB=createSprite(90, 300, 0, 50)
  carC=createSprite(90, 500, 0, 50)
  carD=createSprite(90, 700, 0, 50)
  car1=createSprite(90, 100, 0, 50);
  car2=createSprite(90, 300, 0, 50);
  car3=createSprite(90, 500, 0, 50);
  car4=createSprite(90, 700, 0, 50);
  //adding images, scaling, rotating the cars
  car1.addImage("car",carImg);
  car2.addImage("car",carImg);
  car3.addImage("car",carImg);
  car4.addImage("car",carImg);
  car4.scale=car3.scale=car2.scale=car1.scale=0.2;
  car4.rotation=car3.rotation=car2.rotation=car1.rotation=180;
  //giving speed to cars
  car1.velocityX=speed1;
  car2.velocityX=speed2;
  car3.velocityX=speed3;
  car4.velocityX=speed4;
  //creating walls and adding images to them
  wall1=createSprite(1150,100,50,50);
  wall2=createSprite(1150,300,50,50);
  wall3=createSprite(1150,500,50,50);
  wall4=createSprite(1150,700,50,50);
  wall1.addImage("wall",wall);
  wall2.addImage("wall",wall);
  wall3.addImage("wall",wall);
  wall4.addImage("wall",wall);
}

function draw() {
  //creating background and the partitioning rectangles
  background("lightblue");  
  rect(width/2,200,width,10);
  rect(width/2,400,width,10);
  rect(width/2,600,width,10);
  //calling hit() function
  hit(wall1,car1);
  hit(wall2,car2);
  hit(wall3,car3);
  hit(wall4,car4);
  //showing Press F5 to test Other Cars ©
  textSize(20);
  fill("blue");
  text("Press F5 to test Other Cars ©",500,50);
  //checking for deformation
  if(car1.x==1055){
     if(deform1>=180){
        fill("red");
        text("⬅lethal for passengers",120,105);
        carA.shapeColor=color(255,0,0);
     }else if(deform1>80&&deform1<180){
        fill("yellow");
        text("⬅average for passengers",120,105);
        carA.shapeColor=color(230,230,0);
     }else if(deform1<=80){
        fill("green");
        text("⬅good for passengers",120,105);
        carA.shapeColor=color(0,255,0);
     }
  }
  if(car2.x==1055){
     if(deform2>=180){
        fill("red");
        text("⬅lethal for passengers",120,305);
        carB.shapeColor=color(255,0,0);
     }else if(deform2>80&&deform2<180){
        fill("yellow");
        text("⬅average for passengers",120,305);
        carB.shapeColor=color(230,230,0);
     }else if(deform2<=80){
        fill("green");
        text("⬅good for passengers",120,305);
        carB.shapeColor=color(0,255,0);
     }
  }
  if(car3.x==1055){
     if(deform3>=180){
        fill("red");
        text("⬅lethal for passengers",120,505);
        carC.shapeColor=color(255,0,0);
     }else if(deform3>80&&deform3<180){
        fill("yellow");
        text("⬅average for passengers",120,505);
        carC.shapeColor=color(230,230,0);
     }else if(deform3<=80){
        fill("green");
        text("⬅good for passengers",120,505);
        carC.shapeColor=color(0,255,0);
     }
  }
  if(car4.x==1055){
     if(deform4>=180){
        fill("red");
        text("⬅lethal for passengers",120,705);
        carD.shapeColor=color(255,0,0);
     }else if(deform4>80&&deform4<180){
        fill("yellow");
        text("⬅average for passengers",120,705);
        carD.shapeColor=color(230,230,0);
     }else if(deform4<=80){
         fill("green");
         text("⬅good for passengers",120,705);
       carD.shapeColor=color(0,255,0);
     }
  }
  //drawing sprites
  drawSprites();
}
//creating function hit()
function hit(object1,object2){
  if((object1.x+270)-object2.x<=(object1.width+object2.width)/2){
    object2.velocityX=0;
    object2.x=1055;
  }
}