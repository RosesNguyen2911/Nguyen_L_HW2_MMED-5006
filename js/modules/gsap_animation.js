export function gsapAnimation() {
    gsap.registerPlugin(ScrollTrigger);

const heroEyebrow = document.querySelector(".eyebrow");
const heroTitle = document.querySelector(".hero-section h1");
const heroCopy = document.querySelector(".hero-copy");
const heroCard = document.querySelector(".hero-card");

const overviewSection = document.querySelector("#overview");
const overviewLabels = document.querySelectorAll("#overview .section-label");
const overviewHeadings = document.querySelectorAll("#overview h2");
const overviewParagraphs = document.querySelectorAll("#overview p");

const howToUseSection = document.querySelector("#how-to-use");
const documentationBlocks = document.querySelectorAll(".doc-block");

const examplesSection = document.querySelector("#examples");
const demoCards = document.querySelectorAll(".demo-card");

const footerSection = document.querySelector(".site-footer");

function animateHeroEyebrow() {
    gsap.from(heroEyebrow, {
        y: 25,
        opacity: 0,
        duration: 0.8
    });
}

function animateHeroTitle() {
    gsap.from(heroTitle, {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.2
    });
}

function animateHeroCopy() {
    gsap.from(heroCopy, {
        y: 30,
        opacity: 0,
        duration: 0.9,
        delay: 0.4
    });
}

function animateHeroCard() {
    gsap.from(heroCard, {
        y: 40,
        opacity: 0,
        duration: 0.9,
        delay: 0.6
    });
}

function animateOverviewLabels() {
    gsap.from(overviewLabels, {
        scrollTrigger: {
            trigger: overviewSection,
            start: "top 80%"
        },
        y: 20,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15
    });
}

function animateOverviewHeadings() {
    gsap.from(overviewHeadings, {
        scrollTrigger: {
            trigger: overviewSection,
            start: "top 78%"
        },
        y: 25,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
    });
}

function animateOverviewParagraphs() {
    gsap.from(overviewParagraphs, {
        scrollTrigger: {
            trigger: overviewSection,
            start: "top 75%"
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15
    });
}

function animateDocumentationBlocks() {
    gsap.from(documentationBlocks, {
        scrollTrigger: {
            trigger: howToUseSection,
            start: "top 75%"
        },
        y: 45,
        opacity: 0,
        duration: 0.9,
        stagger: 0.18
    });
}

function animateExampleCards() {
    gsap.from(demoCards, {
        scrollTrigger: {
            trigger: examplesSection,
            start: "top 75%"
        },
        y: 50,
        opacity: 0,
        duration: 0.9,
        stagger: 0.2
    });
}

function runHeroAnimations() {
    animateHeroEyebrow();
    animateHeroTitle();
    animateHeroCopy();
    animateHeroCard();
}

function runScrollAnimations() {
    animateOverviewLabels();
    animateOverviewHeadings();
    animateOverviewParagraphs();
    animateDocumentationBlocks();
    animateExampleCards();
}

function initGsapAnimations() {
    runHeroAnimations();
    runScrollAnimations();
}

initGsapAnimations();
}