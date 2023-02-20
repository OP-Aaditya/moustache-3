function preload(){
    moustache=loadImage("https://i.postimg.cc/cLPS8rrB/moustache-removebg-preview.png");
}
upperlipX=0;
upperlipY=0;
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modeloaded);
    poseNet.on('pose',gotPoses);
}
function modeloaded(){
    console.log('PoseNet is Initialized');
}
function gotPoses(results){
    if(results.length > 0 ){
        console.log(results);
       upperlipX=results[0].pose.nose.x - 15 ;
       upperlipY=results[0].pose.nose.y;
    }
}

function draw(){
    image(video,0,0,300,300);
    image(moustache,upperlipX,upperlipY,30,30);
}
function take_snapshot(){
    save('myfilterpicture');
}