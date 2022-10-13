//put grid-areas in all numbers
const listOfButtons = Array.from(document.querySelectorAll('.number'));
let gridIdentifier;
listOfButtons.map((button) => {
    gridIdentifier = "_" + button.textContent;
    button.style.setProperty('grid-area',`${gridIdentifier}`);
});
console.table(listOfButtons);