// let count = 0;

// function add() {
//     count = count + 1;
//     document.getElementById("num").innerHTML = count;
// }

const resultH1 = document.querySelector("h1");
const plusButton = document.querySelector("button");

let count = 0;

// plusButton.addEventListener("click", () => {
//     count++;
//     resultH1.innerHTML = count;
// });

plusButton.onclick = () => {
    count++;
    resultH1.innerHTML = count;
};
