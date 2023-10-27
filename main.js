let log = (e) => console.log(e)
let doc = (e) => document.querySelector(e)
// Letters
const Letters = Array.from('qwertyuiopasdfghjklzxcvbnm');

let lettercontainer = doc('.letters');

Letters.forEach((letter) => {
  let span = document.createElement('span');
  span.appendChild(document.createTextNode(letter));
  span.className = 'letter-box';

  lettercontainer.appendChild(span);
})

// object of words + categories
const words = {
  programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
  movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
  people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
  countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
}

let allKeys = Object.keys(words);

let randomnumber = Math.floor(Math.random() * allKeys.length);
const randomName = allKeys[randomnumber];
let randomValue = words[randomName];

let randValNum = Math.floor(Math.random() * randomValue.length);
let randvalval = randomValue[randValNum];

doc('.game-info .category span').innerHTML = randomName;

let lettersTwo = doc('.letters-guess') 

const guess = Array.from(randvalval);
guess.forEach((letter) => {
  let span = document.createElement('span')
  if (letter === ' ') {
    span.className = 'with-space'
  }
  lettersTwo.appendChild(span)
})


let guessSpans = document.querySelectorAll('.letters-guess span');

let wrongattemps = 0;
let rightattemps = 1;

let hung = doc('.hangman');
let hungman = doc('.hang');

document.addEventListener('click', (e) => {
  let theStats = false;

  if (e.target.className === 'letter-box') {
    e.target.classList.add('clicked');

    
    let theclicked = e.target.innerHTML.toLowerCase();

    let theChosen = Array.from(randvalval.toLowerCase())

    theChosen.forEach((wordletter, wordindex) => {
      if (theclicked === wordletter) {
        theStats = true;
        guessSpans.forEach((word, index) => {
          if (wordindex === index) {
            word.innerHTML = theclicked
          }
        })
      }
    })
    

    if (theStats !== true) {
      wrongattemps++;
      hung.classList.add(`wrong-${wrongattemps}`);
      doc('.fail').play();
      
      if (wrongattemps == 8) {
        endout();
        lettercontainer.classList.add('finished');
      }
    } else {
      rightattemps++;
      // hungman.classList.add(`wrong2-${rightattemps}`);
      // lettersTwo.classList.add(`init-${rightattemps}`)

      doc('.correct').play();
      if (rightattemps == document.querySelectorAll('.letters-guess span').length) {
        lettercontainer.classList.add('finished');
        endup();
      }
    }
  }
})

function endout() {

  // Create Popup Div
  let div = document.createElement("div");

  // Create Text
  let divText = document.createTextNode(`Game Over, The Word Is ${randvalval}`);

  // Append Text To Div
  div.appendChild(divText);

  // Add Class On Div
  div.className = 'popup';

  // Append To The Body
  document.body.appendChild(div);

}
function endup() {

  // Create Popup Div
  let div = document.createElement("div");

  // Create Text
  let divText = document.createTextNode(`Gongratualtions, The Word Is ${randvalval}`);

  // Append Text To Div
  div.appendChild(divText);

  // Add Class On Div
  div.className = 'popup2';

  // Append To The Body
  document.body.appendChild(div);

}