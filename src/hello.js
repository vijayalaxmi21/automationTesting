function validateLogin() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  if (username === 'demo' && password === 'password') {
    alert('Login successful!');
    window.location.href = 'dashboard.html';
  } else {
    alert('Invalid username or password. Please try again.');
  }
};
module.exports = validateLogin;