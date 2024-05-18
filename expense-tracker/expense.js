document.getElementById('expense-form').addEventListener('submit', addExpense);

let expenses = [];

function addExpense(event) {
    event.preventDefault();
    const amount = document.getElementById('amount').value;
    const category = document.getElementById('category').value;
    const date = document.getElementById('date').value;

    const expense = { amount, category, date };
    expenses.push(expense);
    renderExpenses();
    document.getElementById('expense-form').reset();
}

function renderExpenses() {
    const tbody = document.getElementById('expense-table').querySelector('tbody');
    tbody.innerHTML = '';
    expenses.forEach((expense, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${expense.amount}</td>
            <td>${expense.category}</td>
            <td>${expense.date}</td>
            <td>
                <button onclick="editExpense(${index})">Edit</button>
                <button onclick="deleteExpense(${index})">Delete</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function editExpense(index) {
    const expense = expenses[index];
    document.getElementById('amount').value = expense.amount;
    document.getElementById('category').value = expense.category;
    document.getElementById('date').value = expense.date;
    deleteExpense(index);
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    renderExpenses();
}