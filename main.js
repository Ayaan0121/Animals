
//start classification define
function startClassification() {
    document.getElementById("as").style.visibility="visible";
    document.getElementById("am").style.visibility="visible";
    document.getElementById("sm").style.visibility="visible";
    navigator.mediaDevices.getUserMedia({audio:true});
    //define sound classifier
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/J8dAF1ZNm/model.json', modelReady);    
    document.getElementById("hear").src="hear.gif";
}
//define fun model ready
function modelReady() {
    classifier.classify(gotResults);
}
//define fun got result fun
function gotResults(error,results) {
    if (error) {
        console.error(error);
    }else{
console.log(results);

random_r= Math.floor(Math.random()* 255 ) + 1;
random_g= Math.floor(Math.random()* 255 ) + 1;
random_b= Math.floor(Math.random()* 255 ) + 1;

random_r2= Math.floor(Math.random()* 255 ) + 1;
random_g2= Math.floor(Math.random()* 255 ) + 1;
random_b2= Math.floor(Math.random()* 255 ) + 1;

document.getElementById("result_label").innerHTML="I can hear-" + results[0].label;

document.getElementById("result_label").style.color="rgb(" + random_r + ","+ random_g + ","+ random_b + ")";

document.getElementById("as").style.background="rgb(" + random_r2 + ","+ random_g2 + ","+ random_b2 + ")";
img1= document.getElementById('hear')
if (results[0].label == "cat") {
    img1.src='meow.gif';
    
}else if (results[0].label == "dog") {
    img1.src='bark.gif';
    
}else if (results[0].label == "eagle") {
    img1.src='eagle.gif';

}else if (results[0].label == "peacock") {
        img1.src='peacock.gif';
    }else if (results[0].label == "tiger") {
        img1.src='lion.gif';
    }else {
    img1.src='hear.gif';
    console.log("bn")
}

}
}


