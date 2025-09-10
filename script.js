// Create an empty list for expenses
let expenses = [];

// Function to add a new expense
function addExpense() {
  // Get values from input
  let amount = document.getElementById("amount").value;
  let category = document.getElementById("category").value;

  // Check if amount is valid
  if (amount === "" || amount <= 0) {
    alert("Please enter a valid amount");
    return;
  }

  // Create an expense object
  let expense = {
    amount: parseFloat(amount),
    category: category
  };

  // Add to expenses list
  expenses.push(expense);

  // Clear the input
  document.getElementById("amount").value = "";

  // Show updated list
  showExpenses();
}

// Function to display expenses and total
function showExpenses() {
  let list = document.getElementById("expenseList");
  list.innerHTML = ""; // clear list

  let total = 0;

  // Loop through all expenses
  for (let i = 0; i < expenses.length; i++) {
    let exp = expenses[i];
    total = total + exp.amount;

    // Create list item
    let item = document.createElement("li");
    item.textContent = exp.category + " - ₹" + exp.amount;
    list.appendChild(item);
  }

  // Show total
  document.getElementById("total").textContent = total;
}
