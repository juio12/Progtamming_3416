// let count = 0;

// function add() {
//     count = count + 1;
//     document.getElementById("num").innerHTML = count;
// }

// const resultH1 = document.querySelector("h1");
// const plusButton = document.querySelector("button");

const resultH1 = document.getElementById("result");
// const plusButton = document.getElementsByClassName("plusButton")[0];

let count = 0;

// plusButton.addEventListener("click", () => {
//     count++;
//     resultH1.innerHTML = count;
// });

// plusButton.onclick = () => {
//     count++;
//     resultH1.innerHTML = count;
// };

resultH1.innerHTML = count;
function plus() {
    count++;
    resultH1.innerHTML = count;
}