
// let mortgageAmount = 2000
// let mortgageTerm = 2
// let interestRate = 8
// const mortgageAmountInput = document.getElementById("amount")
// const mortgageTermInput = document.getElementById("years")
// const interestRateInput = document.getElementById("rate")

// const calculateRepayment = document.querySelector(".calc-btn")
// const totalAmount = document.getElementById("total-repay-amount")
// let monthlyRepayment = document.getElementById("repay-amount")
// let radioBtn = document.querySelectorAll(".radio-btn")
// let displayCaption = document.getElementById("display-caption")

// let resultContainer = document.querySelector(".result-onstart")
// let inputField = document.querySelectorAll("input[type='text']")
// let clearInputBtn = document.getElementById("clear-input")

// let mortgageAmount = Number(mortgageAmountInput.value)
// let mortgageTerm = Number(mortgageTermInput.value) 
// let interestRate = Number(interestRateInput.value) 

// let userValues = {
//     amount: mortgageAmount,
//     term: mortgageTerm,
//     rate: interestRate
// }

// let calculation = Number(mortgageAmount) * Number(mortgageTerm ) * Number(interestRate)
// let interest = calculation/100
// let result = interest + mortgageAmount
// let numberOfMonths = 12 * mortgageTerm
// let repayment = result / numberOfMonths




// mortgageAmountInput.addEventListener("change", (e)=> {
//    mortgageAmount = Number(e.target.value)
//     console.log(e.target.value)

// })

// mortgageTermInput.addEventListener("change", (e)=> {
//     mortgageTerm = Number(e.target.value)
//     console.log(e.target.value)

// })
// interestRateInput.addEventListener("change", (e)=> {
//     interestRate = Number(e.target.value)
//     console.log(e.target.value)

    
// })


// let buttonFunction = radioBtn.forEach( function (btn) {
//     btn.addEventListener("click", (e)=>{
// const select = e.currentTarget.classList
// if (select.contains("repayment")) {
// displayCaption.textContent = "Your monthly repayments"

//  monthlyRepayment.textContent = "$" + repayment

// console.log("repay")


// } else if (select.contains("interest")) {
//     displayCaption.textContent = "Your total interest"

// monthlyRepayment.textContent = "$" + interest
// instantCalc()
//  console.log("interest")
 
// }
//     })
// })





// console.log(calculation)


// function bringForward() {
//     resultContainer.style.zIndex = "-1"
// }


// calculateRepayment.addEventListener("click", ()=> {

// displayCaption.textContent = "Your monthly repayments"
//     monthlyRepayment.textContent = "$" + repayment
//     totalAmount.textContent = "$" + result
     
//     bringForward()
  
// })

