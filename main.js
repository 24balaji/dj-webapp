song="";
song1 ="";


leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload()
{
    song =loadSound("music.mp3");
    song1 = loadSound("music2.mp3");
}


function setup()
{
canvas = createCanvas(450, 350);
canvas.center();
video = createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function draw()
{
    image(video,0,0,600,500);

}

function play()
{
  song.play();
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);

    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);

  }
}

function modelLoaded() {
   console.log("PoseNet is Initialized");
}

function stop()
{
    song.stop();
    song1.stop();
}