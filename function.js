const button = document.getElementById("button");
const fname = document.getElementById("fname");
const email = document.getElementById("email")
const password = document.getElementById("password")

button.onclick = () => {
    if (fname.value.length > 0 && email.value.length > 0 && password.value.length) {
      alert('Thank you for filling in the form!');
    } else { 
      alert('Some fields are empty');
    }
  }

