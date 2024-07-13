// Example: Toggle dark/light theme
const toggleButton = document.querySelector('.toggle-button');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
});
