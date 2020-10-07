const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box1,box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;


    box1 = new Box(200,100,30,40);
    box2 = new Box(215,50,50,20);
    ground = new Ground (200,380,400,20)

}

function draw(){
    background('pink');
    Engine.update(engine);
   


box1.display();
box2.display();
ground.display();

    
}