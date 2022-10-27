import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);

function simpleMotion(){

      // make a var that represents the line in the SVG
      var line = document.querySelector("#center-line");
      // make a var that uses the svg line var from above and sets the BBox property
      line = line.getBBox();
      // print out the width of the line. This should make your Figma file
      // console.log(line.width)
  
      var leftBall = document.querySelector("#left-ball");
      leftBall = leftBall.getBBox();
  
      var center = document.querySelector("#center");
      center = center.getBBox();
      // console.log(center.height)

      gsap.set("#left-ball",{x:line.width / 2 + leftBall.width / 2, transformOrigin:"center" })
      gsap.set("#right-ball",{x:-line.width/2 - leftBall.width / 2, transformOrigin:"center" })

    var tl = gsap.timeline();
    tl.from("#right-ball",{scale:0, duration:0.25, drawSVG: 0})
      .from("#left-ball",{scale:0, duration:0.25},"-=50%")
      .to("#right-ball",{x:0, duration:0.25},"rollOut")
      .to("#left-ball",{x:0, duration:0.25},"rollOut")
      .fromTo("#center-line",{drawSVG:"50% 50%"},{duration:0.25, drawSVG: "0% 100%"},"rollOut")
      .from("#center",{duration: 0.25, scale:0, transformOrigin:"center"},"-=50%")
      .to("#center",{duration: 0.25, y: -center.height / 2 - 50},"-=50%")
      .to("#center",{duration: 0.15, y: 0})
      .fromTo("#center-outline",{drawSVG:"100% 50%"},{duration:0.15,drawSVG:"125% 25%"},"-=50%")

    return tl;

}

function patternMotion(){

    var tl = gsap.timeline();

    tl.from(".odd",{duration:2, drawSVG:0, stagger:0.25, rotate:180, transformOrigin:"center"},"spin")
    .fromTo(".even",{drawSVG:"0% 0%"},{duration:2, drawSVG:"0% -100%", stagger:0.25, rotate:180, transformOrigin:"center"},"spin");
    return tl;

}

function UIMotion(){


    // make a var that represents the line in the SVG
    var bottomLine = document.querySelector("#bottom-line");
    // make a var that uses the svg line var from above and sets the BBox property
    bottomLine = bottomLine.getBBox();

    console.log(bottomLine.width);

    var tl = gsap.timeline();
    tl.to("#pencil",{duration:0.5,x:bottomLine.width},"draw")
    .from("#bottom-line",{duration:0.5,drawSVG:0},"draw")
    .to("#pencil",{duration:0.25, alpha:0},"drawOutline")
    .fromTo("#outline",{drawSVG:"100% 100%"},{duration:0.5, drawSVG:"100% 0%"},"drawOutline")
    .from("#box-bg",{duration:0.5, scaleX:0})
    .from(".letter",{duration:0.25, alpha:0, y:20, stagger: 0.12},"-=50%")
    .from("#glass",{duration:0.25, drawSVG:0},"-=.5")
    .from("#handle",{duration:0.25, drawSVG:0},"-=.25")
    return tl;

}


var mainTL = gsap.timeline();
mainTL.add(simpleMotion())
.add(patternMotion())
.add(UIMotion())



GSDevTools.create();