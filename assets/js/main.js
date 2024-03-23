/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.expand-btn').forEach(button => {
        button.addEventListener('click', function() {
            const detailsList = this.closest('.experience-card').querySelector('ul');

            if (detailsList.style.maxHeight === '0px' || !detailsList.style.maxHeight) {

                this.textContent = '−';

                detailsList.classList.remove('hidden');

                detailsList.style.maxHeight = detailsList.scrollHeight + 'px';
            } else {

                this.textContent = '+';
                detailsList.style.maxHeight = '0px';

            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.expand-btn').forEach(button => {
        button.addEventListener('click', function() {
            const detailsList = this.closest('.education-card').querySelector('ul');

            if (detailsList.style.maxHeight === '0px' || !detailsList.style.maxHeight) {

                this.textContent = '−';

                detailsList.classList.remove('hidden');

                detailsList.style.maxHeight = detailsList.scrollHeight + 'px';
            } else {

                this.textContent = '+';
                detailsList.style.maxHeight = '0px';

            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.expand-btn').forEach(button => {
        button.addEventListener('click', function() {
            const detailsList = this.closest('.project-card').querySelector('ul');

            if (detailsList.style.maxHeight === '0px' || !detailsList.style.maxHeight) {

                this.textContent = '−';

                detailsList.classList.remove('hidden');

                detailsList.style.maxHeight = detailsList.scrollHeight + 'px';
            } else {

                this.textContent = '+';
                detailsList.style.maxHeight = '0px';

            }
        });
    });
});

const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1250,
    delay: 125,
    reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 100}); 
sr.reveal('.home__social-icon',{ interval: 50}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 50}); 
sr.reveal('.skill-card',{interval: 50}); 
sr.reveal('.experience-card',{interval: 50}); 
sr.reveal('.education-card',{interval: 50}); 
sr.reveal('.experience-card',{interval: 50}); 
sr.reveal('.project-card',{interval: 50}); 
sr.reveal('.certification-card',{interval: 50}); 
sr.reveal('.footer__social',{ interval: 50}); 