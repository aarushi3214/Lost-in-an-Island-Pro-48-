// gameStates

var PLAY = 1;
var END = 0;
var gameState = PLAY;
var hi = 0;
// sprites
var kevin, kevin_running, kevin_collided;
var ground, invisibleGround, groundImage;
// obstacales
var birdsGroup, birdsImage;
var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;
// scores and loading Images
var score;
var gameOverImg, restartImg;
var jumpSound, checkPointSound, dieSound;
var bg;
var fireImg, monsterImg, scytheImg1, scytheImg2;
var ballHammerImg, spikesImg;
var scoreElement;
var woodenBg,eveningBg, mountainBg, marsBg;
var kevin_attack;
var lifeElement;
var level1;
var castle,castleImg;
var lifes, lifeCount;
var gameSound;
var heading = "KEVIN'S ADVENTURE";
var head;
var instruct = "Hey!Let's see the story behind our game and the instructions👇";
var inst, inst1,inst2,inst3,inst4,inst5,inst6;
var instruct1 = "👉 Kevin is lost in an island.";
var instruct2 = "👉 He has to find his way out to reach his final destination";
var instruct3 = "👉 You have 3 lives.";
var instruct4 = "👉 You can jump using the space key.";
var instruct5 = "👉 So Are you ready to play the game??";
var instruct6 = "👉 Let's reach to our final destination.";

function preload() {
    kevin_running = loadAnimation("img/character/Walk (1).png", "img/character/Walk (2).png", "img/character/Walk (3).png", "img/character/Walk (4).png", "img/character/Walk (5).png", "img/character/Walk (6).png", "img/character/Walk (7).png", "img/character/Walk (8).png", "img/character/Walk (9).png", "img/character/Walk (10).png");
    kevin_collided = loadAnimation("img/character/Dead (1).png", "img/character/Dead (2).png", "img/character/Dead (3).png", "img/character/Dead (4).png", "img/character/Dead (5).png", "img/character/Dead (6).png", "img/character/Dead (7).png", "img/character/Dead (8).png", "img/character/Dead (9).png", "img/character/Dead (10).png");
    kevin_attack = loadAnimation("img/character/Attack (1).png",
        "img/character/Attack (2).png",
        "img/character/Attack (3).png",
        "img/character/Attack (4).png",
        "img/character/Attack (5).png",
        "img/character/Attack (6).png",
        "img/character/Attack (7).png",
        "img/character/Attack (8).png",
        "img/character/Attack (9).png",
        "img/character/Attack (10).png");
    groundImage = loadImage("img/ground4.jpg");

    scytheImg1 = loadImage("img/death_scythe1.png");
    scytheImg2 = loadImage("img/death_scythe2.png");

    birdsImage = loadAnimation("img/bird1.png", "img/bird2.png", "img/bird3.png");

    obstacle1 = loadImage("img/stone1.png");
    obstacle2 = loadImage("img/stone2.png");
    obstacle3 = loadImage("img/stone3.png");

    ballHammerImg = loadImage("img/ball hammer.png");
    spikesImg = loadImage("img/spikes.png");
    castleImg = loadImage("img/castle.png");

    woodenBg = loadImage("img/bg.jpg");
    eveningBg = loadImage("img/wooden-bg.png")
    mountainBg = loadImage("img/mountainBg.png");
    marsBg = loadImage("img/marsBg.png");


    restartImg = loadImage("img/restart.png");
    gameOverImg = loadImage("img/gameOver.png");

    fireImg = loadAnimation("img/Fogo_1.png", "img/Fogo_2.png", "img/Fogo_3.png", "img/Fogo_4.png");

    jumpSound = loadSound("sounds/jump.flac");
    dieSound = loadSound("sounds/die.mp3");
    checkPointSound = loadSound("sounds/checkPoint.mp3");
    gameSound = loadSound("sounds/game.mp3");
    bg = loadImage("img/bg.jpg");
    monsterImg = loadAnimation("img/pinkbat1.png", "img/pinkbat2.png", "img/pinkbat3.png", "img/pinkbat4.png");

}

