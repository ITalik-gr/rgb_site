const form = document.querySelector('.hero-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = form.querySelector('#form-name').value.trim(),
        phone = form.querySelector('#form-phone').value.trim(),
        email = form.querySelector('#form-email').value.trim();
  const errorDiv = document.querySelector('#form-error');

  if (!name || !phone || !email) {
    errorDiv.textContent = 'Будь ласка, заповніть всі поля.';
    errorDiv.style.display = 'block';
    return;
  }

  const phonePattern = /^[+]?[0-9\s\-()]{7,}$/;
  if (!phonePattern.test(phone)) {
    errorDiv.textContent = 'Будь ласка, введіть дійсний номер телефону.';
    errorDiv.style.display = 'block';
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    errorDiv.textContent = 'Будь ласка, введіть дійсну електронну адресу.';
    errorDiv.style.display = 'block';
    return;
  }
  errorDiv.style.display = 'none';

  const templateId = 'template_uamfzpd';
  const serviceId = 'service_cqa64f8';

  // emailjs.send(serviceId, templateId, {
  //   name,
  //   phone_number: phone,
  //   email
  // }).then(
  //   (response) => {
  //     console.log('SUCCESS!', response.status, response.text);
  //   },
  //   (error) => {
  //     console.log('FAILED...', error);
  //   },
  // );
});
