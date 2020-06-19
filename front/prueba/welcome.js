let coordenadaX= document.getElementById("register");
let coordenadaY= document.getElementById("query");
let coordenadaZ= document.getElementById("btn");

function register() {
    coordenadaX.style.left = "50px";
    coordenadaY.style.left = "450px";
    coordenadaZ.style.left = "0";
}

function query() {
    coordenadaX.style.left = "-400px";
    coordenadaY.style.left = "50px";
    coordenadaZ.style.left = "110px";
}