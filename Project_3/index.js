var cons = document.querySelector('.cursor')
var main = document.querySelector('.main');

main.addEventListener('mousemove' , function(dets){
    cons.style.left = dets.x + "px";
    cons.style.top = dets.y + "px";
})