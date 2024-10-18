// Ambil elemen yang diperlukan
let todoInput = document.getElementById('todo-input');
let todoList = document.getElementById('todo-list');

// Fungsi untuk menambahkan task baru (dengan fitur edit)
function addTask() {
    let taskText = todoInput.value;// Ambil nilai input
    
    if (taskText === '') {
        alert("Please enter a task!");// Validasi jika input kosong
        return;
    }

    let listItem = document.createElement('li');// Buat elemen <li> baru
    listItem.className = 'todo-item';// Tambahkan kelas 'todo-item'

    // Buat span untuk teks tugas
    let taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    // Tombol Edit
    let editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.onclick = function () {
        let newTaskText = prompt("Edit your task", taskSpan.textContent);
        if (newTaskText !== null && newTaskText.trim() !== '') {
            taskSpan.textContent = newTaskText;
        }
    };

    // Tombol Delete
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function () {
        todoList.removeChild(listItem);
    };

    listItem.appendChild(taskSpan);
    listItem.appendChild(editBtn);  // Tambah tombol Edit
    listItem.appendChild(deleteBtn);

    todoList.appendChild(listItem);

    todoInput.value = '';
}

