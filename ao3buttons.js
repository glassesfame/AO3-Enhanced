const button = document.createElement('button');
button.textContent = 'Completed';
button.addEventListener('click', () => {
  alert('Button clicked!');
});

document.body.appendChild(button);

