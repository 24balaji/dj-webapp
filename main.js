song="";
song1 ="";

function preload()
{
    song =loadSound("music.mp3");
    song1 = loadSound("music2.mp3")
}


function setup()
{
canvas = createCanvas(450, 350);
canvas.center();
video = createCapture(VIDEO);
video.size(450,300);
video.hide();
}

function draw()
{
    image(video,0,0,600,500);
}

