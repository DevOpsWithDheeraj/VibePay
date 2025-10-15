const card = document.getElementById("credit-card");

const inputNumber = document.getElementById("input-number");
const inputName = document.getElementById("input-name");
const inputExpiry = document.getElementById("input-expiry");
const inputCVV = document.getElementById("input-cvv");

const cardNumber = document.getElementById("card-number");
const cardHolder = document.getElementById("card-holder-name");
const cardExpiry = document.getElementById("card-expiry-date");
const cardCVV = document.getElementById("card-cvv");

// Flip card when CVV is focused
inputCVV.addEventListener("focus", () => card.classList.add("flip"));
inputCVV.addEventListener("blur", () => card.classList.remove("flip"));

// Update card number live
inputNumber.addEventListener("input", () => {
  let formatted = inputNumber.value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
  inputNumber.value = formatted;
  cardNumber.textContent = formatted || "#### #### #### ####";
});

// Update card holder name
inputName.addEventListener("input", () => {
  cardHolder.textContent = inputName.value.toUpperCase() || "YOUR NAME";
});

// Update expiry
inputExpiry.addEventListener("input", () => {
  cardExpiry.textContent = inputExpiry.value || "MM/YY";
});

// Update CVV
inputCVV.addEventListener("input", () => {
  cardCVV.textContent = inputCVV.value || "###";
});
