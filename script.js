// ========== SCROLL FADE EFFECT ==========
const sections = document.querySelectorAll('.section');

function handleScroll() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop > windowHeight * 0.3) {
            section.classList.add('fade-out');
        } else {
            section.classList.remove('fade-out');
        }
    });
}

window.addEventListener('scroll', handleScroll);

// ========== GALLERY ITEM CLICK ==========
const galleryItems = document.querySelectorAll('.gallery-item');
const modalBackdrop = document.createElement('div');
modalBackdrop.className = 'modal-backdrop';
document.body.appendChild(modalBackdrop);

galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        const id = this.getAttribute('data-id');
        const detail = document.getElementById(`activity-${id}`);
        
        if (detail) {
            detail.classList.add('active');
            modalBackdrop.classList.add('active');
        }
    });
});

// ========== CLOSE ACTIVITY DETAILS ==========
const closeButtons = document.querySelectorAll('.close-btn');

closeButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        const detail = this.closest('.activity-details');
        detail.classList.remove('active');
        modalBackdrop.classList.remove('active');
    });
});

// ========== MODAL BACKDROP CLICK ==========
modalBackdrop.addEventListener('click', function() {
    const activeDetails = document.querySelector('.activity-details.active');
    if (activeDetails) {
        activeDetails.classList.remove('active');
    }
    this.classList.remove('active');
});

// ========== SMOOTH SCROLL FOR ANCHOR LINKS ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ========== VIDEO CARD REDIRECT ==========
const videoCards = document.querySelectorAll('.video-card');

videoCards.forEach(card => {
    card.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href) {
            window.open(href, '_blank');
        }
    });
});

console.log('Portfolio website loaded successfully!');
