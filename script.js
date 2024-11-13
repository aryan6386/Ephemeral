const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth:true
});
gsap.from(".nlink", {
    stagger: 0.1,
    y: 10,
    duration: 1,
    ease: Power2, // Use a string to reference the ease function
    opacity: 0,
});

Shery.textAnimate("#headings h1" , {
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });
gsap.from(".anim2",{
    y:10,
    opacity:0,
    ease: Power2,
    duration:2
})