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
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Nav Links
let links = document.getElementsByTagName('a');
links[0].textContent = siteContent["nav"]['nav-item-1'];
links[1].textContent = siteContent["nav"]['nav-item-2'];
links[2].textContent = siteContent["nav"]['nav-item-3'];
links[3].textContent = siteContent["nav"]['nav-item-4'];
links[4].textContent = siteContent["nav"]['nav-item-5'];
links[5].textContent = siteContent["nav"]['nav-item-6'];

let h1text = document.querySelector('h1');
h1text.textContent = "DOM Is Awesome";

let ctabutton = document.querySelector('button');
ctabutton.textContent = "Get Started";

let bannerImg = document.getElementById("cta-img");
bannerImg.setAttribute('src', siteContent["cta"]["img-src"]);

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent['main-content']["middle-img-src"]);

let mainTitle = document.querySelectorAll('h4');
mainTitle[0].textContent = siteContent["main-content"]['features-h4'];
mainTitle[1].textContent = siteContent["main-content"]['about-h4'];
mainTitle[2].textContent = siteContent["main-content"]['services-h4'];
mainTitle[3].textContent = siteContent["main-content"]['product-h4'];
mainTitle[4].textContent = siteContent["main-content"]['vision-h4'];

let mainText = document.querySelectorAll('p')
mainText[0].textContent = siteContent["main-content"]['features-content'];
mainText[1].textContent = siteContent["main-content"]['about-content'];
mainText[2].textContent = siteContent["main-content"]['services-content'];
mainText[3].textContent = siteContent["main-content"]['product-content'];
mainText[4].textContent = siteContent["main-content"]['vision-content'];

let contactH4 = document.querySelectorAll('h4')
contactH4[5].textContent = siteContent["contact"]['contact-h4'];

let contactText = document.querySelectorAll('p')
contactText[5].textContent = siteContent["contact"]['address'];
contactText[6].textContent = siteContent["contact"]['phone'];
contactText[7].textContent = siteContent["contact"]['email'];

let footer = document.querySelector('footer');
footer.textContent = siteContent['footer']['copyright'];

links[0].style.color = 'green';
links[1].style.color = 'green';
links[2].style.color = 'green';
links[3].style.color = 'green';
links[4].style.color = 'green';
links[5].style.color = 'green';

const newListItem = document.createElement('a');
newListItem.textContent = "FAQ"
const parentElement = document.querySelector('nav');
parentElement.append(newListItem) 

const newListItem2 = document.createElement('a');
newListItem2.textContent = "Home"
const parentElement2 = document.querySelector('nav');
parentElement2.prepend(newListItem2) 