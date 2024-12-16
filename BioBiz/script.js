const marquee =document.querySelector(".marquee");

// marqueee animation
gsap.to(marquee,{
    x:"-100%",
    duration:60,
    delay:0,
    repeat:-1,
})

// call to action btn

gsap.from(".view-btn",{
    x:"5rem",
    yoyo:true,
    repeat:-1,
    duration:1.5,
    ease:"power1.inOut"
})

// india updates
gsap.to(".updates p",{
    y:"-100%",
    repeat:-1,
    duration:40,
    delay:1,
    ease:'linear'
})

