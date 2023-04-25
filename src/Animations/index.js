import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Animation = (ref, x1, x2, y1, y2, op1, op2, sc1, sc2, rot1, rot2) => {
  gsap.fromTo(
    ref,
    { opacity: op1, x: x1, y: y1, scale: sc1, rotate: rot1 },
    {
      scrollTrigger: {
        trigger: ref,
        //toggleActions: "none none none none",
        //markers: true,
        start: "30px 80%",
      },
      opacity: op2,
      x: x2,
      y: y2,
      scale: sc2,
      rotate: rot2,
      duration: 1,
    }
  );
};

export default Animation;
