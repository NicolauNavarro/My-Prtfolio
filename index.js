
window.addEventListener('load', changTextFade)
document.addEventListener('scroll', changTextFade)
function changTextFade(){
const titleBox = document.querySelector('.representations');
    let titleBoxHeight = (titleBox.clientHeight)- ((titleBox.clientHeight)/3)
    let actualScrollY = window.scrollY
    let titleBoxPercentage = Math.round(actualScrollY * 100 / titleBoxHeight)
    if(titleBoxPercentage < 25){
        changeToFirst()
    }
    if(titleBoxPercentage >= 25 && titleBoxPercentage < 75){
        changeToSecond()
    }
    if(titleBoxPercentage >= 75){
        changeToThird()
    }
    const goBoxes = document.querySelectorAll('.goBox');
    if(actualScrollY > 10){
        goBoxes.forEach(box => {
            box.style.pointerEvents='none';
        });
    }else{
        goBoxes.forEach(box => {
            box.style.pointerEvents='visible';
        });
    }
}


const mainTitle = document.querySelector('#mainTitle');
const subTitle = document.querySelector('#subTitle');
const goAction = document.querySelector('.goAction');
function changeToFirst(){
    mainTitle.innerHTML='Nicolau is a designer<br>and clever developer';
    subTitle.innerHTML='Who loves making <span id="titleAdjective">awsome</span><br>projects and problem solving';
    goAction.innerHTML='<p>Contact Me</p>';
    goAction.addEventListener('click', () => {window.location='index.html'})
}
function changeToSecond(){
    mainTitle.innerHTML='Passionated in<br>creating projects';
    subTitle.innerHTML='Adaptable to anyone<br>in all possible ways';
    goAction.innerHTML='<p>See Projects</p>';
    goAction.addEventListener('click', () => {window.location='projects.html'})
}
function changeToThird(){
    mainTitle.innerHTML='And learning<br>from the process';
    subTitle.innerHTML='Which I then share in articles<br>for you to learn from my mistakes';
    goAction.innerHTML='<p>See Articles</p>';
    goAction.addEventListener('click', () => {window.location='index.html'})
}

