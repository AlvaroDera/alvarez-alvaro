 document.addEventListener('DOMContentLoaded', function() {
     const loginForm = document.getElementById('login-form');
     const registerForm = document.getElementById('register-form');
     const profileSection = document.getElementById('profile');
     const profileUsername = document.getElementById('profile-username');
     const logoutButton = document.getElementById('logout-link');
     const registerBtn = document.getElementById('register-btn');
     const registerNewUserBtn = document.getElementById('register-new-user');
     const loginAfterRegisterBtn = document.getElementById('login-after-register');
     const taskInput = document.getElementById("taskInput");
     const taskValueInput = document.getElementById("taskValueInput");
     const addTaskBtn = document.getElementById("addTaskBtn");
     const taskList = document.getElementById("taskList");
     const taskTable = document.getElementById("taskTable");
     const progressBar = document.getElementById("progressBar");

     let currentUser = "";
     let totalPositive = 0;
     let totalNegative = 0;

     let users = [
         { username: "user1", password: "pass1", name: "Usuario1" },
         { username: "user2", password: "pass2", name: "Usuario2" },
     ];

     loginForm.addEventListener('submit', function(event) {
         event.preventDefault();
         const username = document.getElementById('username').value;
         const password = document.getElementById('password').value;
         const user = users.find(user => user.username === username && user.password === password);
         if (user) {
             loginForm.classList.add('hidden');
             profileSection.classList.remove('hidden');
             profileUsername.textContent = user.name;
             currentUser = user.name;
         } else {
             alert('Nombre de usuario o contraseña incorrecta.');
         }
     });

     registerBtn.addEventListener('click', function() {
         loginForm.classList.add('hidden');
         registerForm.classList.remove('hidden');
     });

     registerNewUserBtn.addEventListener('click', function() {
         const newUsername = document.getElementById('new-username').value;
         const newName = document.getElementById('new-name').value;
         const newPassword = document.getElementById('new-password').value;
         if (users.some(user => user.username === newUsername)) {
             alert('El nombre de usuario ya está en uso.');
         } else {
             users.push({ username: newUsername, password: newPassword, name: newName });
             alert('Usuario registrado exitosamente.');
             registerForm.classList.add('hidden');
             loginForm.classList.remove('hidden');
         }
     });

     loginAfterRegisterBtn.addEventListener('click', function() {
         registerForm.classList.add('hidden');
         loginForm.classList.remove('hidden');
     });

     logoutButton.addEventListener('click', function() {
         loginForm.classList.remove('hidden');
         profileSection.classList.add('hidden');
         profileUsername.textContent = '';
     });

     addTaskBtn.addEventListener("click", function() {
         const taskText = taskInput.value.trim();
         const taskValue = parseFloat(taskValueInput.value.trim()); // Convertir el valor a un número flotante
         if (taskText !== "" && !isNaN(taskValue)) { // Verificar si el valor es un número
             const now = new Date();
             const date = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
             const time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
             const row = document.createElement("tr");
             row.innerHTML = `
                <td>${taskText}</td>
                 <td>${taskValue + '$'}</td>
                 <td>${date} ${time}</td>
                 <td>${currentUser}</td>
                 <td>
                     <button class="edit">Editar</button>
                     <button class="delete">Eliminar</button>
                 </td>
             `;
             taskList.appendChild(row);
             taskInput.value = "";
             taskValueInput.value = ""; // Limpiar el campo de valor después de agregar la tarea

             // Actualizar la suma total de los valores positivos y negativos
             if (taskValue > 0) {
                 totalPositive += taskValue;
             } else {
                 totalNegative += taskValue;
             }

             // Calcular los porcentajes y actualizar la barra de progreso
             const total = totalPositive - totalNegative;
             const positivePercentage = totalPositive / total * 100;
             const negativePercentage = totalNegative / total * 100;
             progressBar.style.width = `${positivePercentage}%`;
             progressBar.style.background = `linear-gradient(to right, #2ecc71 ${positivePercentage}%, #c0392b ${positivePercentage}%)`;
         } else {
             alert("Por favor, ingrese un valor válido.");
         }
     });

     taskTable.addEventListener("click", function(e) {
         if (e.target.classList.contains("delete")) {
             const row = e.target.closest("tr");
             const taskValue = parseFloat(row.cells[1].textContent); // Obtener el valor de la tarea eliminada
             if (!isNaN(taskValue)) { // Verificar si el valor es un número
                 // Actualizar la suma total de los valores positivos y negativos
                 if (taskValue > 0) {
                     totalPositive -= taskValue;
                 } else {
                     totalNegative -= taskValue;
                 }

                 // Calcular los porcentajes y actualizar la barra de progreso
                 const total = totalPositive - totalNegative;
                 const positivePercentage = totalPositive / total * 100;
                 const negativePercentage = totalNegative / total * 100;
                 progressBar.style.width = `${positivePercentage}%`;
                 progressBar.style.background = `linear-gradient(to right, #2ecc71 ${positivePercentage}%, #c0392b ${positivePercentage}%)`;
             }
             row.remove();
         }
     });
});

