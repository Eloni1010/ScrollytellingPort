gsap.registerPlugin(ScrollTrigger);
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)
 });
const curtainTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".curtain-container",
    start: "top top",
    end: "+=1500",
    scrub: 1,
    pin: true,
    anticipatePin: 1
  }
});

const leftPanels = gsap.utils.toArray(".left-side .panel"); 
const rightPanels = gsap.utils.toArray(".right-side .panel");
curtainTl.to(leftPanels, {
  rotation: -65,                
  scaleY: 0.1,                  
  x: -50,                       
  transformOrigin: "top left", 
  opacity: 0,                   
  stagger: 0.05,
  ease: "power1.inOut"
})
.to(rightPanels, {
  rotation: 65,                 
  scaleY: 0.1,
  x: 50,
  transformOrigin: "top right",
  opacity: 0,
  stagger: 0.05,
  ease: "power1.inOut"
}, "<");
gsap.from(".firstMeet", {
  x: "60vw",
  duration: 3,
  scrollTrigger: {
    trigger: ".firstMeetMove",
    start: "top bottom", 
    toggleActions: "play pause resume pause" 
  }
});
gsap.to("#ticketPink", {
  x: "60vw",
  rotation: 15,
  duration: 3,
  ease: "power1.inOut",
  repeat: -1,
  yoyo: true,
  transformOrigin: "50% 50%",

  scrollTrigger: {
    trigger: ".variables",
    start: "top bottom", // Starts playing when the top of the container enters the bottom of the screen
    toggleActions: "play pause resume pause" // Plays when visible, pauses when scrolled away
  }
});
gsap.from(".variablesChat", {
  x: "60vw",
  duration: 3,
  scrollTrigger: {
    trigger: ".variablesChatMove",
    start: "top bottom", 
    toggleActions: "play pause resume pause" 
  }
});
gsap.to("#ticketRed", {
  x: "60vw",
  rotation: 15,
  duration: 3,
  ease: "power1.inOut",
  repeat: -1,
  yoyo: true,
  transformOrigin: "50% 50%",
  scrollTrigger: {
    trigger: ".altTicket",
    start: "top bottom", 
    toggleActions: "play pause resume pause" 
  }
});
gsap.to(".TT", {
  x: "60vw",
  duration: 3,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: ".TTMove",
    start: "top bottom", 
    toggleActions: "play pause resume pause" 
  }
});
gsap.from(".tentAndTicket", {
  x: "-60vw",
  duration: 3,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: ".circus",
    start: "top bottom", 
    toggleActions: "play pause resume pause" 
  }
});
gsap.from(".memory", {
  x: "60vw",
  duration: 3,
  scrollTrigger: {
    trigger: ".memoryMove",
    start: "top bottom", 
    toggleActions: "play pause resume pause" 
  }
});
