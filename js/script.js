function main() {
  const submitButton = document.querySelector('#create-account-button');
  submitButton.addEventListener('click', (e) => {
    if (!validatePassword()) {
      e.preventDefault();
    }
  });
}

function validatePassword() {
  const password = document.querySelector('#password');
  const confirmPassword = document.querySelector('#confirm-password');
  console.log(password.value);
  console.log(confirmPassword.value);
  if (password.value !== confirmPassword.value) {
    const errorMessage = document.createElement('p');
    errorMessage.classList.add('error');
    errorMessage.textContent = "Passwords do not match";
    const formCard = document.querySelector('#form-card');
    formCard.appendChild(errorMessage);
    return false;
  }
  return true;
}

main();
