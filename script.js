var circle = document.getElementById('moving-circle');
var container = document.getElementById('container');
var btn = document.getElementById("download");

const myskillWrapper = document.getElementById("myskill-wrapper")
const Experience = document.getElementById("experience")
const Experience_btn = document.getElementById("button2")
const skill_btn = document.getElementById("button1")


container.addEventListener('mousemove', function (dets) {
    gsap.to(circle, {
        x: dets.x,
        y: dets.y,
        duration: 1,

    }
    )
})



// sidebar......//
const sidebarClose = document.getElementById('sidebar-logo-delete')
const sidebarSlide = document.getElementById('sidebar-logo');
const sidebar = document.getElementById('list-items')

sidebarSlide.addEventListener('click', function () {

    sidebar.style.display = "block"
    gsap.to(sidebar, {
        right: 0,
        opacity: 1,
        duration: 0.5,


    })
})

sidebarClose.addEventListener('click', function () {
    sidebar.style.display = "none"
    gsap.to(sidebar, {
        right: -200,
        opacity: 0,
        duration: 0.8,

    })
})

// myskill section..................////*

function myExperience() {
    myskillWrapper.style.display = "none";
    Experience.style.display = "block";
    Experience_btn.style.backgroundColor = "#65e442";
    Experience_btn.style.color = "white";
    skill_btn.style.background= "transparent"
}

function myskill() {
    myskillWrapper.style.display = "block";
    Experience.style.display = "none";
    Experience_btn.style.backgroundColor = "transparent";
    skill_btn.style.backgroundColor = "#65e442";
}

// FOR PROJECT SECTION........//*

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#project-section",
        start: "50% 50%",
        end: "100% 50%",
        scrub: 2,
        pin: true,

    }
});
tl.to("#scroll-top", { top: "-50%" }, "b");
tl.to("#scroll-bottom", { bottom: "-50%" }, "b")
tl.to("#scroll-top h1", {
    bottom: "-57%",
    duration: 2
}, "b");

tl.to("#scroll-bottom h1", {
    top: "-57%",
    duration: 2,

}, "b");

tl.from("#project-img", {opacity:0,
    y: "50%",
    duration: 2,
    stagger:1
},"b");

ScrollTrigger.matchMedia({
    // For mobile screens (max-width: 768px)
    "(max-width: 1000px)": function() {
        ScrollTrigger.getAll().forEach(trigger => {
            trigger.kill();
        });
        
        gsap.set("#project-img", { clearProps: "all" });
    }})

gsap.from("ul li", {
    opacity: 0,
    duration: 1,
    delay: 1,
    y: 30,
    stagger: 1
}, "a");

gsap.from("#content-img", {
    opacity: 0,
    duration: 1,
    delay: 1,
    y: 30,
    stagger: 1
}, "a")

gsap.from("#logo-content", {
    opacity: 0,
    duration: 3,
    delay: 1,
    stagger: 1
}, "a")

gsap.from("#text-div", {
    opacity: 0,
    duration: 1,
    delay: 1,
    x: -30,
    stagger: 1
}, "a")


