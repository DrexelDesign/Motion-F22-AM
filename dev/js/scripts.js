import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);


// gsap.set("#square",{rotation:180});



function drawLines(){
    var tl = gsap.timeline();
    tl.fromTo("#square",{drawSVG:"0% 5%"},{duration:2, fill:"white", drawSVG:"100% 100%"},"same")
    .from("#line",{duration:2, drawSVG:"0%"},"same");
    return tl;
}

var mainTl = gsap.timeline();
mainTl.add(drawLines());


GSDevTools.create();