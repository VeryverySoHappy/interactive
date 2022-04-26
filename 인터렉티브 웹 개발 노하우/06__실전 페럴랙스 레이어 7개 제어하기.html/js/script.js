let x = 0;
let y = 0;
let mx = 0;
let my = 0;
let speed = 0.03;
let scrollTop = 0;
let parallax_0, parallax_1, parallax_2, parallax_3, parallax_4, parallax_5, parallax_6, parallax_7;

window.onload = function() {
    progressBar = document.getElementsByClassName('progressBar')[0];

    parallax_0 = document.getElementById('parallax_0');
    parallax_0 = document.getElementById('parallax_1');
    parallax_0 = document.getElementById('parallax_2');
    parallax_0 = document.getElementById('parallax_3');
    parallax_0 = document.getElementById('parallax_4');
    parallax_0 = document.getElementById('parallax_5');
    parallax_0 = document.getElementById('parallax_6');
    window.addEventListener('resize', stageResize, false);
    window.addEventListener('mousemove', mouseMove, false);
    window.addEventListener('scroll', scrollFunc, false);

    stageResize();
    loop();
}

function scrollFunc(e) {
    var scrollTop = document.documentElement.scrollTop;

   
}

function stageResize() {
    
}

function loop() {
  
    window.requestAnimationFrame(loop);
}


function mouseMove (e) {

}
