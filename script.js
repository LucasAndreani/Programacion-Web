document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      if (email && password) {
        window.location.href = 'home.html';
      } else {
        alert('Please fill in all fields');
      }
    });
  }

  const registerForm = document.getElementById('register-form');
  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const firstName = document.getElementById('first-name').value;
      const lastName = document.getElementById('last-name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirm-password').value;

      if (firstName && lastName && email && password && confirmPassword) {
        if (password === confirmPassword) {
          window.location.href = 'login.html';
        } else {
          alert('Passwords do not match');
        }
      } else {
        alert('Please fill in all fields');
      }
    });
  }

  const detailsForm = document.getElementById('details-form');
  if (detailsForm) {
    detailsForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const day = document.getElementById('day').value;
      const month = document.getElementById('month').value;
      const year = document.getElementById('year').value;
      const weight = document.getElementById('weight').value;
      const heightFt = document.getElementById('height-ft').value;
      const heightIn = document.getElementById('height-in').value;
      const heightCm = document.getElementById('height-cm').value;
  
      if (day && month && year && weight) {
        if ((heightFt && heightIn && heightCm) || (!heightFt && !heightIn && !heightCm)) {
          alert('Please select either ft and in or cm for height, not both.');
        } else if ((heightFt && heightIn) || heightCm) {
          window.location.href = 'portal.html';
        } else {
          alert('Please fill in either ft and in or cm for height');
        }
      } else {
        alert('Please fill in all fields');
      }
    });
  }

  const toggleButtons = document.querySelectorAll('.toggle-button');
  toggleButtons.forEach((button) => {
    button.addEventListener('click', () => {
      toggleButtons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });
});