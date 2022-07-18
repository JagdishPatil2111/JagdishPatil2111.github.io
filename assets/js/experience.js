AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Cyber Security Intern",
    cardImage: "assets/images/experience-page/haryana_police.png",
    place: "Gurugram Police Cyber Security Summer Internship 2022",
    time: "(June, 2022 - July, 2022)",
    desp: "<li>Opportunity to learn from various experts from various domains of Cyber Security.</li> <li>Domains includes Cyber Forensics, Offensive Security, Cyber Psychology, Cyber Laws, etc.</li>",
  },
  {
    title: "Core Member",
    cardImage: "assets/images/experience-page/rnxg_logo.jpg",
    place: "Robotics for Next Generation(RNXG)",
    time: "(August, 2019 - Present)",
    desp: "<li>Participated in many robotics challenges and competitions.</li> <li>Got hands on experience in Electronics, Simulations & CAD designs and implemented in various projects.</li>",
  },
  {
    title: "Technical Team Member",
    cardImage: "assets/images/experience-page/isa_logo.jpg",
    place: "International Society of Automation(ISA)-SGGS",
    time: "(February 2021 - Present)",
    desp: "<li>Worked on FIEPER Robot, a humanoid robot meant to perform some specific tasks.</li><li>Worked on integrating the FIEPER with Virtual Reality to make it operable from any remote location.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "E - Yantra Robotics Challenge(2021-22) by IIT Bombay",
    cardImage: "assets/images/experience-page/robo_earth.png",
    description:
      "Qualified for Semi-finals in Soil Monitoring(SM) Bot theme.",
  },
  {
    title: "TryHackMe",
    cardImage: "assets/images/experience-page/thm.jpg",
    description:
      "Ranked in Top 11% of the global leaderboard.",
  },
  {
    title: "NahamConCTF 2022",
    cardImage: "assets/images/experience-page/naham.jpg",
    description:
      "Secured a Rank of 2023/4034 teams globally.",
  },
  {
    title: "PicoCTF 2022",
    cardImage: "assets/images/experience-page/pico.png",
    description:
      "Secured a Rank of 4051/7794 globally.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Sainya Ranakshetram 2021",
    subtitle: "Indian Army",
    image: "assets/images/experience-page/indian_army.jpg",
    desp: "Sainya Ranakshetram is the Indian Army's Annual Cyber Security Hackathon, organized by Military College of Telecommunication Engineering and Rashtriya Raksha University.",
  },
  {
    title: "CIT Cyber Security Hackathon 2022",
    subtitle: "Coimbatore Institute of Technology - Centre of Excellence(CIT-COE), Information Sharing and Analysis Centre(ISAC) & Tata Consultancy Services(TCS)",
    image: "assets/images/experience-page/isac.jpg",
    desp: "CIT Cyber Security Hackathon is a three stage CTF hackathon intended to hunt the bugs in systems and networks.",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="#" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
