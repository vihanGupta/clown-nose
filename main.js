noseY = 0;
noseX = 0;

function setup()
{
canvas = createCanvas(300, 300);
canvas.center()
video = createCapture(VIDEO);
video.size(300, 300);
video.hide();
poseNet = ml5.poseNet(video, modelloaded);
poseNet.on("pose",gotposes);
}
function gotposes(results)
{
    if(results.length > 0)
    {
        noseY = results[0].pose.nose.y - 10;
        noseX = results[0].pose.nose.x - 10;
    }
}
function modelloaded()
{
    console.log("posenet is initialized")
}
function draw()
{
    image(video, 0, 0, 300, 300);
    image(clown, noseX, noseY, 30, 30);
}
function preload()
{
clown = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
}
function takeSnapshot()
{
save("clown-filter.png");
}