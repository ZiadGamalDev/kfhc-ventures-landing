// ====== Fake API Data ======

const teamData = {
    abdulmohsen: {
        name: "Abdulmohsen Alhamad",
        title: "Senior Vice President",
        company: "at KFH Capital",
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
        title: "Senior Manager",
        company: "at KFH Capital",
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
        title: "Assistant Vice President",
        company: "at KFH Capital",
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

const directorData = [
    {
        name: "Abdulmohsen Alhamad",
        title: "Senior Vice President",
        company: "at KFH Capital",
        linkedin: "https://www.linkedin.com/in/abdulmohsenalhamad/"
    },
    {
        name: "Abdullah Alhaddad",
        title: "Chief Investment Banking Officer",
        company: "at KFH Capital",
        linkedin: "https://www.linkedin.com/in/abdullah-alhaddad-babb1b28/"
    }
];

const portfolioData = [
    {
        name: "COFE",
        image: "assets/img/portfolio/COFE.png",
        location: "UAE/KSA",
        description: "COFE is a beverage solution company that connects and empowers the coffee ecosystem using technology, promoting sustainable coffee initiatives.",
        website: "https://www.cofeapp.com/"
    },
    {
        name: "Aqarmap",
        image: "assets/img/portfolio/aqarmap.png",
        location: "Egypt",
        description: "Aqarmap is a leading online real estate portal operating in Egypt and Saudi Arabia.",
        website: "https://aqarmap.com.eg/en/"
    },
    {
        name: "MAGNiTT",
        image: "assets/img/portfolio/MAGNITT.png",
        location: "UAE",
        description: "MAGNiTT is the leading data platform for verified venture capital and private equity data in the Middle East, Africa, Pakistan, and Turkey.",
        website: "https://magnitt.com/"
    },
    {
        name: "Coded",
        image: "assets/img/portfolio/CODED.png",
        location: "Kuwait",
        description: "Coded is a leading coding academy in Kuwait offering coding boot camps & courses.",
        website: "https://www.joincoded.com/coded"
    }
];

const exitData = [
    {
        name: "Melltoo",
        image: "assets/img/exit/Melltoo.png",
        location: "UAE"
    },
    {
        name: "POS Rocket",
        image: "assets/img/exit/POSRocket.png",
        location: "Jordan"
    }
];

// ====== Dynamic Render Functions ======

function renderTeam() {
    const container = document.querySelector('.team-section .row.justify-content-between');
    container.innerHTML = '';
    for (const key in teamData) {
        const member = teamData[key];
        container.innerHTML += `
            <div class="col-md-3">
                <div class="team-card">
                    <img data-member="${key}" src="${member.image}" alt="${member.name}" class="team-img">
                    <h5 class="team-name">${member.name}</h5>
                    <p><span class="team-title fw-bold">${member.title}</span><br>${member.company}</p>
                    <a href="${member.linkedin}" target="_blank" class="social-icon">
                        <i class="fab fa-linkedin fa-lg"></i>
                    </a>
                </div>
            </div>
        `;
    }
}

function renderDirectors() {
    const container = document.querySelectorAll('.team-section .container')[1].querySelector('.row');
    container.innerHTML = '';
    directorData.forEach((dir, i) => {
        container.innerHTML += `
            <div class="col-md-4 col-sm-6">
                <div class="team-card">
                    <h5 class="team-name">${dir.name}</h5>
                    <p><span class="team-title fw-bold">${dir.title}</span><br>${dir.company}</p>
                    <a href="${dir.linkedin}" target="_blank" class="social-icon">
                        <i class="fab fa-linkedin fa-lg"></i>
                    </a>
                </div>
            </div>
            ${i === 0 ? '<div class="col-md-1 d-flex align-items-center justify-content-center"><div class="thinner-vertical-line"></div></div>' : ''}
        `;
    });
}

function renderPortfolio() {
    const container = document.querySelector('#portfolio .row');
    container.innerHTML = '';
    portfolioData.forEach(project => {
        container.innerHTML += `
            <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="portfolio-card">
                    <img src="${project.image}" alt="${project.name}" class="portfolio-logo">
                    <span class="location-tag fw-bold">${project.location}</span>
                    <div class="portfolio-hover">
                        <p>${project.description}</p>
                        <a href="${project.website}" target="_blank" class="portfolio-hover-btn btn btn-light">Visit Website</a>
                    </div>
                </div>
            </div>
        `;
    });
}

function renderExit() {
    const container = document.querySelector('#exit .row');
    container.innerHTML = '';
    exitData.forEach(company => {
        container.innerHTML += `
            <div class="col-md-3 col-sm-6">
                <div class="exit-card">
                    <img src="${company.image}" alt="${company.name}" class="portfolio-logo">
                    <span class="fw-bold location-tag">${company.location}</span>
                </div>
            </div>
        `;
    });
}

// ====== Initialize Everything ======

renderTeam();
renderDirectors();
renderPortfolio();
renderExit();

// ====== Modal ======

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
                    <p class="fs-5 mb-4 profile-info">${member.company}</p>
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
