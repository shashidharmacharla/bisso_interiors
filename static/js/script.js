// Navbar Background Change on Scroll

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.classList.add("shadow");
        navbar.style.backgroundColor = "#000";

    } else {

        navbar.classList.remove("shadow");
        navbar.style.backgroundColor = "transparent";

    }

});


// Smooth Scroll Effect

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({

            behavior: 'smooth'

        });

    });

});


// Fade In Animation on Scroll

const fadeElements = document.querySelectorAll(".fade-in");

function fadeInOnScroll() {

    fadeElements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", fadeInOnScroll);

fadeInOnScroll();


// Gallery Image Hover Zoom

const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach(image => {

    image.addEventListener("mouseover", () => {

        image.style.transform = "scale(1.05)";
        image.style.transition = "0.4s";

    });

    image.addEventListener("mouseout", () => {

        image.style.transform = "scale(1)";

    });

});


// Typing Animation

const text = "Luxury Interior Designs";

let index = 0;

function typingEffect() {

    const typingElement = document.getElementById("typing-text");

    if (typingElement && index < text.length) {

        typingElement.innerHTML += text.charAt(index);

        index++;

        setTimeout(typingEffect, 100);

    }

}

typingEffect();


// Counter Animation

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = '0';

    const updateCounter = () => {

        const target = +counter.getAttribute('data-target');

        const current = +counter.innerText;

        const increment = target / 100;

        if (current < target) {

            counter.innerText = `${Math.ceil(current + increment)}`;

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});


// Back To Top Button

const topButton = document.getElementById("topBtn");

window.onscroll = function () {

    if (document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300) {

        if (topButton) {
            topButton.style.display = "block";
        }

    } else {

        if (topButton) {
            topButton.style.display = "none";
        }

    }

};


function topFunction() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}