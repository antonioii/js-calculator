//JS to put grid-areas in all buttons in order to match with the CSS inside buttonsContainer
const listOfButtons = Array.from(document.querySelectorAll('.number'));
let gridIdentifier;
listOfButtons.map((button) => {
    gridIdentifier = "_" + button.textContent;
    button.style.setProperty('grid-area',`${gridIdentifier}`);
});
console.table(listOfButtons);