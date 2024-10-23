const toggleButton = document.getElementById('toggle-menu');
const sidebar = document.getElementById('sidebar');

toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('visible');
});
