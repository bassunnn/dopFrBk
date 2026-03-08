document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('feedbackForm');
  if (!form) return;

  const fields = [
    { input: document.getElementById('fullname'), field: document.getElementById('fullnameField') },
    { input: document.getElementById('phone'), field: document.getElementById('phoneField') },
    { input: document.getElementById('email'), field: document.getElementById('emailField') },
    { input: document.getElementById('message'), field: document.getElementById('messageField') }
  ];

  function clearErrors() {
    document.querySelectorAll('.is-danger').forEach(function (el) {
      el.classList.remove('is-danger');
    });
    document.querySelectorAll('.help.is-danger').forEach(function (el) {
      el.remove();
    });
  }

  function showError(input, field, message) {
    input.classList.add('is-danger');
    const help = document.createElement('p');
    help.className = 'help is-danger';
    help.textContent = message;
    field.appendChild(help);
  }

  fields.forEach(function (item) {
    item.input.addEventListener('input', function () {
      item.input.classList.remove('is-danger');
      item.field.querySelectorAll('.help.is-danger').forEach(function (el) {
        el.remove();
      });
    });
  });

  document.getElementById('agreement').addEventListener('change', function () {
    document.getElementById('agreementField').querySelectorAll('.help.is-danger').forEach(function (el) {
      el.remove();
    });
  });

  form.addEventListener('reset', function () {
    setTimeout(clearErrors, 0);
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    clearErrors();

    let isValid = true;
    const fullname = document.getElementById('fullname');
    const phone = document.getElementById('phone');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const agreement = document.getElementById('agreement');

    const fullnameValue = fullname.value.trim();
    const phoneValue = phone.value.trim();
    const phoneDigits = phoneValue.replace(/\D/g, '');
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();

    if (fullnameValue === '' || fullnameValue.split(' ').filter(Boolean).length < 2) {
      showError(fullname, document.getElementById('fullnameField'), 'Введите фамилию и имя');
      isValid = false;
    }

    if (phoneValue === '' || phoneDigits.length < 10) {
      showError(phone, document.getElementById('phoneField'), 'Введите номер телефона');
      isValid = false;
    }

    if (emailValue === '' || !emailValue.includes('@') || !emailValue.includes('.')) {
      showError(email, document.getElementById('emailField'), 'Введите корректный email');
      isValid = false;
    }

    if (!agreement.checked) {
      const help = document.createElement('p');
      help.className = 'help is-danger';
      help.textContent = 'Нужно согласие';
      document.getElementById('agreementField').appendChild(help);
      isValid = false;
    }

    if (!isValid) return;

    document.dispatchEvent(new CustomEvent('formValid', {
      detail: {
        fullname: fullnameValue,
        phone: phoneValue,
        email: emailValue,
        message: messageValue || '(не заполнено)'
      }
    }));

    alert('Форма отправлена! Данные в консоли.');
  });
});
