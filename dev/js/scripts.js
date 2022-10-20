import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

/* ==
This code as been updated from using jQuery to just plain JavaScript
You do not need this code in your own project! This code controls the burger menu on mobile devices
== */
var nav = document.querySelector("nav[data-nav]");
var navBtns = document.querySelectorAll(".nav-btns");
let isVisible = false;

for(var i = 0; i < navBtns.length; i++){
    navBtns[i].addEventListener("click",function(){

    console.log("click");

    if(isVisible === false){
        nav.style.display = "block";
        isVisible = true;
    }
    else{
        nav.style.display = "none";
        isVisible = false;
        }
    })
}

function historyMotion(){
    var tl = gsap.timeline({scrollTrigger:{trigger:"#history", scrub: true, markers:false, start:"top 75%", end:"bottom 60%"}, stagger:0.25});
    tl.from("#history-first h1",{y:200, alpha:0})
    .from("#history-first h4",{y:100, alpha:0})
    .from("#history-first img",{scale:0, alpha:0},"-=0.25")
    .from("#history-middle p",{x:"600",alpha:0, stagger:0.25})
    .from("#history-last",{x:"-600",alpha:0},"-=0.25");
    return tl;
}

function skillsMotion(){
    var tl = gsap.timeline({scrollTrigger:{trigger:"#skills", scrub: true, markers:false, start:"top 75%", end:"bottom 60%"}});
    tl.from("#skills aside div",{x:600,duration:0.5},"slide")
    .from("#skills-content article",{x:-800, duration:0.5, transformOrigin:"left center"},"slide")
    .from("#skills-content h1",{x:100, duration:0.5, alpha:0},"-=0.25")
    .from("#skills-content p",{x:100, duration:0.5, alpha:0},"-=0.25")
    .from(".bottom",{scaleX:0, duration:0.5, stagger:0.25, transformOrigin:"left center"})
    .from(".top h5",{duration:0.5, stagger:0.25, x:-50, alpha:0},"moveText")
    .from(".top h4",{duration:0.5, stagger:0.25, x:50, alpha:0},"moveText")
    .from(".yellow-bar",{scaleX:0, duration:0.5, stagger:0.25, transformOrigin:"left center"},"-=0.5");
    return tl;
}

function skynetMotion(){
    var tl = gsap.timeline({scrollTrigger:{trigger:"#skynet", scrub: true, markers:false, start:"top 40%", end:"center 60%"}});
    tl.from("#gallery-7",{duration:0.5, scale:3, alpha:0})
    .from("#gallery-1",{duration:0.5, clipPath:"inset(100% 0% 0% 0% )"})
    .from("#gallery-5",{duration:0.5,clipPath:"inset(0% 100% 0% 0%)"},"-=0.35")
    .from("#gallery-2",{duration:0.5,clipPath:"inset(0% 0% 100% 0%)"},"-=0.35")
    .from("#gallery-4",{duration:0.5,clipPath:"inset(0% 0% 100% 0%)"})
    .from("#gallery-3",{duration:0.5,clipPath:"inset(0% 0% 0% 100%)"})
    .from("#gallery-6",{duration:0.5,clipPath:"inset(100% 0% 0% 0% "});
    return tl;
}

var mainTL = gsap.timeline();

mainTL.add(historyMotion())
.add(skillsMotion())
.add(skynetMotion());



// I wanted to hide and show the header based on the scroll. I did a simple google search and found this:
// https://greensock.com/forums/topic/27672-scrolltrigger-showhide-navbar-on-scroll-upscroll-down/
// which lead me to this:
// https://codepen.io/GreenSock/pen/qBawMGb

// Below is the code that handels that animation:

/* ====
Show/Hide code
==== */
const showAnim = gsap.from('header', { 
    yPercent: -100,
    paused: true,
    duration: 0.2
  }).progress(1);
  
  ScrollTrigger.create({
    start: "top top",
    end: 99999,
    onUpdate: (self) => {
      self.direction === -1 ? showAnim.play() : showAnim.reverse()
    }
  });
