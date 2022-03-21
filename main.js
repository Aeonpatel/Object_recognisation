camera=document.getElementById("camera").value;

Webcam.set({
width:250,
height:300,
png_quality:90,
image_format:'png'
});

Webcam.attach(camera);

function take_snapshot(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"></img>';
})
}

classifier=imageClassifier("https://teachablemachine.withgoogle.com/models/jBSfinXa9/",modelLoaded())