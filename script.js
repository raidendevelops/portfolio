// Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 1000, // Animation duration
    easing: 'ease-in-out',
    once: true, // Animations happen once
  });
  
  // Typewriter Effect with Typed.js
  const typed = new Typed("#typed-text", {
    strings: [
      "I'm a Web Developer.",
      "I build amazing websites.",
      "I build stuff for fun",
      "I can make API's"
    ],
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 1000,
    loop: true
  });
  
