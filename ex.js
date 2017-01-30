var myAudio = new Audio("snare.wav");
var myAudio2 = new Audio("tom.wav");
var myAudio3 = new Audio("boom.wav");


var buttonElement = document.getElementById("snare")
buttonElement.addEventListener('click', function () {
myAudio.play();})
buttonElement.addEventListener('mouseover', function () {
myAudio.play();})


var buttonElement = document.getElementById("tom")
buttonElement.addEventListener('click', function () {
myAudio2.play();})
buttonElement.addEventListener('mouseover', function () {
myAudio2.play();})


var buttonElement = document.getElementById("boom")
buttonElement.addEventListener('click', function () {
myAudio3.play();})
buttonElement.addEventListener('mouseover', function () {
myAudio3.play();})
