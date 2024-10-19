let userId = 1;
const usersTable = document.querySelector('#usersTable tbody');
const addUserForm = document.getElementById('addUser Form');
const addUserBtn = document.getElementById('addUser Btn');
const submitUserBtn = document.getElementById('submitUser Btn');
const cancelBtn = document.getElementById('cancelBtn');

addUserBtn.addEventListener('click', () => {
    addUserForm.style.display = 'block';
});

submitUserBtn.addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    
    const newRow = usersTable.insertRow();
    newRow.innerHTML = `<td>${userId++}</td><td>${name}</td><td>${age}</td>`;
    
    addUserForm.style.display = 'none';
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
});

cancelBtn.addEventListener('click', () => {
    addUserForm.style.display = 'none';
});