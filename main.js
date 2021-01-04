left_wristx=0;
right_wristx=0;
difference=0;

function setup(){
    canvas=createCanvas(500,450);
    canvas.position(560,60);
    video=createCapture(VIDEO);
    video.size(500,500);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    background("#969a97");
    textSize(difference);
    fill("red");
    text("Lakshya",60,60);
    document.getElementById("text_size").innerHTML="The size of the text is - "+ difference;

}

function modelLoaded(){
    console.log("model is loaded");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);

        left_wristx=results[0].pose.leftWrist.x;
        right_wristx=results[0].pose.rightWrist.x;
        difference= floor(left_wristx-right_wristx);
        console.log("left wrist= "+left_wristx+" right wrist= "+right_wristx+" difference= "+difference);
    }
}


