// Fonction pour gérer l'animation de l'apparition des sections au scroll
const sections = document.querySelectorAll('.section');

// Observer qui détecte quand les sections entrent et sortent de la fenêtre
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // L'élément est visible, on ajoute la classe 'visible'
            entry.target.classList.add('visible');
        } else {
            // L'élément n'est plus visible, on enlève la classe 'visible'
            entry.target.classList.remove('visible');
        }
    });
}, {
    threshold: 0.3 // Déclenchement lorsque 30% de l'élément est visible
});

// Observer chaque section
sections.forEach(section => {
    observer.observe(section);
});

// Fonction de défilement fluide pour les boutons
function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
        });
    }
}
let previousScrollPosition = window.scrollY; // Dernière position de défilement

// Fonction pour ajuster la position du défilement et centrer la section à l'écran
let lastScrollTime = 0; // Dernière fois où le scroll a été ajusté
const scrollDelay = 300; // Délai minimum entre deux ajustements en millisecondes

// Fonction pour ajuster la position du défilement et centrer la section à l'écran
let isScrolling = false; // Variable pour contrôler le verrouillage de l'ajustement


