var speechRecognition=window.webkitSpeechRecognition;
var recognition= new speechRecognition();

function takepic() {
    document.getElementById("textbox").innerHTML=" ";
    recognition.start();


}

recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML=content;
    if(content == "take my selfie") {
        speak();
    }


}

function speak() {
var synth=window.speechSynthesis;
speakdata = "taking your selfie in 5 seconds"
var utterthis=new SpeechSynthesisUtterance(speakdata);
synth.speak(utterthis);
Webcam.attach(camera);

setTimeout(function()  {
snapshot();
save();
}, 5000);
}

camera=document.getElementById("camera");
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

function snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML= '<img id="selfie" src="'+data_uri+'"/>';
    }) ;
}

function save() {
    link=document.getElementById("link");
    img=document.getElementById("selfie").src;
    link.href=img;
    link.click();
}