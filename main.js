noseX=0;
noseY=0;

function preload()
{
    clown_nose = loadImage('https://i.postimg.cc/4NG607FR/clown-nose.jpg');
}
    function setup()
    {
        canvas = createCanvas(300,300);
        canvas.center()
        video = createCapture(VIDEO);
        video.size(400, 400);
        video.hide();

        poseNet = ml5.poseNet(video, modelLoaded);
        poseNet.on('pose', gotPoses)
    }

    function modelLoaded()
    {
        console.log('PoseNet Is Initialized');
    }

    function draw()
    {
        image(video, 0, 0, 300, 300);
        image(clown_nose, noseX, noseY, 30, 30);
    }

    function take_snapshot(){
save('myFilterImage.png');
    }

    function gotPoses()
    {
        if(results.length > 0)
            {
                console.log(results);
                noseX = results[0].pose.nose.x;
                noseY = results[0].pose.nose.y;
                console.log("nose x = "+noseX);
                console.log("nose y = "+noseY);
            }
    }
