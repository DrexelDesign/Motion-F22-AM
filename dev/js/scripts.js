import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


function scrollAnimation(){
    var tl = gsap.timeline();
    tl.to("#box", {
        duration: 1,
        x: 400,
        rotation: 360,
        scrollTrigger: {
            trigger: "#box",
            // toggleActions: "restart pause reverse pause",
            markers:true,
            start: "0px 50%",
            end: "100% 10%",
            scrub: true,
            pin: true
        }
    });
    return tl;
}


var mainTL = gsap.timeline();
mainTL.add(scrollAnimation());

