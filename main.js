const LightButton = document.getElementById('LightMode');
const DarkButton = document.getElementById('DarkMode');
const logo = document.querySelector('.logo');

function DarkMode() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    logo.style.filter = "invert(1)";
}

function LightMode() {
    document.body.style.backgroundColor = "#C4B5A5";
    document.body.style.color = "black";
    logo.style.filter = "invert(0)";
}

DarkButton.onclick = DarkMode;
LightButton.onclick = LightMode

