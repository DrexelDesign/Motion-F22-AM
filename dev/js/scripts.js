import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathHelper } from "gsap/MotionPathHelper";

gsap.registerPlugin(MotionPathPlugin, GSDevTools, MotionPathHelper);

function fadeInSky(){
    var tl = gsap.timeline();
    tl.from("#background",{duration:1, alpha:0});
    return tl;
}

function zoomOut(){
    var tl = gsap.timeline();
    tl.from("#orange-mtn",{duration:1, y:750, transformOrigin:"center", scale:5})
    .from("#red-mtn",{duration:1, y:500, transformOrigin:"center", scale:5},"-=75%")
    .from(".mountains",{duration:1, y:400, transformOrigin:"center", scale:5},"-=85%")
    .from("#trees-1",{duration:2, y:300, transformOrigin:"center", scale:5},"-=95%")
    .from("#trees-5",{duration:1, y:250, transformOrigin:"center", scale:5},"-=105%")
    .from("#trees-4",{duration:1, y:180, transformOrigin:"center", scale:5},"-=110%")
    .from("#trees-3",{duration:1, y:180, transformOrigin:"center", scale:5},"-=95%")
    .from("#trees-2",{duration:1, y:230, transformOrigin:"center", scale:5},"-=95%");
    return tl;
}

function engineFlames(){
    var repeatTimes = 10;
    var tl = gsap.timeline();
    tl.to("#flame-left",{duration:0.5,scaleY:0.5, yoyo:true, repeat:repeatTimes },"flames")
    .to("#left-dark-blue",{duration:0.25,scaleY:0.25, yoyo:true, repeat:repeatTimes },"flames")
    .to("#flame-right",{duration:0.5,scaleY:0.5, yoyo:true, repeat:repeatTimes },"flames")
    .to("#right-dark-blue",{duration:0.25,scaleY:0.25, yoyo:true, repeat:repeatTimes },"flames");
    return tl;
}

function flightPath(){
    gsap.set("#space-ship",{scale:0.25});
    var tl = gsap.timeline();
    tl.to("#space-ship",{duration:3, scale:2, 
        motionPath:{
            path:"#ship-path-2", 
            align:"#ship-path-2",
            autoRotate:true
        }, 
            transformOrigin:"center", rotate:45, ease: "expo.in"});
    return tl;
}

engineFlames();

var mainTL = gsap.timeline();
mainTL.add(fadeInSky())
.add(zoomOut(),"-=0.5")
.add(flightPath(),"-=0.75");


GSDevTools.create();