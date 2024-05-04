const body = document.querySelector("body");
window.addEventListener("load", () => {
  body.style.height = "fit-content";
  body.style.opacity = "1";
});

/*
const magicCard = document.querySelector('.magic-card')
const magicBtnTitle = document.querySelector('#magicBtnTitle')
function magicCardContact(){
    magicCard.style.transform= 'rotate3d(1, 0, 0, 0deg) translateY(0px)'
    magicCard.style.opacity= '1'
    magicBtnTitle.style.opacity='1'
    magicBtnTitle.style.transform= 'translateY(0px)'
    magicCard.addEventListener('mouseenter', magicCardContact)
    magicCard.addEventListener('mouseleave', magicCardHide)
}
function magicCardHide(){
    magicCard.style.transform= 'rotate3d(1, 0, 0, 90deg) translateY(-260px)'
    magicCard.style.opacity= '0'
    magicBtnTitle.style.opacity='0'
    magicBtnTitle.style.transform= 'translateY(15px)'
}
*/
/*
const contactBtn = document.querySelector('#contactBtn')
const projectsBtn = document.querySelector('#projectsBtn')
const btnCovers = document.querySelectorAll('.cover')

function contactSelect(){
    btnCovers.forEach(cover => {
        cover.style.left='-105%'
    });
    projectsBtn.style.color='var(--black)'
    contactBtn.style.color='var(--white)'
    projectsBtn.style.boxShadow='0px 0px 3px var(--gray)'
    contactBtn.style.boxShadow='0px 0px 4px 1px var(--gray)'
}

function projectsSelect(){
    btnCovers.forEach(cover => {
        cover.style.left='0px'
    });
    contactBtn.style.color='var(--black)'
    projectsBtn.style.color='var(--white)'
    contactBtn.style.boxShadow='0px 0px 3px var(--gray)'
    projectsBtn.style.boxShadow='0px 0px 4px 1px var(--gray)'
}
*/

//All sections from page
const sections = document.querySelectorAll(".section");
const section1 = sections[0].getBoundingClientRect().top
const section2 = sections[1].getBoundingClientRect().top
const section3 = sections[2].getBoundingClientRect().top
const windowPosition = window.innerHeight

const goDownNav = document.querySelector("#goDownNav");
const goUpNav = document.querySelector("#goUpNav");

goUpNav.addEventListener("click", goUpperSection);
goDownNav.addEventListener("click", goUnderSection);

function goUpperSection() {
  window.alert('Hello world')
  let tryes = 0
  while (sections.length >= tryes) {
    
    tryes =+ 1
  }
}

function goUnderSection() {
  window.alert(windowPosition.top);
}







