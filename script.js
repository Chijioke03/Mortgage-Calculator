let mortgageAmount = document.getElementById("amount").value
let mortgageTerm = document.getElementById("years").value
let interestRate = document.getElementById("rate").value
const calculateRepayment = document.querySelector(".calc-btn")
const totalAmount = document.getElementById("total-repay-amount")
let monthlyRepayment = document.getElementById("repay-amount")
let radioBtn = document.querySelectorAll(".radio-btn")
let displayCaption = document.getElementById("display-caption")
let calculation = Number(mortgageAmount) * Number(mortgageTerm) * Number(interestRate)/100 
let result = calculation +  +mortgageAmount
let repayment = Math.floor(result/ (+mortgageTerm * 12)) 
let resultContainer = document.querySelector(".result-onstart")
let inputField = document.querySelectorAll("input[type='text']")
let clearInputBtn = document.getElementById("clear-input")







let buttonFunction = radioBtn.forEach( function (btn) {
    btn.addEventListener("click", (e)=>{
const select = e.currentTarget.classList
if (select.contains("repayment")) {
displayCaption.textContent = "Your monthly repayments"

 monthlyRepayment.textContent = "$" + repayment
 
console.log("repay")


} else if (select.contains("interest")) {
    displayCaption.textContent = "Your total interest"

monthlyRepayment.textContent = "$" + calculation
 console.log("interest")
 
}
    })
})


function bringForward() {
    resultContainer.style.zIndex = "-1"
}


calculateRepayment.addEventListener("click", ()=> {
   
    
    totalAmount.textContent = "$" + result
     console.log(buttonFunction)
    bringForward()


 
  
})

function clearInputFields() {
    inputField.forEach(input => {
        input.value = ""
    })
}

clearInputBtn.addEventListener("click", clearInputFields())