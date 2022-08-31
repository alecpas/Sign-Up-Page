const button = document.getElementById("button");
const fname = document.getElementById("fname");
const email = document.getElementById("email")

const validateEmail = (input) => {

    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (input.value.match(validRegex)) {
  
      return true;}
    
      else {return false;}

}

button.onclick = () => {
    if (fname != null && validateEmail(email) === true) {
      alert('All credentials are correct!');
    } else { 
      alert('Credentials are not correct');
    }
  }

