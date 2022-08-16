document.getElementById('login-submit').addEventListener('click', function(){
  const emailField =document.getElementById('user-email')
  const email = emailField.value;
  const passwordField =document.getElementById('user-password')
  const password = passwordField.value;
  if(email === 'momin01@gmail.com' && password === 'password'){
    window.location.href = 'banking.html'
  }
  else{
    alert('invalid user')
  }
  
})