//  document.addEventListener('DOMContentLoaded', function() {
//      const loginForm = document.getElementById('login-form');
//      const registerForm = document.getElementById('register-form');
//      const profileSection = document.getElementById('profile');
//      const profileUsername = document.getElementById('profile-username');
//      const logoutButton = document.getElementById('logout-link');
//      const registerBtn = document.getElementById('register-btn');
//      const registerNewUserBtn = document.getElementById('register-new-user');
//      const loginAfterRegisterBtn = document.getElementById('login-after-register');
//      const taskInput = document.getElementById("taskInput");
//      const taskValueInput = document.getElementById("taskValueInput");
//      const addTaskBtn = document.getElementById("addTaskBtn");
//      const taskList = document.getElementById("taskList");
//      const taskTable = document.getElementById("taskTable");
//      const progressBar = document.getElementById("progressBar");

//      let currentUser = "";

//      let users = [
//          { username: "user1", password: "pass1", name: "Usuario1" },
//          { username: "user2", password: "pass2", name: "Usuario2" },
//      ];

//      loginForm.addEventListener('submit', function(event) {
//          event.preventDefault();
//          const username = document.getElementById('username').value;
//          const password = document.getElementById('password').value;
//          const user = users.find(user => user.username === username && user.password === password);
//          if (user) {
//              loginForm.classList.add('hidden');
//              profileSection.classList.remove('hidden');
//              profileUsername.textContent = user.name;
//              currentUser = user.name;
//          } else {
//              alert('Nombre de usuario o contraseña incorrecta.');
//          }
//      });

//      registerBtn.addEventListener('click', function() {
//          loginForm.classList.add('hidden');
//          registerForm.classList.remove('hidden');
//      });

//      registerNewUserBtn.addEventListener('click', function() {
//          const newUsername = document.getElementById('new-username').value;
//          const newName = document.getElementById('new-name').value;
//          const newPassword = document.getElementById('new-password').value;
//          if (users.some(user => user.username === newUsername)) {
//              alert('El nombre de usuario ya está en uso.');
//          } else {
//              users.push({ username: newUsername, password: newPassword, name: newName });
//              alert('Usuario registrado exitosamente.');
//              registerForm.classList.add('hidden');
//              loginForm.classList.remove('hidden');
//          }
//      });

//      loginAfterRegisterBtn.addEventListener('click', function() {
//          registerForm.classList.add('hidden');
//          loginForm.classList.remove('hidden');
//      });

//      logoutButton.addEventListener('click', function() {
//          loginForm.classList.remove('hidden');
//          profileSection.classList.add('hidden');
//          profileUsername.textContent = '';
//      });

//      addTaskBtn.addEventListener("click", function() {
//          const taskText = taskInput.value.trim();
//          const taskValue = parseFloat(taskValueInput.value.trim()); // Convertir el valor a un número flotante
//          if (taskText !== "" && !isNaN(taskValue)) { // Verificar si el valor es un número
//              const now = new Date();
//              const date = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
//              const time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
//              const row = document.createElement("tr");
//              row.innerHTML = `
//                 <td>${taskText}</td>
//                  <td>${taskValue + '$'}</td>
//                  <td>${date} ${time}</td>
//                  <td>${currentUser}</td>
//                  <td>
//                      <button class="edit">Editar</button>
//                      <button class="delete">Eliminar</button>
//                  </td>
//              `;
//              taskList.appendChild(row);
//              taskInput.value = "";
//              taskValueInput.value = ""; // Limpiar el campo de valor después de agregar la tarea

//          } else {
//              alert("Por favor, ingrese un valor válido.");
//          }
//      });
// });

 document.addEventListener('DOMContentLoaded', function() {
     const loginForm = document.getElementById('login-form'); //Para inicio de sesion
     const registerForm = document.getElementById('register-form'); //Registro en el inicio de sesion
     const profileSection = document.getElementById('profile'); //Perfiles creados
     const profileUsername = document.getElementById('profile-username'); //Para los nombre de usuarios creados
     const logoutButton = document.getElementById('logout-link'); //Enlace de cierre de sesion
     const registerBtn = document.getElementById('register-btn'); //Boton de registrar usuarios
     const registerNewUserBtn = document.getElementById('register-new-user'); //Para registrar nuevos usuarios
     const loginAfterRegisterBtn = document.getElementById('login-after-register'); //Para iniciar sesion con los usuarios registrados
     const taskInput = document.getElementById("taskInput"); //Agregar ingresos o gastos
     const taskValueInput = document.getElementById("taskValueInput"); //Agregar un valor
     const addTaskBtn = document.getElementById("addTaskBtn"); //Boton de agregar ingresos o gastos al registro
     const taskList = document.getElementById("taskList"); //Lista de agregados al registro
     const taskTable = document.getElementById("taskTable"); //Tabla para almacenar registros

    //  CurrentUser para Validar el usuario que ha iniciado sesion
     let currentUser = "";

    //  Usuarios creados para prueba
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
         const taskValue = parseFloat(taskValueInput.value.trim());
         if (taskText !== "" && !isNaN(taskValue)) {
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
             taskValueInput.value = "";
         } else {
             alert("Por favor, ingrese un valor válido.");
         }  
     });

     // Agregar event listener para los botones de editar
     document.addEventListener('click', function(event) {
         if (event.target.classList.contains('edit')) {
             const row = event.target.closest('tr');
             // Aquí puedes implementar la lógica para editar la tarea
             // Por ejemplo, puedes obtener los valores de la fila y permitir al usuario editarlos
             // Luego puedes actualizar la fila con los nuevos valores
             console.log('Editar tarea:', row);
         }  
     });

     // Agregar event listener para los botones de eliminar
     document.addEventListener('click', function(event) {
         if (event.target.classList.contains('delete')) {
             const row = event.target.closest('tr');
             row.remove(); // Eliminar la fila
         }
     });
 });
