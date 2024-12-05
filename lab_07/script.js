let balance = 100;
const totalNumbers = 10;
const minGuess = 1;
const maxGuess = 3;
let chances = 3;

function startGame() {
    while (balance >= 20) {
        balance -= 20;
        console.log(`Game started. Balance: $${balance}`);

        const randomNumber = Math.floor(Math.random() * totalNumbers) + 1;
        let guessedCorrectly = false;
        while (chances > 0 && !guessedCorrectly) {
            let guess = prompt(`Current Balance: $${balance}. Guess a number between ${minGuess} and ${maxGuess} (Chances left: ${chances}):`);
            guess = Number(guess);

            if (isNaN(guess) || guess < minGuess || guess > maxGuess) {
                alert(`Please enter a number between ${minGuess} and ${maxGuess}.`);
                continue;
            }
            
            if (guess === randomNumber) {
                guessedCorrectly = true;
                let reward = 50;
                balance += reward;
                alert(`Correct! You guessed the number ${randomNumber}. You won $${reward}. New balance: $${balance}`);
                chances = 3;
            } else {
                chances--;
                balance -= 10;
                alert(`Wrong guess! Your balance: $${balance}.`);
            }
        }

        if (!guessedCorrectly) {
            alert(`Sorry, you didn't guess the number. It was ${randomNumber}. Your balance: $${balance}.`);
            chances = 3;
        }

        if (balance >= 20 && !confirm("Do you want to play again? It will cost $20.")) {
            break;
        }
    }

    alert("Game over! You don't have enough balance to continue.");
}

startGame();
