const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



var engine,world;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  box1 = new BlueBox(500,360,20,30);
  box2 = new BlueBox(520,360,20,30);
  box3 = new BlueBox(540,360,20,30);
  box4 = new BlueBox(560,360,20,30);
  box5 = new BlueBox(580,360,20,30);
  box6 = new BlueBox(600,360,20,30);
  box7 = new BlueBox(620,360,20,30);

  box8 = new RedBox(520,330,20,30);
  box9 = new RedBox(540,330,20,30);
  box10 = new RedBox(560,330,20,30);
  box11 = new RedBox(580,330,20,30);
  box12 = new RedBox(600,330,20,30);

  box13 = new GreenBox(540,310,20,30);
  box14 = new GreenBox(560,310,20,30);
  box15 = new GreenBox(580,310,20,30);

  box16 = new YellowBox(560,280,20,30);





  box17 = new BlueBox(500,135,20,30);
  box18 = new BlueBox(520,135,20,30);
  box19 = new BlueBox(540,135,20,30);
  box20 = new BlueBox(560,135,20,30);
  box21 = new BlueBox(580,135,20,30);

  box22 = new GreenBox(520,105,20,30);
  box23 = new GreenBox(540,105,20,30);
  box24 = new GreenBox(560,105,20,30);




  box25 = new RedBox(540,75,20,30);


 

  ball = new Ball(0,0,50);

  spring = new Projectile(ball.body,{x:200,y:200});

  ground = new Platform(400,390,800,20);

  groundHovering = new Platform(550,160,200,20);
  
}

function draw() {
  background(247, 223, 178);
  Engine.update(engine);  

 
  
   

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();

    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();

    box12.display();
    box13.display();
    box14.display();
    box15.display();

    box16.display();
    box17.display();
    box18.display();

    box19.display();
    box20.display();

    box21.display();
  
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    
    
    ball.display();
    spring.display();
    ground.display();
    groundHovering.display();

  }

  

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  spring.release();
}

function keyPressed(){
  if(keyCode === 32){
    spring.attach(ball.body);
  }

 
}