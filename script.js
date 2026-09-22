let total = 0;

function addExpense() {
  const nameInput = document.getElementById("expenseName");
  const amountInput = document.getElementById("expenseAmount");
  const expenseList = document.getElementById("expenseList");
  const balance = document.getElementById("balance");

  const name = nameInput.value.trim();
  const amount = Number(amountInput.value);

  if (name === "" || amount <= 0) {
    alert("Please enter a valid expense.");
    return;
  }

  total += amount;
  balance.textContent = "₹" + total.toFixed(2);

  const item = document.createElement("li");

  item.innerHTML = `
    <span>${name}</span>
    <strong>₹${amount.toFixed(2)}</strong>
  `;

  expenseList.appendChild(item);

  nameInput.value = "";
  amountInput.value = "";
}