function setup() {
    createCanvas(800, 300); 


    ground = createSprite(750, 280, 800, 20);
    ground.addImage(groundImage);
    ground.x = ground.width / 2;


    kevin = createSprite(50, 150, 20, 50);
    kevin.addAnimation("running", kevin_running);
    kevin.addAnimation("collided", kevin_collided);
    kevin.addAnimation("attack", kevin_attack);
    kevin.scale = 0.1;

  

    invisibleGround = createSprite(200, 280, 400, 20);
    invisibleGround.visible = false;

    gameOver = createSprite(400, 100);
    gameOver.addImage(gameOverImg);

    restart = createSprite(380, 170);
    restart.addImage(restartImg);

    castle = createSprite(500, 150);
    castle.addImage(castleImg);
    castle.scale=0.5;
    castle.visible = false;
    gameOver.scale = 0.5;
    restart.scale = 0.09;



    obstaclesGroup = createGroup();
    birdsGroup = createGroup();
    scytheGroup = createGroup();
    monsterGroup = createGroup();

    kevin.setCollider("rectangle", 0, 0, 40, kevin.height);
    // kevin.debug = true

    score = 0;
    lifes = 3;
    lifeCount = lifes;

    scoreElement = createElement('h2');
    scoreElement.position(750, 150);
    HighestScore = createElement('h2');
    HighestScore.position(400, 150);
    lifeElement = createElement('h2');
    lifeElement.position(1000, 150);
    head = createElement('h1');
    head.position(620,10);
    head.style("color: red");
    inst = createElement('h3');
    inst.position(1400,100);
    inst1 = createElement('h3');
    inst1.position(1400,140);
    inst2 = createElement('h3');
    inst2.position(1400,180);
    inst3 = createElement('h3');
    inst3.position(1400,220);
    inst4 = createElement('h3');
    inst4.position(1400,260);
    inst5 = createElement('h3');
    inst5.position(1400,300);
    inst6 = createElement('h3');
    inst6.position(1400,340);

    level1=bg;
}

