"use strict";

// Elements
const form = document.querySelector("form");
const hiddenMessage = document.querySelector(".hidden");

// Input Fields
const fullName = document.getElementById("fullName");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");
const button = document.querySelector("button");

// Error classes
const fullNameError = document.querySelector(".fullNameError");
const emailError = document.querySelector(".emailError");
const subjectError = document.querySelector(".subjectError");
const messageError = document.querySelector(".messageError");

// Regular Expressions
const nameRegex = /^[\p{L}][\p{L}\p{M}' .-]{1,149}$/u;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Functions
const handleNameInput = () => {
  const name = fullName.value.trim().replace(/\s+/g, " ");

  if (!name) {
    fullName.classList.add("form__input-error");
    fullNameError.hidden = false;
    fullNameError.textContent = "This field is required";
    return false;
  }

  if (!nameRegex.test(name)) {
    fullName.classList.add("form__input-error");
    fullNameError.hidden = false;
    fullNameError.textContent = "Must be at least 2 letters";
    return false;
  }

  fullName.classList.remove("form__input-error");
  fullNameError.hidden = true;
  fullNameError.textContent = "";
  return true;
};

const handleEmailInput = () => {
  const email = emailInput.value.trim();

  if (!email || !emailRegex.test(email)) {
    emailInput.classList.add("form__input-error");
    emailError.hidden = false;
    emailError.textContent = "Please enter a valid email address";
    return false;
  }

  emailInput.classList.remove("form__input-error");
  emailError.hidden = true;
  emailError.textContent = "";
  return true;
};

const handleSubjectInput = () => {
  const subject = subjectInput.value.trim();

  if (!subject) {
    subjectInput.classList.add("form__input-error");
    subjectError.hidden = false;
    subjectError.textContent = "Subject cannot be empty";
    return false;
  }

  subjectInput.classList.remove("form__input-error");
  subjectError.hidden = true;
  subjectError.textContent = "";
  return true;
};

const handleMessageInput = () => {
  const message = messageInput.value.trim();

  if (!message || message.length < 10) {
    messageInput.classList.add("form__input-error");
    messageError.hidden = false;
    messageError.textContent = "Enter at least 10 characters";
    return false;
  }

  messageInput.classList.remove("form__input-error");
  messageError.hidden = true;
  messageError.textContent = "";
  return true;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  handleNameInput();
  handleEmailInput();
  handleSubjectInput();
  handleMessageInput();

  // Check if all inputs are valid
  const allInputsValid = [
    handleNameInput(),
    handleEmailInput(),
    handleSubjectInput(),
    handleMessageInput(),
  ].every((input) => input !== false);

  if (allInputsValid) {
    form.reset();
    hiddenMessage.classList.add("success");

    setTimeout(function () {
      hiddenMessage.classList.remove("success");
    }, 5000);
  }
});
