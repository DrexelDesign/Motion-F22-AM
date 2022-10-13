import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Sets
gsap.set("#hero h1 span",{alpha:0.25})

var heroButtonTL = gsap.timeline({paused:true});
    heroButtonTL.to("#trails-btn",{duration:0.25,scale:2, backgroundColor:"#881d02"},"trigger")  
    .to("#first-line",{duration:0.25, alpha:0, y:50},"trigger")
    .to("#second-line",{duration:0.25, alpha:0, y:20},"trigger")
    .to("#trails-btn i",{duration:0.25, rotateY:180},"-=0.15");


var trailsBtn = document.querySelector("#trails-btn");

trailsBtn.addEventListener("mouseover",function(){
    heroButtonTL.play();
})

trailsBtn.addEventListener("mouseout",function(){
    heroButtonTL.reverse();
})

function heroAnimation(){
    var tl = gsap.timeline();
    tl.from("#first-line",{duration:1,alpha:0, y:-100})
    .from("#second-line",{duration:1,alpha:0, y:-100},"-=0.75")
    .from("#trails-btn",{duration:1,y:100, alpha:0},"-=.5")
    .from("#trails-btn i",{duration:0.5,rotation:90, alpha:0, transformOrigin: "left bottom"},"-=0.5");
    return tl;
}


function boxAnimation(){
    var tl = gsap.timeline({scrollTrigger: { trigger: "#box", markers: false, scrub:true, end:"bottom center", start:"top 80%"}});
    
    tl.from("#box", {duration: 1,alpha: 0,rotation: -180,x: "-=300%"})
      .to("#box", {duration: 1 ,rotation: 48,y: 200})
      .to("#box", {duration: 1 ,y: -600, scale:2});
    return tl;
}


function peakAnimation(){
    var tl = gsap.timeline({scrollTrigger:{trigger:"#hiking", scrub:true,markers:false, end:"top 30%"}});
    tl.from("#hiking aside div",{duration:1, scale:3, alpha:0},"startPeak")
    .from("#hiking h1",{duration:1,x:"-=200%", alpha:0},"startPeak")
    .from("#hiking p",{duration:1,x:"-=200%", alpha:0},"startPeak")
    return tl;
}


function wonderAnimation(){
    var tl =gsap.timeline({scrollTrigger:{trigger:"#hero-2", scrub:true,markers:true, end:"top 40%", start:"top 80%"}});
    tl.from("#bg-img",{duration:5, clipPath:"inset(0 50%)"})
    .from("#hero-2 h1",{duration:1, scale:3, alpha:0},"-=50%")
    return tl;
}


var mainTimeline = gsap.timeline();
mainTimeline.add(heroAnimation())
    .add(boxAnimation())
    .add(peakAnimation())
    .add(wonderAnimation());
