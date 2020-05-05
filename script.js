function myFunction() {
    document.getElementById("myDIV").style.display = "none";
  }

var noRandom = Math.floor(Math.random() * 6 )+1;
var imgRondom = "dice" + noRandom + ".png"; //disini ngambil dice1.png - dice6 dengan noRandom
var ImageSrc = "images/" +imgRondom; //disini ngambil img dari folder gambar

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",  ImageSrc);

var randomna = Math.floor(Math.random() *6 ) +1;
var imgRondom2 = "dice" +randomna + ".png";
var ImageSrc2 = "images/" +imgRondom2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", ImageSrc2);

if(noRandom > randomna){
    document.querySelector("h1").innerHTML = "Player 1 Menang Guys"
}
else if( randomna > noRandom ){
    document.querySelector("h1").innerHTML = "Player 2 yang Menang";
}
else{
    document.querySelector("h1").innerHTML = " Skor Sama ";
}