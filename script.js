
const arrowUp = document.querySelectorAll('.arrowup');
const arrowDown = document.querySelectorAll('.arrowdown');
const answer = document.querySelectorAll('p');

for (let i=0; i<arrowUp.length; i++) {
    arrowDown[i].addEventListener('click',function() {
arrowUp[i].style.display = 'block';
arrowDown[i].style.display = 'none';
answer[i].style.display = 'block'; })

arrowUp[i].addEventListener('click', function(){
    arrowUp[i].style.display = 'none'
    arrowDown[i].style.display = 'block';
    answer[i].style.display = 'none'
})
}