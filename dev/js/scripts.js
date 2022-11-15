import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

gsap.to("#shades",{duration:1,rotate:180,ease:"none",transformOrigin:"center"});
gsap.to("#clip",{duration:5, scale:0,ease:"none",transformOrigin:"center"},"-=1");

GSDevTools.create();
