const billInput = document.getElementById("billTotalInput")
const tipInput = document.getElementById("tipInput")
const numberOfPeopleDiv = document.getElementById("numberOfPeople")
const perPersonTotalDiv = document.getElementById("perPersonTotal")

//get number of people from number of people div
let numberOfPeople = Number(numberOfPeopleDiv.innerText)

//calculate the total bill per person
const calculateBill = () => {
    //get bill from user and convert it to a number
    const bill = Number(billInput.value)
    //get tip from user and convert it to a percentage
    const tipPercentage = Number(tipInput.value) / 100
    //get the total tip amount
    const tipAmount = bill * tipPercentage
    //calculate the total tip amount + bill
    const total = tipAmount + bill
    //calculate the per person total
    const perPersonTotal = total / numberOfPeople
    //update the per person on DOM and show it to user
    perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)/* .toLocaleString('en-us') */}`

}

//splits the bill between more people
const increasePeople = () => {
    //incremet the amount of people
    numberOfPeople += 1
    //update the DOM with new number of people
    numberOfPeopleDiv.innerText = numberOfPeople
    //calculate the bill based on th e new number of people
    calculateBill()
}

const decreasePeople = () => {
    // guard clause
    // if amount is 1 or less simply return
    // (a.k.a you can't decrease the number of people to 0 or negative!)
    if(numberOfPeople <= 1){
        return
    }
    //decremet the amount of people
    numberOfPeople -= 1
    //update the DOM with new number of people
    numberOfPeopleDiv.innerText = numberOfPeople
    //calculate the bill based on th e new number of people
    calculateBill()
}