
//BURGER-MENU
let burgerIcon = document.getElementById('brgr-icon');
let sideMenu = document.getElementById('mobile-menu');
let btnclose = document.getElementById('btnclose');
burgerIcon.addEventListener('click',()=>{
    sideMenu.style.display="inline-block";
})
btnclose.addEventListener('click', ()=>{
    sideMenu.style.display="none";
})
//

//CONTACT-FORM
function send()
{
    window.alert("Send Sucessfully!!");
}
//

//TEXT-ANIMATION
const textDisplay = document.getElementById('nm-txt');
const phrases = ['IT UNDERGRADUATE', 'PROGRMMER','WEB DEVELOPER'];
let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;
const normalSpeed = Math.random() * (250 -200) + 200;
const deletionSpeed = Math.random()*(500-450)+450;
function loop () {
  isEnd = false;
  textDisplay.innerHTML = currentPhrase.join('');

  if (i < phrases.length) {

    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
      textDisplay.innerHTML = currentPhrase.join('')
    }

    if(isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j]);
      j--;
      textDisplay.innerHTML = currentPhrase.join('')
    }

    if (j == phrases[i].length) {
      isEnd = true;
      isDeleting = true;
    }

    if (isDeleting && j === 0) {
      currentPhrase = [];
      isDeleting = false;
      i++;
      if (i === phrases.length) {
        i = 0;
      }
    }
  }
  const speed = isDeleting?deletionSpeed:normalSpeed;
  setTimeout(loop, speed);
}
loop();
//

//Color Change in Text-Change
const textcolor = document.getElementById('my-name');
const btncolor = document.getElementById('btn-border');
colour = ["white","crimson","pink","red","yellow","black","chocolate","gold","coral"];
const l = colour.length;
let k=0;
function colorChange()
{
    if(k<l)
    {
        textDisplay.style.color=colour[k];
        textcolor.style.color=colour[k];
        k++;
    }
    if(k==l)
    {
        k=0;
    }
    setTimeout(colorChange,normalSpeed);
}
colorChange();
//