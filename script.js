
const arrowDown = document.querySelectorAll('.arrowdown');
const questions = document.querySelectorAll('.question')


for (let i=0; i<arrowDown.length; i++) {
    arrowDown[i].addEventListener('click',function() {
        questions[i].classList.toggle('active')
    })}