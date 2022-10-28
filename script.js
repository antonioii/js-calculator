//VARIABLES
//All the number buttoms
    const listOfButtons = Array.from(document.querySelectorAll('.number'));
//The entry display field
    const entryDisplay = document.querySelector('.entryDisplay');
//All operator buttons
    const listOfOperators = Array.from(document.querySelectorAll('.operator'));
//Result buttom
    const resultButtom = document.querySelector('.result');
//All clear buttom
    const aCButtom = document.querySelector('.allClear');

//A list with a pair of entries
    const entryArray = new Array('','');
//A variable which sets the current operator being used
    let curOperator = '';
//A variable to set if a number is already pressed
    let numberAlreadyPressed = false;

//FUNCTIONS
//Read a number
    function getANumber(numberButtomId) {
        return numberButtomId.match(/[0-9]{1,2}/g)[0];
    }


//Print an entry
    function printEntry(text) {
        if(text[0] !== '0') {
            entryDisplay.value = text;
        } else {
            entryDisplay.value = text.slice(1);
        }
}


//Math function operations
    function add() {
        let sum = parseInt(entryArray[0]) + parseInt(entryArray[1]);
        printEntry(sum);
        resetEntryArrays(sum);
    }

    function subtraction() {
        let sub = parseInt(entryArray[0]) - parseInt(entryArray[1]);
        printEntry(sub);
        resetEntryArrays(sub);    
    }

    function multiply() {
        let product = parseInt(entryArray[0]) * parseInt(entryArray[1]);
        printEntry(product);
        resetEntryArrays(product);
    }

    function divide() {
        let quotient = parseInt(entryArray[0]) / parseInt(entryArray[1]);
        printEntry(quotient);
        resetEntryArrays(quotient);
    }


//When a number is pressed
    listOfButtons.forEach(
        (numberButtom) => {
            numberButtom.addEventListener('click', () => {
                numberAlreadyPressed = true;
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

        //debug: console.table(entryArray);
        //debug: console.log(number);
            })
        }
    );


//When an operator is pressed
    listOfOperators.forEach(
        (operatorButton) => {
           operatorButton.addEventListener('click', () => {
                if(curOperator === '') {
                    curOperator = operatorButton.id;

                    //if a number is not pressed and an operator is choose,
                    //work with zero as the first number
                        if(!numberAlreadyPressed) {
                            entryArray[0] = 0;
                        };

                } else {
                        if(entryArray[1] !== '') {getResult()};
                        curOperator = operatorButton.id;
                    };

    //debug: console.table(entryArray);                    
                })
            }
        );


//When the result button is pressed
    resultButtom.addEventListener('click', () => {
        switch(true) {
            case entryArray[1] === '' && entryArray[0] != '0':
                alert('You have to choose a number, an operator and then another number to do an operation.');
            break;

            case entryArray[1] === '' && entryArray[0] == '0' :
                entryArray[0] = '';
                curOperator = '';
                alert('You have to choose a number, an operator and then another number to do an operation.');
            break;

            default:
                getResult();
                clearVariables();
        }    
    });


//Clear the entry array and the current operator variable
    function clearVariables(){
        entryArray[1] = '';
        curOperator = '';
}


//When result is pressed or an operator is pressed twice after numbers input
    function getResult(){
        switch(true) {
            case curOperator == 'sum' : add();
                break;
            case curOperator == 'minus' : subtraction();
                break;
            case curOperator == 'multiply' : multiply();
                break;
            case curOperator == 'divide' : divide();
                break;
            default:
                alert('You have to choose a number, an operator and then another number to do an operation.');
                };           
            }


//Reset the entry arrays after a result
    function resetEntryArrays(resultValue){
        console.log(resultValue);
        entryArray[0] = resultValue;
        entryArray[1] = '';
    }


//All clear function
    aCButtom.addEventListener('click', () => {
        clearVariables();
        entryArray[0] = '';
        printEntry('00');
        numberAlreadyPressed = false;

    });

    
//JS to improve the CSS, it puts grid-areas in all buttons in order to match with the CSS inside buttonsContainer
    let gridIdentifier;
    listOfButtons.map((button) => {
        gridIdentifier = "_" + button.textContent;
        button.style.setProperty('grid-area',`${gridIdentifier}`);
    });