function draw() {

    
    background(bg);
   // gameSound.play();
    //displaying score
    head.html(heading);
    inst.html(instruct);
    inst1.html(instruct1);
    inst2.html(instruct2);
    inst3.html(instruct3);
    inst4.html(instruct4);
    inst5.html(instruct5);
    inst6.html(instruct6);
    //text("Score: " + score, 500, 50);
    console.log(World.mouseX,World.mouseY);

   

    scoreElement.html("score= "+ score);

    //text("Highest Score:" + hi, 200, 50);
     HighestScore.html("HighestScore= "+ hi);
     //display the lives left
     lifeElement.html("Lives Left= "+ lifes);
     hi = localStorage.getItem("HighestScore");

     if(hi === null){
     localStorage.setItem("HighestScore",0);
}

  else if(hi < score){
     localStorage["HighestScore"]= score;
  }
    // Main code

    if (gameState === PLAY) {

        gameOver.visible = false;
        restart.visible = false;

        // ground.velocityX = -(4 + 3 * score / 100)
       // ground.x = ground.width / 2;
        ground.velocityX = -6;
       
        obstaclesGroup.setVelocityXEach(ground.velocityX);
        monsterGroup.setVelocityXEach(-10);
        scytheGroup.setVelocityXEach(ground.velocityX);

        //scoring
        score = score + Math.round(frameRate() / 60);


        if (score > 0 && score % 100 === 0) {
            checkPointSound.play();
        }

        if (ground.x < 380) {
            ground.x = ground.width / 2; 
        }

        //jump when the space key is pressed
         if(keyDown("space")&& kevin.y >= 210){
            kevin.velocityY = -10;
           jumpSound.play();
         }

       

//after kevin touches obstacles the running animation will be stopped so to reset it we write this. 
        if (kevin.animation.playing === false) {
            kevin.changeAnimation("running", kevin_running);
        }

        //add gravity
        kevin.velocityY = kevin.velocityY + 0.8;
 


        // levels no need anymore
        if (score < 80) {
            spawnObstacles();
        } 
        else if (score > 100 && score < 180) {
            spawnFire();
            spawnMonster();
        } 
        else if (score > 180 && score < 250) {
            spawnScythe();
            spawnSpikes();
        } 
        else if (score > 250 && score < 350) {
            //background(woodenBg);
            spawnBallHammer();
        }
         else if (score > 350) {
            spawn();
        }
        spawnBirds();

        // changing background
        if (score > 0 && score < 200) {
            bg = woodenBg;
            castle.visible=true;
            castle.velocityX=-0.5;
            castle.lifetime = 200;
            if(kevin.isTouching(castle)){
                    castle.destroy();
            }

        }
        else if (score > 200 && score < 300) {
            bg = eveningBg;
        }
         else if (score > 300 && score < 500) {
            bg = mountainBg;
        } 
        else if (score > 500) {
            bg = marsBg;
          
        }

       
        if (scytheGroup.isTouching(kevin)) {

            ground.velocityX = 0;

            kevin.changeAnimation("attack", kevin_attack);
           
            kevin.animation.looping = false;
            obstaclesGroup.setVelocityXEach(0);
            birdsGroup.setVelocityXEach(0);
            scytheGroup.setVelocityXEach(0);
            scytheGroup.destroyEach();
        }






        if (lifes <= 0) {
            kevin.changeAnimation("collided", kevin_collided);
            kevin.animation.looping = false;
            gameState = END;
            
            
        }

        obstaclesGroup.collide(kevin, reduce);
        monsterGroup.collide(kevin, reduce);
        if (obstaclesGroup.isTouching(kevin)) {
           
            kevin.changeAnimation("collided",kevin_collided);
            
            kevin.animation.looping = false;
            gameState = END;
           
            dieSound.play();

        }
    } 
    else if (gameState === END) {

        
        gameOver.visible = true;
        restart.visible = true;
        castle.visible = false;
        lifes = 3;
        ground.velocityX = 0;
        kevin.velocityY = 0


        if (mousePressedOver(restart)) {
            reset();
        }

        //set lifetime of the game objects so that they are never destroyed
        obstaclesGroup.setLifetimeEach(-1);
        birdsGroup.setLifetimeEach(-1);
        scytheGroup.setLifetimeEach(-1);

        obstaclesGroup.setVelocityXEach(0);
        birdsGroup.setVelocityXEach(0);
        scytheGroup.setVelocityXEach(0);
        monsterGroup.setVelocityXEach(0);

    }


    //stop kevin from falling down
    kevin.collide(invisibleGround);
    
    drawSprites();



}


function reduce(obs) {
    lifes = lifes - 1;
    obs.destroy();

    kevin.changeAnimation("attack", kevin_attack);
    kevin.animation.looping = false;
}


function reset() {
    gameState = PLAY;
    bg=level1;
    obstaclesGroup.destroyEach();
    birdsGroup.destroyEach();
    monsterGroup.destroyEach();
    scytheGroup.destroyEach();
    score = 0;
    kevin.changeAnimation("running", kevin_running);
    kevin.animation.looping = true;
}


function spawnObstacles() {
    if (frameCount % 60 === 0) {
        var obstacle = createSprite(600, 250, 10, 40);
        obstacle.velocityX = -(6 + score / 100);

        //generate random obstacles
        var rand = Math.round(random(1, 3));
        switch (rand) {
            case 1:
                obstacle.addImage(obstacle1);
                // obstacle.scale = 0.4;
                break;
            case 2:
                obstacle.addImage(obstacle2);
                // obstacle.scale = 0.4;
                break;
            case 3:
                obstacle.addImage(obstacle3);
                // obstacle.scale = 0.4;
                break;
            default:
                break;
        }
        kevin.depth = obstacle.depth + 1;
        //assign scale and lifetime to the obstacle           
        obstacle.scale = 0.3;
        obstacle.lifetime = 300;
        // obstacle.debug = true;
        obstacle.setCollider("rectangle", 0, 0, 10 * 13, 100);
        //add each obstacle to the group
        obstaclesGroup.add(obstacle);
    }
}

