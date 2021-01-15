var bg;
var b1, b2, b3;
var b2R;
var b3c;
var player;

function preload (){
backgroundImage=loadImage("images/bg.jpg");

branch1Image=loadImage("images/branch 1.png");
branch2Image=loadImage("images/branch 2.png");
branch3Image=loadImage("images/branch 3.png");
branch2RImage=loadImage("images/branch2copy.png")
branch1cropImage=loadImage("images/branch1crop.png")
branch2cropImage=loadImage("images/branch2crop.png")
playerImage=loadImage("images/standing.png")
}


function setup(){
createCanvas(displayWidth-20, displayHeight-100);

//bg=createSprite(displayWidth, displayHeight);
//bg.addImage(backgroundImage);

player=createSprite(displayWidth/2-650, displayHeight/2+50)
player.addImage(playerImage)
player.scale=0.2;

b1=createSprite(displayWidth/2-550, displayHeight/2);
b1.addImage(branch1Image);
b1.scale=0.5;

b4=createSprite(displayWidth/2-376, displayHeight/2-100);
b4.addImage(branch1Image);
b4.scale=0.6;

b2=createSprite(displayWidth, displayHeight);
b2.addImage(branch2Image);

b3=createSprite(displayWidth, displayHeight);
b3.addImage(branch3Image);


b2R=createSprite(displayWidth/3-280, displayHeight/4+95);
b2R.addImage(branch2RImage);
b2R.scale=0.5;


b5R=createSprite(displayWidth/3-55, displayHeight/4+95);
b5R.addImage(branch2RImage);
b5R.scale=0.5;


b6=createSprite(displayWidth/2-220, displayHeight/2-200);
b6.addImage(branch1Image);
b6.scale=0.3;

b7=createSprite(displayWidth/2-530, displayHeight/2+200);
b7.addImage(branch2RImage);
b7.scale=0.28;

//b8=createSprite(displayWidth/2-410, displayHeight/2+165);
//b8.addImage(branch1Image);
//b8.scale=0.5;

b9=createSprite(displayWidth/2-225, displayHeight/2+165);
b9.addImage(branch1Image);
b9.scale=0.5;

b10=createSprite(displayWidth/2-160, displayHeight/2+200);
b10.addImage(branch2RImage);
b10.scale=0.28;

b11=createSprite(displayWidth/2-35, displayHeight/2+270);
b11.addImage(branch1Image);
b11.scale=0.5;

b12=createSprite(displayWidth/2+150, displayHeight/2+270);
b12.addImage(branch1Image);
b12.scale=0.5;

b13=createSprite(displayWidth/2-350, displayHeight/2+200);
b13.addImage(branch2RImage);
b13.scale=0.28;

b14=createSprite(displayWidth/2-290, displayHeight/2+265);
b14.addImage(branch1Image);
b14.scale=0.25;

b15=createSprite(displayWidth/2-255, displayHeight/2+300);
b15.addImage(branch2RImage);
b15.scale=0.5;

b16=createSprite(displayWidth/2-180, displayHeight/2-265);
b16.addImage(branch2RImage);
b16.scale=0.25;

b17=createSprite(displayWidth/2-250, displayHeight/2-300);
b17.addImage(branch1Image);
b17.scale=0.5;

b18=createSprite(displayWidth/2-60, displayHeight/2-300);
b18.addImage(branch1Image);
b18.scale=0.5;

b19=createSprite(displayWidth/2-370, displayHeight/2-300);
b19.addImage(branch2RImage);
b19.scale=0.4;

b20=createSprite(displayWidth/2-300, displayHeight/2-360);
b20.addImage(branch2RImage);
b20.scale=0.22;

b21=createSprite(displayWidth/2-190, displayHeight/2-60);
b21.addImage(branch2RImage);
b21.scale=0.22;

b22=createSprite(displayWidth/2-120, displayHeight/2-100);
b22.addImage(branch1cropImage);
b22.scale=0.5;

b23=createSprite(displayWidth/2-80, displayHeight/2-130);
b23.addImage(branch2RImage);
b23.scale=0.5;

b24=createSprite(displayWidth/2+30, displayHeight/2-205);
b24.addImage(branch1Image);
b24.scale=0.5;

b25=createSprite(displayWidth/2+90, displayHeight/2-340);
b25.addImage(branch2RImage);
b25.scale=0.5;

b26=createSprite(displayWidth/2+40, displayHeight/2);
b26.addImage(branch1Image);
b26.scale=0.5;

b27=createSprite(displayWidth/2+20, displayHeight/2+40);
b27.addImage(branch2cropImage);
b27.scale=0.4;

b28=createSprite(displayWidth/2+75, displayHeight/2+90);
b28.addImage(branch1cropImage);
b28.scale=0.4;

b29=createSprite(displayWidth/2+130, displayHeight/2-100);
b29.addImage(branch1Image);
b29.scale=0.5;

b30=createSprite(displayWidth/2+200, displayHeight/2-230);
b30.addImage(branch2RImage);
b30.scale=0.5;

b31=createSprite(displayWidth/2+200, displayHeight/2-400);
b31.addImage(branch2RImage);
b31.scale=0.5;

b32=createSprite(displayWidth/2+200, displayHeight/2+75);
b32.addImage(branch2RImage);
b32.scale=0.5;

b33=createSprite(displayWidth/2+100, displayHeight/2+130);
b33.addImage(branch2cropImage);
b33.scale=0.5;

b34=createSprite(displayWidth/2-550, displayHeight/2+100);
b34.addImage(branch1Image);
b34.scale=0.5;

b35=createSprite(displayWidth/2-485, displayHeight/2+120);
b35.addImage(branch2cropImage);
b35.scale=0.3;

b36=createSprite(displayWidth/2-350, displayHeight/2+120);
b36.addImage(branch2cropImage);
b36.scale=0.3;

b37=createSprite(displayWidth/2-500, displayHeight/2+155);
b37.addImage(branch1cropImage);
b37.scale=0.2;

b38=createSprite(displayWidth/2-530, displayHeight/2+300);
b38.addImage(branch2RImage);
b38.scale=0.2;

b39=createSprite(displayWidth/2-230, displayHeight/2+90);
b39.addImage(branch1Image);
b39.scale=0.5;

b40=createSprite(displayWidth/2-440, displayHeight/2-355);
b40.addImage(branch1Image);
b40.scale=0.5;

b41=createSprite(displayWidth/2-510, displayHeight/2-355);
b41.addImage(branch1Image);
b41.scale=0.5;

b42=createSprite(displayWidth/2-630, displayHeight/2-355);
b42.addImage(branch2cropImage);
b42.scale=0.5;

b43=createSprite(displayWidth/2-510, displayHeight/2-290);
b43.addImage(branch1Image);
b43.scale=0.5;

b45=createSprite(displayWidth/2+385, displayHeight/2+100);
b45.addImage(branch2cropImage);
b45.scale=0.5;

b46=createSprite(displayWidth/2+500, displayHeight/2+100);
b46.addImage(branch2cropImage);
b46.scale=0.5;

b47=createSprite(displayWidth/2+565, displayHeight/2+160);
b47.addImage(branch1cropImage);
b47.scale=0.5;

b48=createSprite(displayWidth/2+600, displayHeight/2+35);
b48.addImage(branch2RImage);
b48.scale=0.5;

b49=createSprite(displayWidth/2+600, displayHeight/2-160);
b49.addImage(branch2RImage);
b49.scale=0.5;

b50=createSprite(displayWidth/2+565, displayHeight/2-240);
b50.addImage(branch1cropImage);
b50.scale=0.5;

b51=createSprite(displayWidth/2+500, displayHeight/2-160);
b51.addImage(branch2RImage);
b51.scale=0.5;

b52=createSprite(displayWidth/2+430, displayHeight/2-30);
b52.addImage(branch1Image);
b52.scale=0.5;

b53=createSprite(displayWidth/2+320, displayHeight/2-30);
b53.addImage(branch1Image);
b53.scale=0.5;

b54=createSprite(displayWidth/2+200, displayHeight/2+50);
b54.addImage(branch2RImage);
b54.scale=0.5;

b55=createSprite(displayWidth/2+695, displayHeight/2+35);
b55.addImage(branch2RImage);
b55.scale=0.5;

b56=createSprite(displayWidth/2+695, displayHeight/2-175);
b56.addImage(branch2RImage);
b56.scale=0.5;

b57=createSprite(displayWidth/2+695, displayHeight/2-240);
b57.addImage(branch1Image);
b57.scale=0.5;

b58=createSprite(displayWidth/2+300, displayHeight/2-230);
b58.addImage(branch2RImage);
b58.scale=0.5;

b59=createSprite(displayWidth/2+300, displayHeight/2-400);
b59.addImage(branch2RImage);
b59.scale=0.5;

b60=createSprite(displayWidth/2+400, displayHeight/2-405);
b60.addImage(branch2cropImage);
b60.scale=0.5;

b61=createSprite(displayWidth/2+400, displayHeight/2-290);
b61.addImage(branch2cropImage);
b61.scale=0.5;

b62=createSprite(displayWidth/2+400, displayHeight/2-230);
b62.addImage(branch2RImage);
b62.scale=0.5;

b63=createSprite(displayWidth/2+500, displayHeight/2-450);
b63.addImage(branch2cropImage);
b63.scale=0.5;

b64=createSprite(displayWidth/2+570, displayHeight/2-385);
b64.addImage(branch1cropImage);
b64.scale=0.5;

b66=createSprite(displayWidth/2+570, displayHeight/2-330);
b66.addImage(branch1cropImage);
b66.scale=0.5;

b67=createSprite(displayWidth/2+500, displayHeight/2-285);
b67.addImage(branch2cropImage);
b67.scale=0.5;

b68=createSprite(displayWidth/2+220, displayHeight/2+300);
b68.addImage(branch2cropImage);
b68.scale=0.5;

b69=createSprite(displayWidth/2+400, displayHeight/2+300);
b69.addImage(branch2cropImage);
b69.scale=0.5;

b70=createSprite(displayWidth/2+535, displayHeight/2+260);
b70.addImage(branch2Image);
b70.scale=0.5;

b71=createSprite(displayWidth/2+635, displayHeight/2+260);
b71.addImage(branch2Image);
b71.scale=0.5;

b72=createSprite(displayWidth/2+320, displayHeight/2+160);
b72.addImage(branch1Image);
b72.scale=0.5;
}

