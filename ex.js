var myAudio = new Audio("snare.wav");
var myAudio2 = new Audio("tom.wav");
var myAudio3 = new Audio("boom.wav");


var snarebutton = document.getElementById("snare")
snarebutton.addEventListener('click', function () {
myAudio.play();})
snarebutton.addEventListener('mouseover', function () {
myAudio.play();})


var tombutton = document.getElementById("tom")
tombutton.addEventListener('click', function () {
myAudio2.play();})
tombutton.addEventListener('mouseover', function () {
myAudio2.play();})


var boombutton = document.getElementById("boom")
boombutton.addEventListener('click', function () {
myAudio3.play();})
boombutton.addEventListener('mouseover', function () {
myAudio3.play();})
