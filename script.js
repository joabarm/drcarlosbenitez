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

const igprofilepic = "https://res.cloudinary.com/joabarm/image/upload/v1766595898/ig-profile-pic_py0qtw.jpg";
document.getElementById("igprofilepic").src = igprofilepic;

const url_whatsapp = "https://wa.me/56942314811/?text=Hola%20%21%20Me%20gustar%C3%ADa%20agendar%20una%20hora.";
document.getElementById("link-whatsapp").href = url_whatsapp;

const url_instagram = "https://www.instagram.com/carlosbenitezdentista?igsh=MTY0NDhlNjZka2Z3aA==";
document.querySelectorAll(".ig-link").forEach(el => {el.href = url_instagram});

const igpics = [
    "https://res.cloudinary.com/joabarm/image/upload/w_480,f_auto/v1766595902/igpic1_vcjlb2.png",
    "https://res.cloudinary.com/joabarm/image/upload/w_480,f_auto/v1766595897/igpic2_m7tavy.png",
    "https://res.cloudinary.com/joabarm/image/upload/w_480,f_auto/v1766595901/igpic3_tnj0ts.png",
]
document.querySelectorAll(".igpics").forEach((img, ind) => {img.src = igpics[ind]});