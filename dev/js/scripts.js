import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(GSDevTools, MorphSVGPlugin);

MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");


function morphShapes(){
    var tl = gsap.timeline();
    tl.to("#star",{duration:2,morphSVG:"#box"});
    return tl;
}


var mainTL = gsap.timeline();
mainTL.add(morphShapes());






GSDevTools.create();