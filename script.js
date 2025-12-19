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
document.querySelectorAll(".ig-link").forEach(el => {el.href = url_instagram});

const igpics = [
    "https://i.pinimg.com/736x/b0/b4/5f/b0b45f1ba2c7a01d09068f66f9ea998c.jpg",
    "https://images.cults3d.com/DRAHnPUeQyROSAgepOyZ24pufj8=/516x516/filters:no_upscale():format(webp)/https://fbi.cults3d.com/uploaders/43850820/illustration-file/b62a52f1-d205-456e-b70e-d76334ac786f/pikac.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvlE3b1px0kqEXmHTPBwHzlI4MDoLlg5NoVw&s"
]
document.querySelectorAll(".igpics").forEach((img, ind) => {img.src = igpics[ind]});

// const url_linkedin = "...";
// document.getElementById("link-linkedin").href = url_linkedin;