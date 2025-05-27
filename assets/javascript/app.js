/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')



/* SHOW MENU*/

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}


/* HIDE MENU*/

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav-link')


const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    //  when we click on each nav-link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
    const header = document.getElementById('header')
    // add a class if the bottom of the offset is greater than 50 of the viewport height

    this.scrollY >= 50 ? header.classList.add('shadow-header')
        : header.classList.remove('shadow-header')
}

window.addEventListener('scroll', shadowHeader)


/*=============== SWIPER TESTIMONIAL ===============*/

const swiperTestimonial = new Swiper('.testimonial-swiper', {
    loop: true,
    spaceBetween: 32,
    GrabCursor: true,

    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
    },

    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
    },

    // navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
    }
})



/*=============== FAQ ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.faq-accordion-item')

accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector('.faq-accordion-header')


    accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open')

        toggleItem(item)

        if (openItem && openItem !== item) {
            toggleItem(openItem)
        }

    })
})

const toggleItem = (item) => {
    const accordionContent = item.querySelector('.faq-accordion-content')

    if (item.classList.contains('accordion-open')) {
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    } else {
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }

}

/*=============== ACTIVATE NUMBER COUNTER ON SCROLL ===============*/
const counters = document.querySelectorAll(".counters h1")
const container = document.querySelector(".counters")

// variable that tracks if counter has been activated
let activated = false

// add scroll event to page
window.addEventListener("scroll", () => {
    if (
        pageYOffset > container.offsetTop - container.offsetHeight - 200
        && activated === false
    ) {
        counters.forEach(counter => {
            counter.innerText = 0
            //set count variable to track the count 
            let count = 0

            // update count function 
            function updateCount() {
                const target = parseInt(counter.dataset.count)
                // as long as the count is below the target number
                if (count < target) {
                    // increment the count
                    count++
                    // set the counter text to the count
                    counter.innerText = count
                    // repeat this every 10 miliseconds
                    setTimeout(updateCount, 10)
                } else {
                    // set the counter counter text to the target number
                    counter.innerText = target
                }
            }
            // run the count function initially
            updateCount()
            // set activated to true
            activated = true
        })
        // if the page is scrolled back a certain amount or to the top
        // and activated is true  
    } else if (
        pageYOffset < container.offsetTop - container.offsetHeight - 500
        || pageYOffset === 0
        && activated === true
    ) {
        // select all counters
        counters.forEach(counter => {
            // set counter text back to zero
            counter.innerText = 0
        })
        // set activated to false
        activated = false
    }
})


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']')

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)


/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // when the scroll is higher than 350 viewport height, add the show-scroll class to a tag with the scroll-up class

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1500,
    delay: 200,
    // reset: true, // Animations repeat
})

sr.reveal(`.home-data, .about-container, .footer-container, .testimonials, .blog, .portfolio-container`)
sr.reveal(`.home-images, .trusted-container, .faq-accordion`, { delay: 300, distance: '100px', origin: 'right' })
sr.reveal(`.faq-article, .contact-container`, { delay: 300, distance: '100px', origin: 'left' })
sr.reveal(`.services-container`, { delay: 400, distance: '100px', origin: 'bottom' })
sr.reveal(`.home-ingredient`, { delay: 2000, interval: 100 })
sr.reveal(`.about-data, .recipe-list, .contact-data, .section3`, { origin: 'right' })
sr.reveal(`.about-img, .about-heading, .about-mission, .services, .contact, .about-metrics, .about-testimonials, .contact-image`, { origin: 'left' })
sr.reveal(`.about-companies, .section-5, .section-2, .section2`, { interval: 100 })


