const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var rain
function preload(){
    
}                  

function setup(){
    var canvas = createCanvas(420,420)
    engine = Engine.create();
    world = engine.world;
    
    rain = new Rain(200,10,5,5)
}
function draw(){
    Engine.update(engine);
    rain.display();
   
}   

