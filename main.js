var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult = function(event){

 console.log(event);
    
    var Content = event.results[0][0].transcript;

        document.getElementById("textbox").innerHTML = Content;
        console.log(Content);
        if (Content == "tire minha selfie")
        {
            console.log("tirando selfie --- ");
            speak();
        }
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data = "Tirando sua selfie em 5 segundos";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function() {
        take_snapshot();
        save();

    },5000);

}
camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format:'jpeg',
    png_quality:90
});

function save(){
    image = document.getElementById("selfieImage").src;
    document.getElementById("link").href = image;
    document.getElementById("link").click();
}

function take_snapshot(){
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfieImage" src="'+data_uri+'">';
    });
}