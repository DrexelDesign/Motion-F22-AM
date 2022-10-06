
import { gsap } from "gsap";

gsap.set("button i",{transformOrigin:"center bottom"});

function heroAnimation(){
    var tl = gsap.timeline();
    tl.from("#first-line",{duration:0.5, alpha:0, y:-100})
    .from("#second-line",{duration:0.5, alpha:0, y:-50})
    .from("#trail-btn",{duration:0.5, alpha:0, y:50})
    .from("#trail-btn i",{duration:0.25, alpha:0, rotation:90});
    return tl;
}

var mainTL = gsap.timeline();
mainTL.add(heroAnimation());

let mm = gsap.matchMedia();

var buttonSize = 1;

mm.add("(min-width: 800px)", () => {
  // desktop setup code here...
  buttonSize = 2;
  
});

mm.add("(max-width: 799px)", () => {
  // mobile setup code here...
  buttonSize = 1.25;
});


var buttonAnimation = gsap.timeline({paused:true});
buttonAnimation.to("#trail-btn",{duration:0.25, scale: buttonSize})
        .to("#trail-btn i",{duration:0.25, rotateY: 180})
        .to("#first-line",{duration:0.25, alpha:0, y:50})
        .to("#second-line",{duration:0.25, alpha:0, y:25});

let button = document.querySelector("#trail-btn");

button.addEventListener("mouseover",function(){
   buttonAnimation.play();

});

button.addEventListener("mouseout",function(){
    buttonAnimation.reverse();
});