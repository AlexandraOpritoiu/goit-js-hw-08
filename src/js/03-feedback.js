import throttle from "lodash.throttle";

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageTextarea = feedbackForm.querySelector('textarea[name="message"]');


const STORAGE_KEY = 'feedback-form-state';


const loadFormData = () => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    const { email, message } = JSON.parse(savedData);
    emailInput.value = email;
    messageTextarea.value = message;
  }
};

const saveFormData = throttle(() => {
  const formData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}, 500);


feedbackForm.addEventListener('input', () => {
  saveFormData();
});

feedbackForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const formData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  console.log('Form submitted:', formData);

  localStorage.removeItem(STORAGE_KEY);
});


loadFormData();