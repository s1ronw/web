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
            let guess = prompt(`Баланс: $${balance}. Вгадай число від ${minGuess} і ${maxGuess} (Спроб залишилося: ${chances}):`);
            guess = Number(guess);

            if (isNaN(guess) || guess < minGuess || guess > maxGuess) {
                alert(`Введіть число між ${minGuess} і ${maxGuess}.`);
                continue;
            }
            
            if (guess === randomNumber) {
                guessedCorrectly = true;
                let reward = 50;
                balance += reward;
                alert(`Найс, ти вгадав число ${randomNumber}. Ти виграв $${reward}. Твій баланс: $${balance}`);
                chances = 3;
            } else {
                chances--;
                balance -= 10;
                alert(`Неправильно, твій баланс: $${balance}.`);
            }
        }

        if (!guessedCorrectly) {
            alert(`Ти не вгадав число. Це було ${randomNumber}. Твій баланс: $${balance}.`);
            chances = 3;
        }

        if (balance >= 20 && !confirm("Хочете ще раз зіграти? Це буде коштувати $20.")) {
            break;
        }
    }

    alert("Ігра закінчилася");
}

startGame();
