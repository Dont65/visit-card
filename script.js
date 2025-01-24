const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const sunIcon = '<i class="fas fa-sun"></i>';
const moonIcon = '<i class="fas fa-moon"></i>';
const birthDate = new Date('2008-01-02');
const formattedBirthDate = '02.01.2008'; // Форматированная дата рождения
const languageSwitcher = document.querySelectorAll('.language-switcher a');

function calculateAge() {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function updateAgeDisplay() {
    const ageElement = document.getElementById('age');
    const calculatedAge = calculateAge();
    ageElement.textContent = calculatedAge;
    ageElement.dataset.hoverText = formattedBirthDate;
    if (ageElement.dataset.hoverText) {
        const originalAge = calculatedAge;
        ageElement.addEventListener('mouseover', () => {
            ageElement.textContent = ageElement.dataset.hoverText;
        });

        ageElement.addEventListener('mouseout', () => {
            ageElement.textContent = originalAge;
        });
    }
}

updateAgeDisplay();
setInterval(updateAgeDisplay, 1000 * 60 * 60 * 24);


function setTheme(theme) {
    body.classList.toggle('light-theme', theme === 'light');
    if (theme === 'light') {
        themeToggle.innerHTML = moonIcon;
        localStorage.setItem('theme', 'light');
    } else {
        themeToggle.innerHTML = sunIcon;
        localStorage.setItem('theme', 'dark');
    }
}


function handleThemeToggle(event) {
    event.preventDefault();
    const currentTheme = localStorage.getItem('theme') || 'dark';
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
}
    themeToggle.addEventListener('touchstart', handleThemeToggle);
    themeToggle.addEventListener('click', handleThemeToggle);


const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    setTheme(savedTheme);
} else {
    setTheme('dark');
}


 languageSwitcher.forEach(item => {
    item.addEventListener('touchstart', handleLanguageSwitch);
    item.addEventListener('click', handleLanguageSwitch);
});

function handleLanguageSwitch(event) {
        event.preventDefault();
  window.location.href = event.currentTarget.href;
}