window.addEventListener("load", () => {
  const menu = document.querySelector(".menu");
const cross = document.querySelector(".cross");
const t1 = gsap.timeline();

if (window.innerWidth <= 1080) {
    // Mobile

    gsap.from(".logo", {
        x: -100,
        opacity: 0,
        duration: 2,
        ease: "power4.out",
    })
    gsap.from(".menu ", {
        x: 200,
        opacity: 0,
        duration: 2,
        ease: "power4.out",
    })

    t1.to(".nav-links", {
        right: 0,
        duration: 0.6,
    });

    t1.from(".nav-links ul li", {
        x: 250,
        opacity: 0,
        duration: 0.4,
        stagger: 0.25,
    });

    t1.from(".cross", {
        opacity: 0
    });

    t1.pause()

    menu.addEventListener("click", () => { t1.play() });
    cross.addEventListener("click", () => t1.reverse());


} else {
    // Desktop
    t1.from(".logo", {
        y: -250,
        opacity: 0,
        duration: 1,
        ease: "power1.out",
    })

    t1.from(".nav-links ul li", {
        y: -90,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
    })

}



});
