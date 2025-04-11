// Team member data
const teamData = {
    abdulmohsen: {
        name: "Abdulmohsen Alhamad",
        title: "Senior Vice President at KFH Capital",
        details: [
            "Extensive experience in VC & PE",
            "Led exits of several notable companies in the region",
            "Board member in several companies",
            "BA in Finance from University of Colorado and CFA charterholder (CFA Institute)"
        ],
        image: "assets/img/team/Abdulmohsen-Alhamad.png",
        linkedin: "https://www.linkedin.com/in/abdulmohsenalhamad/"
    },
    aatef: {
        name: "Aatef A. Baig",
        title: "Senior Manager at KFH Capital",
        details: [
            "Over 10 years of experience in managing VC investments",
            "Strong valuation & due diligence expertise",
            "Led valuation of several large companies",
            "Previous experience in EY's corporate finance advisory",
            "BSc in Finance from Oxford B. University and MSc in Investment Banking from University of Reading"
        ],
        image: "assets/img/team/Aatef-A.Baig.png",
        linkedin: "https://www.linkedin.com/in/aatefbaig/"
    },
    khaled: {
        name: "Khaled Alosaimi",
        title: "Assistant Vice President at KFH Capital",
        details: [
            "Several years of experience in managing PE & VC investments",
            "Founded and Funded multiple start-ups in different sectors",
            "Board member in several companies",
            "BS in Business Administration from Pepperdine University"
        ],
        image: "assets/img/team/Khaled-Alosaimi.png",
        linkedin: "https://kw.linkedin.com/in/khalid-al-osaimi-cim-12a83511"
    }
};

// Initialize Bootstrap modal
const teamModal = new bootstrap.Modal(document.getElementById('teamModal'));

// Handle team member card clicks
document.querySelectorAll('.team-img').forEach(card => {
    card.addEventListener('click', function () {
        const member = teamData[this.dataset.member];

        // Populate modal content
        const modalContent = document.querySelector('.team-modal-content');
        modalContent.innerHTML = `
            <div class="row g-0">
                <div class="col-md-5 modal-card-left">
                    <img src="${member.image}" alt="${member.name}" class="profile-image">
                    <h2 class="fs-3 mb-2 profile-info">${member.name}</h2>
                    <p class="fs-5 mb-4 profile-info">${member.title}</p>
                    <a href="${member.linkedin}" target="_blank" class="profile-info">
                        <i class="fab fa-linkedin"></i>
                    </a>
                </div>
                <div class="col-md-7 modal-card-right">
                    <div class="vertical-line"></div>
                    <div class="content">
                        <p class="fs-5">${member.details.join('</p><p class="fs-5">')}</p>
                    </div>
                </div>
            </div>
        `;

        // Show modal
        teamModal.show();
    });
});

// Handle contact form submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value
    };

    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);

    // Reset form
    this.reset();

    // Show success message (you can customize this)
    alert('Thank you for your message. We will get back to you soon!');
});

// Add navbar background on scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    const logo = document.querySelector('.logo');
    if (window.scrollY > 100) {
        navbar.classList.add('bg-dark');
        logo.style.height = '30px';
    } else {
        navbar.classList.remove('bg-dark');
        logo.style.height = '70px';
    }
});

// Initialize smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');

        if (targetId === '#') return;

        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
