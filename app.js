function addStudent() {
    const studentName = document.getElementById('studentName').value.trim();
    if (studentName === '') {
        alert('Please enter a student name.');
        return;
    }

    const studentList = document.getElementById('studentList');
    
    // Create new list item
    const li = document.createElement('li');
    li.innerHTML = `
        ${studentName}
        <button class="delete-btn" onclick="deleteStudent(this)">Delete</button>
    `;

    // Add new item to the list
    studentList.appendChild(li);

    // Clear input field
    document.getElementById('studentName').value = '';
}

function deleteStudent(button) {
    const studentList = document.getElementById('studentList');
    studentList.removeChild(button.parentElement);
}
