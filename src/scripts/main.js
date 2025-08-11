'use strict';

const formNew = document.querySelectorAll('input');

for (const key of formNew) {
  const id = key.getAttribute('id');
  const nameThis = key.getAttribute('name');
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', id);
  label.textContent = nameThis[0].toUpperCase() + nameThis.slice(1);
  key.setAttribute('placeholder', label.textContent);
  key.parentNode.insertBefore(label, key);
}
