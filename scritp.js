//A list with a pair of entries
const entryArray = new Array('','');

//All the number buttoms
const listOfButtons = Array.from(document.querySelectorAll('.number'));

//All operator buttons
const listOfOperators = Array.from(document.querySelectorAll('.operator'));

//A variable which sets the current operator being used
let curOperator = '';

//The entry display field
const entryDisplay = document.querySelector('.entryDisplay');

//Read a number
function getANumber(numberButtomId) {
    return numberButtomId.match(/[0-9]{1,2}/g)[0];
}

//Print an entry
function printEntry(text) {
    entryDisplay.value = text;
}

//Math functions
    function add() {
        let sum = parseInt(entryArray[0]) + parseInt(entryArray[1]);
        printEntry(sum);
    }

    function subtraction() {
        let sub = parseInt(entryArray[0]) - parseInt(entryArray[1]);
        printEntry(sub);    
    }

    function multiply() {
        let product = parseInt(entryArray[0]) * parseInt(entryArray[1]);
        printEntry(product);
    }

    function divide() {
        let quotient = parseInt(entryArray[0]) / parseInt(entryArray[1]);
        printEntry(quotient);
    }


//When a number is pressed
    listOfButtons.forEach(
        (numberButtom) => {
            numberButtom.addEventListener('click', () => {
                //get the number pressed
                let number = getANumber(numberButtom.id);
                //if current operator pressed, add to arr[0], else add to arr[1]
                if(curOperator === '') {
                    entryArray[0] += number;
                    printEntry(entryArray[0]);
                } else {
                    entryArray[1] += number;
                    printEntry(entryArray[1])
                }
                console.table(entryArray);
                console.log(number);
            })
        }
    );

//When an operator is pressed
        listOfOperators.forEach(
            (operatorButton) => {
                operatorButton.addEventListener('click', () => {
                    if(curOperator === '') {
                        curOperator = operatorButton.id;
                    } else {
                        curOperator = operatorButton.id;
                        getResult();
                    }
                    
                })
            }
        );

//When result is pressed or an operator is pressed twice

    //till an operator button is pressed and assigned to the operator variable
        //then start to add the number inside arr[1]
//press equal button to make the calculation based on the currentOperator being used

//JS to put grid-areas in all buttons in order to match with the CSS inside buttonsContainer
let gridIdentifier;
listOfButtons.map((button) => {
    gridIdentifier = "_" + button.textContent;
    button.style.setProperty('grid-area',`${gridIdentifier}`);
});

//console.table(listOfButtons);