function draw (){
background(backgroundImage);
if (keyDown(RIGHT_ARROW)){
    player.x=player.x+5;
}

if (keyDown(LEFT_ARROW)){
    player.x=player.x-5;
}

if (keyDown(DOWN_ARROW)){
    player.y=player.y+5;
}

if (keyDown(UP_ARROW)){
    player.y=player.y-5;
}

player.collide(b1);
player.collide(b2);
player.collide(b3);
player.collide(b4);
player.collide(b6);
player.collide(b7);
player.collide(b9);
player.collide(b10);
player.collide(b11);
player.collide(b12);
player.collide(b13);
player.collide(b14);
player.collide(b15);
player.collide(b16);
player.collide(b17);
player.collide(b18);
player.collide(b19);
player.collide(b20);
player.collide(b21);
player.collide(b22);
player.collide(b23);
player.collide(b24);
player.collide(b25);
player.collide(b26);
player.collide(b27);
player.collide(b28);
player.collide(b29);
player.collide(b30);
player.collide(b31);
player.collide(b32);
player.collide(b33);
player.collide(b34);
player.collide(b35);
player.collide(b36);
player.collide(b37);
player.collide(b38);
player.collide(b39);
player.collide(b40);
player.collide(b41);
player.collide(b42);
player.collide(b43);
player.collide(b45);
player.collide(b46);
player.collide(b47);
player.collide(b48);
player.collide(b49);
player.collide(b50);
player.collide(b51);
player.collide(b52);
player.collide(b53);
player.collide(b54);
player.collide(b55);
player.collide(b56);
player.collide(b57);
player.collide(b58);
player.collide(b59);
player.collide(b60);
player.collide(b61);
player.collide(b62);
player.collide(b63);
player.collide(b64);
player.collide(b66);
player.collide(b67);
player.collide(b68);
player.collide(b69);
player.collide(b70);
player.collide(b71);
player.collide(b72);




drawSprites ();
}