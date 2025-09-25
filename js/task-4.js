const form = document.querySelector(".login-form");
form.addEventListener("submit", handlerSubmit);
function handlerSubmit(event) {
    event.preventDefault();
    const elements = event.target.elements;
   const emailValue = elements.email.value.trim();
  const passwordValue = elements.password.value.trim();

  if (emailValue === "" || passwordValue === "") {
    return alert("All form fields must be filled in!");
  }
  const info = {
    email: emailValue,
    password: passwordValue,
  };
     console.log(info);

  event.target.reset();
}
