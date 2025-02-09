const counterDisplayElement = document.querySelector(".counterdisplay");
const addBtnElement = document.querySelector(".addbutton");
const subBtnElement = document.querySelector(".subbutton");

let total = 0;
let limit=20;
const updateCounterDisplay = () => {
    if (total>limit) {
        total=limit;
    };
    if (total<0) {
        total=0;
    };
    counterDisplayElement.textContent = total;
}
subBtnElement.addEventListener('click', () => {
    total -= 1;
    updateCounterDisplay();
})
addBtnElement.addEventListener('click', () => {
    total += 1;
    updateCounterDisplay();
})