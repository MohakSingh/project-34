var dog, happyDog, database, foodS, foodStock;


function preload()
{
  dogImg= loadImage("images/dogImg.png");
  happyDogImg= loadImage("images/dogImg.png");
}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(250,250,40,40);
  dog.addImage(dogImg);
  dog.scale=0.2;
  foodStock= database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDogImg);

  textSize(20);
  text("Press up arrow key to feed the dog milk");
}
readStock();
writeStock();

  drawSprites();
  //add styles here

}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}


