import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

function morphShapes(){
    var tl = gsap.timeline();
    tl.to("#ball",{duration:1,y:-300, transformOrigin:"center", ease:"none"})
    .to("#ball",{duration:0.75,y:0, transformOrigin:"center", ease: "bounce.out"})
    return tl;
}


var mainTL = gsap.timeline();
mainTL.add(morphShapes());


GSDevTools.create();