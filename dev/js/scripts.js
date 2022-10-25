import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);


function drawLines(){
    var tl = gsap.timeline();
    tl.fromTo("#square",{drawSVG:"75% 75%"},{duration:2, fill:"white", drawSVG:"25% 125%"},"same")
    .from("#line",{duration:2, drawSVG:"0%"},"same");
    return tl;
}

var mainTl = gsap.timeline();
mainTl.add(drawLines());


GSDevTools.create();