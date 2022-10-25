import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);


// gsap.set("#square",{rotation:180});



function drawLines(){
    var tl = gsap.timeline();
    tl.from("#square",{duration:2, fill:"white", drawSVG:"50px 20px", rotate:180, transformOrigin:"center top"},"same")
    .from("#line",{duration:2, drawSVG:"0%"},"same");
    return tl;
}

var mainTl = gsap.timeline();
mainTl.add(drawLines());






GSDevTools.create();