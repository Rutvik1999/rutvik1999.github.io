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
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.expand-btn').forEach(button => {
        button.addEventListener('click', function() {
            const detailsList = this.closest('.experience-card').querySelector('ul');
            // Check if we are expanding or collapsing
            if (detailsList.style.maxHeight === '0px' || !detailsList.style.maxHeight) {
                // Expand the content
                this.textContent = '−';
                // Remove 'hidden' class if present, though visibility is controlled via maxHeight
                detailsList.classList.remove('hidden');
                // Immediately set maxHeight to enable the content to expand
                detailsList.style.maxHeight = detailsList.scrollHeight + 'px';
            } else {
                // Collapse the content
                this.textContent = '+';
                detailsList.style.maxHeight = '0px';
                // No need to add 'hidden' class since maxHeight controls visibility
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.expand-btn').forEach(button => {
        button.addEventListener('click', function() {
            const detailsList = this.closest('.education-card').querySelector('ul');
            // Check if we are expanding or collapsing
            if (detailsList.style.maxHeight === '0px' || !detailsList.style.maxHeight) {
                // Expand the content
                this.textContent = '−';
                // Remove 'hidden' class if present, though visibility is controlled via maxHeight
                detailsList.classList.remove('hidden');
                // Immediately set maxHeight to enable the content to expand
                detailsList.style.maxHeight = detailsList.scrollHeight + 'px';
            } else {
                // Collapse the content
                this.textContent = '+';
                detailsList.style.maxHeight = '0px';
                // No need to add 'hidden' class since maxHeight controls visibility
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.expand-btn').forEach(button => {
        button.addEventListener('click', function() {
            const detailsList = this.closest('.project-card').querySelector('ul');
            // Check if we are expanding or collapsing
            if (detailsList.style.maxHeight === '0px' || !detailsList.style.maxHeight) {
                // Expand the content
                this.textContent = '−';
                // Remove 'hidden' class if present, though visibility is controlled via maxHeight
                detailsList.classList.remove('hidden');
                // Immediately set maxHeight to enable the content to expand
                detailsList.style.maxHeight = detailsList.scrollHeight + 'px';
            } else {
                // Collapse the content
                this.textContent = '+';
                detailsList.style.maxHeight = '0px';
                // No need to add 'hidden' class since maxHeight controls visibility
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
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
