import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const animationDelay = 0.55;


const pcScreen = window.matchMedia('(min-width: 993px)')
if (pcScreen.matches) {
    const tl = gsap.timeline()
    tl
    .fromTo(
    '.nav-list__item',
    {
        yPercent: -100,
        opacity: 0,
    },
    {
        yPercent: 0,
        opacity: 1,
        duration: 0.2,
        stagger: 0.15,
    }, animationDelay,)

    .fromTo(
    '.nav-booking__tel',
    {
        yPercent: -100,
        opacity: 0,
    },
    {
        yPercent: 0,
        opacity: 1,
        duration: 0.2,
    })
    .fromTo(
    '.nav-booking__dark-mode-btn',
    {
        yPercent: -70,
        opacity: 0,
    },
    {
        yPercent: 0,
        opacity: 1,
        duration: 0.2,
    })
    .fromTo(
    '.nav-booking__btn',
    {
        yPercent: -70,
        opacity: 0,
    },
    {
        yPercent: 0,
        opacity: 1,
        duration: 0.2,
    })
} else {
    const tl = gsap.timeline()
    tl
    .fromTo(
    '.nav-list__item',
    {
        yPercent: -100,
        opacity: 0,
    },
    {
        yPercent: 0,
        opacity: 1,
        duration: 0.2,
        stagger: 0.15,
    }, animationDelay,)
    
    .fromTo(
    '.nav-booking__btn',
    {
        yPercent: -70,
        opacity: 0,
    },
    {
        yPercent: 0,
        opacity: 1,
        duration: 0.2,
    })

    .fromTo(
    '.nav-booking__tel',
    {
        yPercent: -100,
        opacity: 0,
    },
    {
        yPercent: 0,
        opacity: 1,
        duration: 0.2,
    })

    .fromTo(
    '.nav-booking__dark-mode-btn',
    {
        yPercent: -70,
        opacity: 0,
    },
    {
        yPercent: 0,
        opacity: 1,
        duration: 0.2,
    })
}


