const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },

  'h4': {
    "features-h4": "Features",
    "about-h4": "About",
    "services-h4": "Services",
    "product-h4": "Product",
    "vision-h4": "Vision",
  },

  'p': {
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
 
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    
 
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
 
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },

  "main-content": {
   
  "middle-img-src": "img/mid-page-accent.jpg"
   
  },
  "contact-h4": "Contact",
  "contact": {
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
}

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Header 
let headLinks = document.querySelectorAll('.container header nav a');
let navLinkTexts = Object.values(siteContent.nav);

headLinks.forEach((link, i ) => {
  link.textContent = navLinkTexts[i]
});

// CTA 
let mainImg = document.querySelector('#cta-img');
mainImg.src = 'img/header-img.png';

let cta = document.querySelector('.cta h1')
cta.innerHTML = 'DOM <br> IS <br> AWSOME';

//Main
let mainContent = document.querySelectorAll('.main-content h4')
let mainH4 = Object.values(siteContent.h4);
let mainContentP = document.querySelectorAll('.main-content p')
let mainP = Object.values(siteContent.p);

mainContent.forEach((link, i) =>   link.textContent = mainH4[i]);
mainContentP.forEach((link, i) => link.textContent = mainP[i]);

let midImg = document.querySelector('#middle-img')
midImg.src = 'img/mid-page-accent.jpg'
// Contact 

document.querySelector('.contact h4').innerHTML = 'Contact';
let contactP = document.querySelectorAll('.contact p')
let contContactP = Object.values(siteContent.contact)
contactP.forEach((link, i) => link.textContent = contContactP[i]);

console.log(mainH4)

let navAp = document.createElement('NewLink')
document.body.appendChild(navAP);

