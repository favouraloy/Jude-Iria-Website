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

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    contactNumber = document.getElementById('phone-number'),
    contactBusiness = document.getElementById('business-name'),
    contactOption = document.getElementById('select'),
    contactProject = document.getElementById('contact-project'),
    contactMessage = document.getElementById('contact-message')



const sendEmail = (e) => {
    e.preventDefault()

    // check if the field has a value
    if (contactName.value === '' || contactEmail.value === '' || contactNumber.value === '' || contactBusiness.value === ''
        || contactOption.value === '' || contactProject.value === '') {
        // add and remove color
        contactMessage.classList.remove('color-blue')
        contactMessage.classList.add('color-red')

        // show message
        contactMessage.textContent = 'Fill in all the Input Fields 📩'
    } else {
        // serviceID -         templateID -        #form -        publicKey
        emailjs.sendForm('service_dfyi84i', 'template_h5od1x5', '#contact-form', 'JVFLsSLy8Tm8fcJ2T')
            .then(() => {
                // show message and add color
                contactMessage.classList.add('color-blue')
                contactMessage.textContent = 'Message Sent ✅'


                // remove message after five seconds
                setTimeout(() => {
                    contactMessage.textContent = ''
                }, 5000)
            }, () => {

                // show error message maybe due to poor service
                contactMessage.classList.add('color-red')
                contactMessage.textContent = 'Message not sent (service error) ❌'


                // Remove message after five seconds
                setTimeout(() => {
                    contactMessage.textContent = ''
                }, 4000)
            })

        // to clear the field
        contactName.value = ''
        contactEmail.value = ''
        contactNumber.value = ''
        contactBusiness.value = ''
        contactOption.value = ''
        contactProject.value = ''
    }
}
contactForm.addEventListener('submit', sendEmail)