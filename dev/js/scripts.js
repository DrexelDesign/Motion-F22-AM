import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(GSDevTools, DrawSVGPlugin, MotionPathPlugin);

gsap.set("#t-down",{scaleY:0.5});
gsap.set("#t-cross",{transformOrigin: "center"});
gsap.set("#i",{transformOrigin: "center bottom"});

gsap.set("#e",{transformOrigin: "left bottom"});
gsap.set("#dot",{transformOrigin: "50% 50%", xPercent:-50, yPercent:-50});


const mainTL = gsap.timeline();

mainTL.from("#t-down",{duration:0.5, y:"-=500", ease:"none"})

        // stretch out bottom of T
        .to("#t-down",{duration:0.5, scaleY:1.5, ease: "none)"})

        // animate the bottom of the T path
        .from("#t-path",{duration:0.25, scaleY:0, ease: "none)"},"-=20%")
        .fromTo("#t-path",{duration:0.25, drawSVG: "0% 10%"}, {drawSVG:"90% 100%", ease:"none"}, "tAnimation")

        // animate the t cross bar
        .from("#t-cross",{duration:0.5, scaleX:0, ease: "elastic.out(1, 0.3)"}, "tAnimation")

        // snap T back into shape
        .to("#t-down",{duration:0.5, scaleY:1, ease: "elastic.out(1, 0.3)"},"-=80%")

        //rotate E 
        .from("#e", {duration:0.75, rotate: 120, ease: "elastic.out(1, 0.5)"},"-=0.25")

        // drop in K
        .from("#k", {duration:0.25, y:"-=200", ease: "bounce",autoAlpha:0},"-=0.6")

        //skew the N in
        .from("#n", {duration:0.25, scaleX:0},"-=0.35")
        
        // make I pop out
        .from("#i",{duration:0.5, scaleY:0, ease: "elastic.out(1, 0.5)"},"-=0.6")
        // make T path disappear
        .to("#t-path",{duration:0.25, scaleY:0},"-=0.6")

        // dot pops out and lands
        .from("#dot",{duration:0.01, autoAlpha:0},"-=0.55")
        .from("#dot",{duration:1, motionPath:{path:"#dot-path", align:"#dot-path"},ease: "bounce.out"},"-=0.65");
        

GSDevTools.create();