import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
 //document.querySelector("h1").addEventListener("click",function(e){
 //alert("Bana tıkladın!")
//});

// Kodlar buraya gelecek!
// get the required elements
const logoHeading = document.querySelector('.logo-heading');
const navLinks = document.querySelectorAll('.nav-link');
const introImg = document.querySelector('.intro img');
const introHeading = document.querySelector('.intro h2');
const introParagraphs = document.querySelectorAll('.intro p');
const contentSection1Img = document.querySelector('.content-section img');
const contentSection2Img = document.querySelector('.content-section.inverse-content img');
const destinationSectionImg = document.querySelector('.content-destination img');
const destinationButtons = document.querySelectorAll('.destination .btn');

// Event listeners
logoHeading.addEventListener('click', (event) => {
  alert('You clicked the logo!');
});

navLinks.forEach((navLink) => {
  navLink.addEventListener('mouseenter', () => {
    navLink.style.color = 'red';
  });
  navLink.addEventListener('mouseleave', () => {
    navLink.style.color = 'green';
  });
});

introImg.addEventListener('dblclick', () => {
  introImg.style.border = '5px solid blue';
});

introHeading.addEventListener('mousemove', () => {
    const colors=["red","blue","yellow"];
    function randomcolor(number){
        return Math.floor(Math.random()*number)
    }
  introHeading.style.color = colors[randomcolor(colors.length)];
});

introParagraphs.forEach((paragraph) => {
  paragraph.addEventListener('mousedown', () => {
    paragraph.style.backgroundColor = 'yellow';
  });
  paragraph.addEventListener('mouseup', () => {
    paragraph.style.backgroundColor = 'blue';
  });
});

contentSection1Img.addEventListener('load', () => {
  console.log('Content section 1 image loaded');
});

contentSection2Img.addEventListener('error', () => {
  console.log('Content section 2 image failed to load');
});

document.addEventListener('scroll', () => {
  destinationSectionImg.style.opacity = '0.5';
});

destinationButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.stopPropagation();
    alert(`You clicked the "${button.textContent}" button!`);
  });
});
