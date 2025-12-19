const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    // Cambiar icono entre Luna y Sol
    if (body.classList.contains('light-mode')) {
        icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'light');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'dark');
    }
});

const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'light') {
    body.classList.add('light-mode');
    icon.classList.replace('fa-moon', 'fa-sun');
};

const url_whatsapp = "https://wa.me/56942314811/?text=Hola%20%21%20Me%20gustar%C3%ADa%20agendar%20una%20hora.";
document.getElementById("link-whatsapp").href = url_whatsapp;

const url_instagram = "https://www.instagram.com/carlosbenitezdentista?igsh=MTY0NDhlNjZka2Z3aA==";
document.getElementById("link-instagram").href = url_instagram;

const url_linkedin = "...";
document.getElementById("link-linkedin").href = url_linkedin;