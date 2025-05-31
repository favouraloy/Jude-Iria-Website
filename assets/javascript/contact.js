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