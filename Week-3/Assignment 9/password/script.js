function isStrongPassword(password) {
    if (password.length < 8) {
      return false;
    }
  
    if (password.toLowerCase().includes("password")) {
      return false;
    }
  
    if (!/[A-Z]/.test(password)) {
      return false;
    }
  
    return true;
  }
  console.log(isStrongPassword("Qwerty")); 
  console.log(isStrongPassword("passwordQwerty"));
  console.log(isStrongPassword("qwerty123")); 
  console.log(isStrongPassword("Qwerty123")); 
    