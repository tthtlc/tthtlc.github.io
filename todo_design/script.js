
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('themeToggle');
  const moonIcon = document.getElementById('moonIcon');
  const bulbIcon = document.getElementById('bulbIcon');

  // Check for saved user preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    moonIcon.style.display = 'none';
    bulbIcon.style.display = 'inline';
  }

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');

    // Toggle icon visibility
    moonIcon.style.display = isDarkMode ? 'none' : 'inline';
    bulbIcon.style.display = isDarkMode ? 'inline' : 'none';

    // Save user preference
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  });
});

