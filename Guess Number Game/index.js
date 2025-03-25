let randomnNumber = parseInt(Math.random() * 100 + 1)

let submit = document.querySelector('.submit_btn')
let mainForm = document.querySelector('.game_form')
let userInput = document.querySelector('.inputNum')
let submitBtn = document.querySelector('.submit_btn')
let prevGuess = document.querySelector('.prev_guess')
let remainingGuess = document.querySelector('.guess_remining')
let lowOrhi = document.querySelector('.lowOrhi')

let p = document.createElement('p')

let yourGuesses = [];
let guessCount = 9;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault()
        let guess = parseInt(userInput.value)
        //console.log(typeof guess);
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('please enter a valid number')
    }
    else if (guess < 1) {
        alert('Please enter a number between 1-100')
    }
    else if (guess > 100) {
        alert('Please enter a number between 1-100')
    }
    else {
        yourGuesses.push(guess)
        if (guessCount === 0) {
            displayGuess(guess)
            displayMessage(`Your Guess limit reached & the number is: ${guess}`)
            endGame()
        }
        else {
            checkGuess(guess)
            displayGuess(guess)
            // displayMessage(`Your guess the number ${guess}`)

        }
    }
}

function checkGuess(guess) {

    console.log(randomnNumber);


    if (guess == randomnNumber) {
        displayMessage(`Your Guess is correct and number is: ${guess}`)
    }
    else if (guess < randomnNumber) {
        displayMessage(`Your guess number is too low`)
    }
    else if (guess > randomnNumber) {
        displayMessage(`Your guess number is too highr`)
    }

}

function displayMessage(message) {
    lowOrhi.innerHTML = message;
}

function displayGuess(guess) {
    userInput.value = ''
    prevGuess.innerHTML += `${guess}, `;
    remainingGuess.innerHTML = guessCount--;
}

function endGame() {
    userInput.value = ''
    lowOrhi.innerHTML = `<h2 class='newGame' style='cursor:pointer;'>Start again</h2>`
    playGame = false;
    userInput.setAttribute('disabled', '')
    newGame()
}

function newGame() {
    let newGame = document.querySelector('.newGame')
    newGame.addEventListener('click', (e) => {
        userInput.removeAttribute('disabled')
        yourGuesses = []
        prevGuess.innerHTML = ''
        guessCount = 9
        playGame = true
        lowOrhi.innerHTML = ``;

    })
}

