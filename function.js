const button = document.getElementById("button");
const fname = document.getElementById("fname");
const email = document.getElementById("email")

button.onclick = () => {
    if (fname != null && validateEmail(email) === true) {
      alert('All credentials are correct!');
    } else { 
      alert('Credentials are not correct');
    }
  }

