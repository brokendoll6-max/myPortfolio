// ===== MENÜÜ POPUP =====
const burger = document.querySelector(".burger");
const menuPopup = document.getElementById("menu-popup");
const closeMenu = document.getElementById("close-menu");

// ava menüü (slide sisse)
burger.addEventListener("click", () => {
    menuPopup.classList.remove("hidden");

    setTimeout(() => {
        menuPopup.classList.add("show");
    }, 10);
});

// sulge menüü (slide välja)
closeMenu.addEventListener("click", () => {
    menuPopup.classList.remove("show");

    setTimeout(() => {
        menuPopup.classList.add("hidden");
    }, 300);
});

// sulge menüü, kui lingile vajutada
const popupLinks = document.querySelectorAll(".popup-links a");

popupLinks.forEach(link => {
    link.addEventListener("click", () => {
        menuPopup.classList.remove("show");

        setTimeout(() => {
            menuPopup.classList.add("hidden");
        }, 300);
    });
});


// ===== KONTAKTI POPUP =====
const openContact = document.querySelector(".kontakt-mobiil button");
const contactPopup = document.getElementById("contact-popup");
const closeContact = document.getElementById("close-contact");

// ava kontakt (slide sisse)
openContact.addEventListener("click", () => {
    contactPopup.classList.remove("hidden");

    setTimeout(() => {
        contactPopup.classList.add("show");
    }, 10);
});

// sulge kontakt (X)
closeContact.addEventListener("click", () => {
    contactPopup.classList.remove("show");

    setTimeout(() => {
        contactPopup.classList.add("hidden");
    }, 300);
});

// sulge kontakt SAADA nupuga
const contactForm = document.querySelector("#contact-popup form");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    contactPopup.classList.remove("show");

    setTimeout(() => {
        contactPopup.classList.add("hidden");
    }, 300);
});

//galerii mobiilivaates
const mobileGalleryImage = document.querySelector('#mobile-gallery-image');

const galleryImages = [
    'lebo.jpg',
    'lill.jpg',
    'fun.jpg',
    'tydruk.jpg',
    'arhitekt.jpg',
    'kook.jpg'
];

let currentGalleryImageIndex = 0;

mobileGalleryImage.addEventListener('click', () => {
    currentGalleryImageIndex++;

    if (currentGalleryImageIndex >= galleryImages.length) {
        currentGalleryImageIndex = 0;
    }

    mobileGalleryImage.src = 'images/' + galleryImages[currentGalleryImageIndex];
});