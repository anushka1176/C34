//Create variables here

var dog,dogImage,happyDogImage, happyDog, database, foodS, foodStock;


function preload()
{
  //load images here
    dogImage = loadImage("images/dogImage.png");
    happydogImage = loadImage("images/happydogImage.png");
}

function setup() {
  createCanvas(500, 500);
  database=firebase();
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
  foodStock.set(20);

  dog = createSprite(300,100); 
  dog.addImage(dogImage);

  
}


function draw() {  
  background("green");

if(foodS==undefined){
  textSize(20);
  fill(255);
  text("Note:Press Up Arrow to Drago Milk",50,50);
  text("Food Remaining:"+foodStock,150,10)
}

  if(keyWent(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImage);

    if(keyWent(UP_ARROW)){
      writeStock(foodS);
      dog.addImage(dogImage);
  }

  if(foodS===0){
    foodS=20;
  }
  drawSprites();
  //add styles here

}

} 

function writeStock(x){
  if(x<=0){
  x=0;
}
else{
  x=x-1;
}
  database.ref("/").update({
    Food:x
  });
}
  function readStock(data){
    foodS=data.val();
  }
