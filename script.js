/* =========================================================
   MAVLA PRATISHTHAN
   Main JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* ================= MOBILE MENU ================= */

    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.querySelector(".nav-menu");

    if (menuBtn && navMenu) {

        menuBtn.addEventListener("click", () => {

            navMenu.classList.toggle("show");

            const icon = menuBtn.querySelector("i");

            if (navMenu.classList.contains("show")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");
            } else {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }

        });

    }


    /* ================= CLOSE MOBILE MENU ================= */

    const navLinks = document.querySelectorAll(".nav-menu a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            if (navMenu) {
                navMenu.classList.remove("show");
            }

            const icon = menuBtn?.querySelector("i");

            if (icon) {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }

        });

    });


    /* ================= ACTIVE NAV LINK ================= */

    const sections = document.querySelectorAll("section[id]");

    function updateActiveLink() {

        const scrollPosition = window.scrollY + 180;

        sections.forEach(section => {

            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute("id");

            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionTop + sectionHeight
            ) {

                navLinks.forEach(link => {
                    link.classList.remove("active");
                });

                const activeLink = document.querySelector(
                    `.nav-menu a[href="#${sectionId}"]`
                );

                if (activeLink) {
                    activeLink.classList.add("active");
                }

            }

        });

    }

    window.addEventListener("scroll", updateActiveLink);

    updateActiveLink();


    /* ================= NAVBAR SCROLL EFFECT ================= */

    const navbar = document.querySelector(".navbar");

    function navbarScrollEffect() {

        if (!navbar) return;

        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    }

    window.addEventListener("scroll", navbarScrollEffect);

    navbarScrollEffect();


    /* ================= SCROLL REVEAL ================= */

    const revealElements = document.querySelectorAll(
        ".section-heading, .about-content, .event-placeholder, .gallery-placeholder, .social-card, .contact-card"
    );

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("revealed");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(element => {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });


    /* ================= CURRENT YEAR ================= */

    const copyright = document.querySelector(".copyright");

    if (copyright) {

        const currentYear = new Date().getFullYear();

        copyright.innerHTML =
            `© ${currentYear} मावळा प्रतिष्ठान. सर्व हक्क राखीव.`;

    }


    /* ================= CONSOLE MESSAGE ================= */

    console.log(
        "🚩 Mavla Pratishthan Website Loaded Successfully!"
    );

});
