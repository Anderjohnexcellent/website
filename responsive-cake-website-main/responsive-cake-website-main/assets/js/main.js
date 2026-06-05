/*=============== SHOW & CLOSE MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

// menu show
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
// menu hidden
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MOBILE MENU ===============*/
const navLink = document.querySelectorAll('.nav__link')

const LinkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // when we click on each nav__link, we remove the show-menu close
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', LinkAction))


/*=============== HOME SWIPER ===============*/
const swiperHome = new Swiper('.home__swiper ', {
    loop: true,
    grabCursor: true,
    speed: 800,
    effect: 'creative',
    creativeEffect: {
        prev: {
            translate: ['-120%', 0, -500],
            rotate: [0, 0, -45],
            opacity: 0,
        },
        next: {
            translate: ['120%', 0, -500],
            rotate: [0, 0, 45],
            opacity: 0,
        },
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});

/*=============== CHANGE HEADER STYLES ===============*/
const shadowHeader = () => {
    const header = document.getElementById('header')
    // Add a class if the button offset is greater than 50 of the 
    this.scrollY >= 50 ? header.classList.add('scroll-header')
        : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== PRODUCTS SWIPER ===============*/
// Initialize tabs swiper
const swiperTabs = new Swiper('.product__tabs', {
    slidesPerView: 'auto',
    allowTouchMove: false
})

// Initialize products swiper
const swiperProducts = new Swiper('.product__content', {
    loop: false,
    spaceBetween: 32,
    slidesPerView: 1,
    allowTouchMove: true
})

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
    const productButtons = document.querySelectorAll('.product__button')

    // Add click listeners to product buttons
    productButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            swiperProducts.slideTo(index)
            productButtons.forEach(btn => btn.classList.remove('active-tab'))
            button.classList.add('active-tab')
        })
    })

    // Update tab styling when product swiper slides
    swiperProducts.on('slideChange', () => {
        productButtons.forEach((btn, index) => {
            if (index === swiperProducts.activeIndex) {
                btn.classList.add('active-tab')
            } else {
                btn.classList.remove('active-tab')
            }
        })
    })

    // Set first tab as active on load
    if (productButtons.length > 0) {
        productButtons[0].classList.add('active-tab')
    }
})
/*=============== NEW SWIPER ===============*/
const swiperMew = new Swiper('.new__swiper', {
    loop: true,
    grabCursor: true,
    centeredSlides: true,  // ← Change from 'auto' to true
    speed: 600,
    effect: 'creative',
    creativeEffect: {
        limitProgress: 2,
        prev: {
            translate: ['-32%', 0, 0],
            scale: .58,
        },
        next: {
            translate: ['32%', 0, 0],
            scale: .58,
        },
    },
    navigation: {
        nextEl: '.new .swiper-button-next',
        prevEl: '.new .swiper-button-prev',
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loopAdditionalSlides: 1,  // ← Add this for smoother looping
})

/*=============== SHOW SCROLL UP ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

// Home section - One by one special animations
sr.reveal('.home__title', {
    origin: 'left',
    distance: '100px',
    duration: 2800,
    delay: 100
})

sr.reveal('.home__slice-1', {
    origin: 'left',
    distance: '80px',
    duration: 2600,
    delay: 150,
    rotate: { z: -20 }
})

sr.reveal('.home__balloons', {
    origin: 'top',
    distance: '150px',
    duration: 3000,
    delay: 200,
    rotate: { z: 15 },
    scale: 0.5
})

sr.reveal('.home__slice-2', {
    origin: 'right',
    distance: '80px',
    duration: 2600,
    delay: 250,
    rotate: { z: 20 }
})

sr.reveal('.home__description', {
    origin: 'left',
    distance: '100px',
    duration: 2800,
    delay: 400
})

sr.reveal('.button', {
    origin: 'left',
    distance: '100px',
    duration: 2800,
    delay: 700
})

// Home images - Special reveal - one by one
sr.reveal('.home__blob', {
    origin: 'right',
    distance: '120px',
    duration: 2800,
    delay: 900
})

sr.reveal('.home__sticker-1, .home__sticker-2, .home__sticker-3, .home__sticker-4', {
    origin: 'right',
    distance: '50px',
    duration: 2000,
    delay: 1200,
    interval: 200
})

sr.reveal('.home__base', {
    origin: 'bottom',
    distance: '80px',
    duration: 2800,
    delay: 1500
})

sr.reveal('.home__swiper', {
    origin: 'right',
    distance: '100px',
    duration: 2800,
    delay: 1800,
    scale: 0.85
})

sr.reveal('.home__leaf-1, .home__leaf-2, .home__leaf-3', {
    origin: 'left',
    distance: '50px',
    duration: 2000,
    delay: 2000,
    interval: 150
})

// About section
sr.reveal('.about__cupcake-1', {
    origin: 'top',
    distance: '100px',
    duration: 2800,
    delay: 200,
    rotate: { z: 25 }
})

sr.reveal('.about__data', { 
    origin: 'right',
    distance: '100px',
    duration: 2800,
    delay: 400
})

sr.reveal('.about__images', { 
    origin: 'left',
    distance: '100px',
    duration: 2800,
    delay: 500
})

sr.reveal('.about__cupcake-2', {
    origin: 'bottom',
    distance: '100px',
    duration: 2800,
    delay: 700,
    rotate: { z: -30 }
})

// New section
sr.reveal('.new__data', { 
    origin: 'right',
    distance: '100px',
    duration: 2800,
    delay: 300
})

sr.reveal('.new__titles', {
    origin: 'top',
    distance: '80px',
    duration: 2600,
    delay: 400
})

sr.reveal('.new__leaf-1, .new__leaf-2, .new__leaf-3', { 
    distance: '70px',
    duration: 2500,
    delay: 500,
    interval: 150
})

sr.reveal('.new__swiper', { 
    origin: 'left',
    distance: '100px',
    duration: 2800,
    delay: 600
})

// Contact section
sr.reveal('.contact__content', { 
    origin: 'left',
    distance: '100px',
    duration: 2800,
    delay: 300
})

sr.reveal('.contact__info', {
    origin: 'left',
    distance: '60px',
    duration: 2600,
    delay: 400,
    interval: 100
})

sr.reveal('.contact__map', { 
    origin: 'right',
    distance: '100px',
    duration: 2800,
    delay: 500,
    scale: 0.95
})

sr.reveal('.contact__sticker-1, .contact__sticker-2, .contact__sticker-3', {
    distance: '50px',
    duration: 2200,
    delay: 600,
    interval: 150
})