function spawnBirds() {
    //write code here to spawn the birds
    if (frameCount % 300 === 0) {
        var birds = createSprite(600, 80, 40, 10);
        birds.y = Math.round(random(60, 80));
        birds.addAnimation("birds", birdsImage);
        birds.scale = 0.3;
        birds.velocityX = -3;

        //assign lifetime to the variable
        birds.lifetime = 200;

        //adjust the depth
        birds.depth = kevin.depth;


        //add each birds to the group
        birdsGroup.add(birds);
       
    }
}

function spawnFire() {
    if (frameCount % 60 === 0) {
        var fire = createSprite(800, 180, 10, 40);
        fire.addAnimation("fire", fireImg);
        fire.velocityX = -(6 + score / 100);
        fire.setCollider('rectangle', 140, 140, 100, 100);
        fire.scale = 0.5;
        // fire.debug = true;
        //generate random obstacles

        //assign scale and lifetime to the obstacle           
        // obstacle.scale = 0.5;
        fire.lifetime = 500;
        kevin.depth = fire.depth + 1;
        //add each obstacle to the group
        obstaclesGroup.add(fire);
    }
}

function spawnMonster() {
    if (frameCount % 60 === 0) {
        var monster = createSprite(900, 230, 10, 40);
        monster.velocityX = -(6 );
        monster.addAnimation("monster", monsterImg);



        //assign scale and lifetime to the obstacle           
        // obstacle.scale = 0.5;
        monster.lifetime = 1000;
        kevin.depth = monster.depth + 1;
        //add each obstacle to the group
        monsterGroup.add(monster);
    }
}

function spawnScythe() {
    if (frameCount % 60 === 0) {
        var scythe = createSprite(500, 230, 10, 40);
        scythe.velocityX = -(6 + score / 100);
        scythe.addImage(scytheImg1);


        // scythe.debug = true;


        //assign scale and lifetime to the obstacle           
        // obstacle.scale = 0.5;
        scythe.lifetime = 300;
        kevin.depth = scythe.depth + 1;
        //add each obstacle to the group
        scytheGroup.add(scythe);
    }
}

function spawnSpikes() {
    if (frameCount % 60 === 0) {
        var spikes = createSprite(700, 250, 10, 40);
        spikes.velocityX = -(6 + score / 100);
        spikes.addImage(spikesImg);

        spikes.setCollider('rectangle', 0, 0, spikes.width, spikes.height - 40);

        //assign scale and lifetime to the obstacle           
      
        spikes.lifetime = 300;
        kevin.depth = spikes.depth + 1;
      
        //add each obstacle to the group
        obstaclesGroup.add(spikes);
    }
}

function spawnBallHammer() {
    if (frameCount % 60 === 0) {
        var ballHammer = createSprite(600, 40, 10, 40);
        ballHammer.velocityX = -(6 + score / 100);
        ballHammer.addImage(ballHammerImg);
        ballHammer.scale = 1.3;


        //assign scale and lifetime to the obstacle           
       
        ballHammer.lifetime = 300;
        kevin.depth = ballHammer.depth + 1;
        //add each obstacle to the group
        obstaclesGroup.add(ballHammer);
    }
}

function spawn() {
    if (frameCount % 60 === 0) {


        var r = Math.round(random(1, 6));
        switch (r) {
            case 1:
                spawnObstacles();
                break;
            case 2:
                spawnSpikes();
                break;
            case 3:
                spawnBallHammer();
                break;
            case 4:
                spawnFire();
                break;
            case 5:
                spawnMonster();
                break;
            case 6:
                spawnScythe();
                break;
            default:
                break;
        }

    }
}

