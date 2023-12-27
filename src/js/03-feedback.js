import _ from 'lodash-es';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');

const formData = {
  email: email.value,
  message: message.value,
};

const saveForm = _.throttle(e => {
  console.log(e.target.value);
  formData[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}, 500);

function getFormDataFromLS() {
  const data = localStorage.getItem('feedback-form-state');
  if (data) {
    const formDataJS = JSON.parse(data);

    formData.email = formDataJS.email;
    formData.message = formDataJS.message;

    email.value = formDataJS.email;
    message.value = formDataJS.message;
  }
}

email.addEventListener('input', saveForm);
message.addEventListener('input', saveForm);

getFormDataFromLS();

form.addEventListener('submit', e => {
  e.preventDefault();
  localStorage.removeItem('feedback-form-state');
  email.value = '';
  message.value = '';

  console.log(formData, 'this is formData'), (formData.email = '');
  formData.message = '';
});
