const bdark = document.getElementById('bdark');
const bdark2 = document.getElementById('bdark2');
const body = document.getElementById('body');
const aboutBtn = document.getElementById('aboutUs');
const logoBanner = document.getElementById('logoBanner');
const logoBannerES = document.getElementById('logoBannerES');
const menuToggler = document.getElementById('menuToggler');
const responsiveMenu = document.getElementById('responsive-menu');
const tallerCientific = document.getElementById('taller-cientific');
const tallerEmocions = document.getElementById('taller-emocions');
const tallerMinijocs = document.getElementById('taller-minijocs');
const tallerTardor = document.getElementById('taller-tardor');
const lupita = document.getElementById('lupita');
const lupita2 = document.getElementById('lupita2');
const buscador = document.getElementById('buscador');
const closeBuscador = document.getElementById('close-buscador');
const inputBuscador = buscador.querySelector('input');
const resultados = document.getElementById('resultados');

//Funciones para abrir y cerrar  el menu
const abrirMenu = () => {
    menuToggler.classList.replace('bx-menu', 'bx-x');
    responsiveMenu.style.display = 'block';
}

const cerrarMenu = () => {
    menuToggler.classList.replace('bx-x', 'bx-menu');
    responsiveMenu.style.display = 'none';
}

//Distintos talleres, enlaces, y palabras relacionadas
const talleres = [
    { nombre: "Taller científic (CAT)", url: "/serveis/taller1/taller1.html", palabras: ["ciéncia", "pluja de colors", "fluid no newtonià", "volcà", "sal de colors", "pluja de colors amb oli", "expansió de colors", "cientific"] },
    { nombre: "Taller científico (ES)", url: "/serveis/taller1/ES/taller1ES.html", palabras: ["ciéncia", "lluvia de colores", "fluido no newtoniano", "volcán", "sal de colores", "lluvia de colores con aceite", "expansión de colores", "científico"] },
    { nombre: "Taller de les estacions (CAT)", url: "/serveis/taller4/taller4.html", palabras: ['taller de les estacions', 'narració del conte', 'tardor', 'primavera', 'estiu', 'hivern'] },
    { nombre: "Taller de las estaciones (ES)", url: "/serveis/taller4/ES/taller4ES.html", palabras: ['taller de las estaciones', 'narración del cuento', 'otoño', 'primavera', 'verano', 'invierno'] },
    { nombre: "Taller de les emocions (CAT)", url: "/serveis/taller2/taller2.html", palabras: ["taller de les emocions", "lectura", "conte", "por", "expressar", "comoditat", "monstre"] },
    { nombre: "Taller de las emociones (ES)", url: "/serveis/taller2/ES/taller2ES.html", palabras: ["taller de las emociones", "lectura", "cuento", "miedo", "expresar", "comodidad", "monstruo"] },
    { nombre: "Taller de minijocs (CAT)", url: "/serveis/taller3/taller3.html", palabras: ['taller de minijocs', 'recolectem les espases', 'camí de pedres i lava', 'pintem un drac', 'memory del conte'] },
    { nombre: "Taller de minijuegos (ES)", url: "/serveis/taller3/ES/taller3ES.html", palabras: ['taller de minijuegos', 'recolectamos las espadas', 'camino de piedras y lava', 'pintamos un dragón', 'memory del cuento'] }
];

// Función para aplicar el tema guardado o predeterminado
function aplicarTema(tema) {
    if (tema === 'oscuro') {
        body.classList.add('darkmode');
        bdark.className = 'bx bxs-sun';
        bdark2.className = 'bx bxs-sun';
    } else {
        body.classList.remove('darkmode');
        bdark.className = 'bx bxs-moon';
        bdark2.className = 'bx bxs-moon';
    }
    localStorage.setItem('tema', tema);
}

//Comprueba cual es el tema guardado en caso de que este esté guardado
const temaGuardado = localStorage.getItem('tema');
if (temaGuardado) {
    aplicarTema(temaGuardado);
} else {
    const temaInicial = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'oscuro' : 'claro';
    aplicarTema(temaInicial);
}

//Función para cambiar el tema
function cambiarTema() {
    const nuevoTema = body.classList.contains('darkmode') ? 'claro' : 'oscuro';
    aplicarTema(nuevoTema);
}

//Eventos para los botones que cambian los botones
bdark.addEventListener('click', cambiarTema);
bdark2.addEventListener('click', cambiarTema);

//El logo de la nav que lleva a la home
logoBanner.addEventListener('click', function () {
    window.location.href = "/index.html";
});

logoBannerES.addEventListener('click', function () {
    window.location.href = "/home/ES/indexES.html";
});

//Cerrar el menú responsive al llegar a 800px de width
window.addEventListener("resize", () => {
    if (window.innerWidth > 800) {
        cerrarMenu();
    }
});

//Botón de about us (home)
aboutBtn.addEventListener('click', function () {
    window.location.href = "/about/about.html";
});

//Abrir y cerrar menú responsive
menuToggler.addEventListener('click', function () {
    if (menuToggler.classList.contains('bx-menu')) {
        abrirMenu();
    } else {
        cerrarMenu();
    }
});

//Botón al taller cientifico (home)
tallerCientific.addEventListener('click', function () {
    window.location.href = "/serveis/taller1/taller1.html";
});

//Botón al taller emocions (home)
tallerEmocions.addEventListener('click', function () {
    window.location.href = "/serveis/taller2/taller2.html";
});

//Botón al taller de minijocs (home)
tallerMinijocs.addEventListener('click', function () {
    window.location.href = "/serveis/taller3/taller3.html";
});

//Botón al taller de tardor (home)
tallerTardor.addEventListener('click', function () {
    window.location.href = "/serveis/taller4/taller4.html";
})

// Mostrar buscador
lupita.addEventListener('click', function(){
    body.style.overflow = "hidden";
    buscador.style.display = "block";
    inputBuscador.focus();
});

// Mostrar buscador responsive
lupita2.addEventListener('click', function(){
    body.style.overflow = "hidden";
    buscador.style.display = "block";
    inputBuscador.focus();
    responsiveMenu.style.display = 'none';
    menuToggler.classList.remove('bx-x');
    menuToggler.classList.add('bx-menu');
});

// Cerrar buscador
closeBuscador.addEventListener('click', function(){
    body.style.overflow = "auto";
    buscador.style.display = "none";
    inputBuscador.value = "";
    resultados.innerHTML = "";
});

// Buscador de talleres
inputBuscador.addEventListener('keyup', function() {
    const filtro = inputBuscador.value.toLowerCase();
    resultados.innerHTML = "";

    if (filtro.trim() === "") return;

    talleres.forEach(taller => {
        if (taller.nombre.toLowerCase().includes(filtro) || taller.palabras.some(palabra => palabra.includes(filtro))) {
            const li = document.createElement('li');
            const enlace = document.createElement('a');
            enlace.href = taller.url;
            enlace.textContent = taller.nombre;
            li.appendChild(enlace);
            resultados.appendChild(li);
        }
    });
});

// gallery

document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
        loop: true, // Para que el carrusel sea infinito
        autoplay: {
            delay: 3000, // Cambia cada 3 segundos automáticamente
            disableOnInteraction: false, // Sigue moviéndose después de interactuar
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true, // Permite hacer clic en los puntos
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        effect: "coverflow", // Da un efecto 3D bonito
        grabCursor: true, // Cambia el cursor a una mano al pasar por encima
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
    });
});
