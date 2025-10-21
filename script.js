// DOM elements
const mortgageAmount = document.getElementById("amount");
const mortgageTerm = document.getElementById("years");
const interestRate = document.getElementById("rate");
const calculateRepayment = document.querySelector(".calc-btn");
const totalAmount = document.getElementById("total-repay-amount");
const monthlyRepayment = document.getElementById("repay-amount");
const radioBtn = document.querySelectorAll(".radio-btn");
const displayCaption = document.getElementById("display-caption");
const resultContainer = document.querySelector(".result-onstart");
const inputField = document.querySelectorAll("input[type='text']");
const clearInputBtn = document.getElementById("clear-input");

// Function to calculate monthly repayment using the amortization formula
function calculateMonthlyRepayment(principal, annualRate, years) {
  const monthlyRate = annualRate / 100 / 12;
  const numberOfPayments = years * 12;
  return (
    principal *
    (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
  );
}

// Function to calculate monthly interest (for interest-only option)
function calculateMonthlyInterest(principal, annualRate) {
  return (principal * annualRate) / 100 / 12;
}

// Function to validate inputs
function validateInputs(amount, term, rate) {
  return !isNaN(amount) && amount > 0 && !isNaN(term) && term > 0 && !isNaN(rate) && rate >= 0;
}

// Radio button event listeners
radioBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const select = e.currentTarget.classList;
    const amount = Number(mortgageAmount.value);
    const term = Number(mortgageTerm.value);
    const rate = Number(interestRate.value);

    if (!validateInputs(amount, term, rate)) {
      monthlyRepayment.textContent = "Invalid input";
      displayCaption.textContent = "Error";
      return;
    }

    if (select.contains("repayment")) {
      displayCaption.textContent = "Your monthly repayments";
      const monthly = calculateMonthlyRepayment(amount, rate, term);
      monthlyRepayment.textContent = "$" + monthly.toFixed(2);
    } else if (select.contains("interest")) {
      displayCaption.textContent = "Your monthly interest";
      const interest = calculateMonthlyInterest(amount, rate);
      monthlyRepayment.textContent = "$" + interest.toFixed(2);
    }
  });
});

// Calculate button event listener
calculateRepayment.addEventListener("click", () => {
  const amount = Number(mortgageAmount.value);
  const term = Number(mortgageTerm.value);
  const rate = Number(interestRate.value);

  if (!validateInputs(amount, term, rate)) {
    totalAmount.textContent = "Invalid input";
    monthlyRepayment.textContent = "Invalid input";
    displayCaption.textContent = "Error";
    return;
  }

  const monthly = calculateMonthlyRepayment(amount, rate, term);
  const total = monthly * term * 12;
  totalAmount.textContent = "$" + total.toFixed(2);

  // Monthly repayment based on selected radio button
  const selectedRadio = document.querySelector(".radio-btn:checked");
  if (selectedRadio) {
    if (selectedRadio.classList.contains("repayment")) {
      displayCaption.textContent = "Your monthly repayments";
      monthlyRepayment.textContent = "$" + monthly.toFixed(2);
    } else if (selectedRadio.classList.contains("interest")) {
      displayCaption.textContent = "Your monthly interest";
      const interest = calculateMonthlyInterest(amount, rate);
      monthlyRepayment.textContent = "$" + interest.toFixed(2);
    }
  }

  resultContainer.style.zIndex = "-1";
});

// Clear input fields
function clearInputFields() {
  inputField.forEach((input) => {
    input.value = "";
  });
  totalAmount.textContent = "";
  monthlyRepayment.textContent = "";
  displayCaption.textContent = "";
  resultContainer.style.zIndex = "1";
}

// Clear button event listener
clearInputBtn.addEventListener("click", clearInputFields); 

