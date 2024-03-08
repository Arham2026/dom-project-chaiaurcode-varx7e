//breaking down the code of the guessing game 

// => choose the random number.
// => selecting the required classes and id's from the HTML through DOM.
// => creating the variables for saving the number of guesses and form an array for the previous guesses and then a variable playGame(Bool Value).


// using the if condition with the play game

// using different functions for different activities 

// Start

let randomNumber = parseInt((Math.random()*100)+1);

//accessing the Html with the DOM.

// this is the Button present there as 'Submit Guesses'
const submit = document.querySelector('#subt')

// This is the text box where we type the Text.
const userInput = document.querySelector('#guessField')

// This is where you show  the previous guesses to the player.
const guessSlot = document.querySelector('.guesses')

// This is a paragraph element where you can display the message of how close they are.
const loworhigh = document.querySelector('.lowOrHi')

// This is where you show the remaining guesses to the player.
const remainGuess = document.querySelector('.lastResult')

const startOver = document.querySelector('.resultParas')

const  p = document.createElement('p')

let prevGuess = []

let guesses = 1

let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value)
        // console.log(guess);
        validateGuess(guess);

    })

}


// functions for the game

function validateGuess(guess){
    // here you haved to check whether the guessed number would be valid for the comparision or not.
    if (isNaN(guess)) {
        alert('PLease enter a valid number');
      } else if (guess < 1) {
        alert('PLease enter a number more than 1');
      } else if (guess > 100) {
        alert('PLease enter a  number less than 100');
      } else{
        prevGuess.push();

        if(guesses===11){
            displayGuess(guess);
            displayMessage(`Game is Over and the random number was ${randomNumber}`);
            endGame();
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }      
      }
}

function checkGuess(guess){
    // here we check the validated number as it is similar to the random number or not.
    if(guess === randomNumber){
        displayMessage(`You are right Bruh!, The Number is ${randomNumber}`)
        endGame();
    }
    else if(guess>randomNumber){
        displayMessage(`The ${guess} is too high Go Little Down`)
    }

    else if(guess<randomNumber){
        displayMessage(`The ${guess} is little Lower Go Little high!`)
    }

}

function displayGuess(guess){
    // this function is for Multiple purposes like Refreshing the text box and then updating the number of guesses and the remaining guesses
    userInput.value = '';
    guessSlot.innerHTML += `${guess} ,`;
    guesses++;
    remainGuess.innerHTML = `${11 - guesses}`;


}

function displayMessage(message) {
    //this is where we comment something about the answer of the player.
    loworhigh.innerHTML = `<h2>${message}<h2>`

  }

  function endGame() {
    // This is where we just end the game if this function is called upon.
  userInput.value = '';
  userInput.setAttribute('disabled','');
  p.classList.add('button');
  p.innerHTML = `<h2 id = "newGame"> Start the New Game <h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();

  }

  function newGame(){
    // New Game gets started when this function is called and everything gets refereshed
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    guesses = 1;
    guessSlot.innerHTML = '';
    remainGuess.innerHTML = `${11 - guesses} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });

  }
