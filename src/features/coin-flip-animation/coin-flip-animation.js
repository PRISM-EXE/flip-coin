//Declare variables to represent html elements
const title = document.querySelector("#title");
const button = document.querySelector("#flip-button");
const coin = document.querySelector("#coin-001");
let newTitle = "";
let imageUrl = "";

//Create main functions for coin flip

//Create function to determine if coin landed on heads or tails
const flipCoin = function() {
    const odds = Math.random();
    if (odds < 0.5) {
        let answer = "Heads";
        newTitle = `It's ${answer}!`;
        imageUrl = "./src/assets/imgs/coin/coin-heads-001.png";
        return [newTitle, imageUrl];
    } else {
        let answer = "Tails";
        newTitle = `It's ${answer}!`;
        imageUrl = "./src/assets/imgs/coin/coin-tails-001.png";
        return [newTitle, imageUrl];
    }
}

//Create function to animate the coin spinning
const coinAnimation = function() {
    coin.classList.add('flip');

    setTimeout(function() {
        coin.src = `${imageUrl}`;
        title.textContent = newTitle;
    }, 500);

    setTimeout(function() {
        coin.classList.remove('flip');
    }, 1000);
}

//Call functions based on button click
button.addEventListener('click', flipCoin);
button.addEventListener('click', coinAnimation);