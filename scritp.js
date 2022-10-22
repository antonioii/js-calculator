//A list with a pair of entries
const entryArray = new Array(2);

//a variable which sets the current operator being used
let curOperator = '';

//each time a number is pressed, add it inside arr[0]
    //till an operator button is pressed and assigned to the operator variable
        //then start to add the number inside arr[1]
//press equal button to make the calculation based on the currentOperator being used

//JS to put grid-areas in all buttons in order to match with the CSS inside buttonsContainer
const listOfButtons = Array.from(document.querySelectorAll('.number'));
let gridIdentifier;
listOfButtons.map((button) => {
    gridIdentifier = "_" + button.textContent;
    button.style.setProperty('grid-area',`${gridIdentifier}`);
});
console.table(listOfButtons);