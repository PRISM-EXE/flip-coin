const title = document.querySelector("#title");
const button = document.querySelector("#flip-button");
let newTitle = "";

const flipCoin = function() {
    const odds = Math.random();
    if (odds < 0.5) {
        let coin = "Heads";
        newTitle = `It's ${coin}!`
        return newTitle;
    } else {
        let coin = "Tails";
        newTitle = `It's ${coin}!`
        return newTitle;
    }
}

button.addEventListener('click', flipCoin);

button.addEventListener('click', function() {
    title.textContent = newTitle;
})
