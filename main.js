let bill = 0
let tip= 0
let numberOfPeople = 0
let buttonSelected = null 

function receiveBillValue() {
    bill = document.querySelector("#bill").valueAsNumber

    calculateResults()
}

function receiveNumberOfPeopleValue() {
    numberOfPeople = document.querySelector("#people").valueAsNumber

    calculateResults()
}

function receiveTipPercentageValue(value) {
    tipPercentage = value / 100

    document.querySelector("#costum-tip").value !== ""
    
    
    if (buttonSelected !== null) {
        buttonSelected.classList.remove("button-selected")
    }

    buttonSelected = document.querySelector(`button-${value}`)
    buttonSelected.classList.add(`button-selected`)

    calculateResults()
}

function receiveCustomTipPercentageValue() {
    tipPercentage = document.querySelector("#costum-tip").valueAsNumber / 100

    removeClassButtonSelected()

    calculateResults()
}

function removeClassButtonSelected() {
    
    if (buttonSelected !== null) {
        buttonSelected.classList.remove("button-selected")
        buttonSelected = null 
    } 
} 

function calculateResults {
    if(bill !== 0 && tipPercentage !== 0 && numberOfPeople !== 0)
}