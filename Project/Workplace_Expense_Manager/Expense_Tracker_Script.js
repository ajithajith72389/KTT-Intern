let count = 1;

function addExpense() {
    const amount = document.getElementById('amount').value;
    const category = document.getElementById('category').value;

    if (!amount || !category) {
        alert("Please enter both amount and category.");
        return;
    }

    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();

    const table = document.getElementById('expenseTableBody');

    const row = table.insertRow();
    row.innerHTML = `
        <td>${count++}</td>
        <td>${amount}</td>
        <td>${category}</td>
        <td>${date}</td>
        <td>${time}</td>
        <td>
        <button onclick="deleteExpense(this)">Delete</button></td>
        <td><button onclick="updateExpense(this)">Update</button></td>
      `;

    // Clear input fields
    document.getElementById('amount').value = '';
    document.getElementById('category').value = '';
}

function deleteExpense(btn){
    if(confirm("Are you sure? You want to delete this item")){
        btn.parentElement.parentElement.remove();
        updateSerialNumber();
    }
}

function updateExpense(btn) {
    const row = btn.parentElement.parentElement;
    const amountCell = row.cells[1];
    const categoryCell = row.cells[2];
    const newAmount = prompt("Enter the new Amount", amountCell.textContent );
    const newCategory = prompt("Enter the new Category", categoryCell.textContent );

    if (newAmount && newCategory) {
        amountCell.innerHTML = newAmount;
        categoryCell.innerHTML = newCategory;
    }
}

function updateSerialNumber(){
    const row = document.querySelectorAll("#expenseTableBody tr")
    count = 1
    row.forEach(row => {
        row.cells[0].textContent = count++;
    })
    
}

function updateClock(){
    const now = new Date();
    const time = now.toLocaleTimeString();
    document.getElementById("clock").textContent = time;
    if (time === "3:29:00 PM"){
        clearInterval(clockInterval);
        document.getElementById("clock").textContent = "Clear";

    }
  
}
const clockInterval =setInterval(updateClock, 1000);
updateClock();