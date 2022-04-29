var cube = document.getElementById('cube');

var min = 1;
var max = 24;

cube.onclick = function () {
    var xRand = getRandom(max, min);
    var yRand = getRandom(max, min);

    cube.style.webkitTransform = 'rotateX(' + xRand + 'deg) rotateY(' + yRand + 'deg)';
    cube.style.transform = 'rotateX(' + xRand + 'deg) rotateY(' + yRand + 'deg)';
}

function getRandom(max, min) {
    return (Math.floor(Math.random() * (max - min)) + min) * 90;
}