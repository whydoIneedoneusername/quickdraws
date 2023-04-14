noseX=0;
noseY=0;

function preload()
{moustashe = loadImage('https://media.istockphoto.com/id/1152878060/vector/mustache-icon-hipster-moustache-stylish-symbol-template-design-for-masquerade-holiday-party.jpg?s=612x612&w=0&k=20&c=JsPt2_Nfpb_PyuP_cALxmpiq5yuZUQyflSi-kqaM_4g=');
}

function setup()
{
    canvas= createCanvas(280,280);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}




function modelLoaded() {
    console.log('PoseNet Is Initialized');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("nose x =" + noseX);
 console.log("nose y =" + noseY);
    }    
}


function draw()
{
    image(video, 0, 0, 280,280)
    image(moustashe, noseX, noseY,17,17);

}

function take_snapshot()
{
    save('mayFilterImage.png')
}

