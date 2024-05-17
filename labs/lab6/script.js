  document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const profileSection = document.getElementById('profile');
    const profileUsername = document.getElementById('profile-username');
    const logoutButton = document.getElementById('logout');
  
    // Para crear los usuarios válidos
    const users = [
      { username: "user1", password: "pass1" },
      { username: "user2", password: "pass2" },
    ];
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      // Obtener el nombre de usuario y la contraseña ingresados por el usuario
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      
      // Validar el nombre de usuario y la contraseña
      const user = users.find(user => user.username === username && user.password === password);
      if (user) {
        loginForm.classList.add('hidden');
        profileSection.classList.remove('hidden');
        // Mostrar el nombre de usuario en el perfil
        profileUsername.textContent = username;
      } else {
        alert('Nombre de usuario o contraseña incorrecta.');
      }
    });
  
    logoutButton.addEventListener('click', function() {
      // Mostrar el formulario de inicio de sesión
      loginForm.classList.remove('hidden');
      // Ocultar la sección de perfil
      profileSection.classList.add('hidden');
      // Borrar el nombre de usuario en el perfil
      profileUsername.textContent = '';
    });
  });
  