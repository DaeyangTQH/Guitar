const toggleButton = document.getElementById('toggleModeButton');
const body = document.body;

toggleButton.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        toggleButton.textContent = 'Switch to Light Mode';
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        toggleButton.textContent = 'Switch to Dark Mode';
    }
});