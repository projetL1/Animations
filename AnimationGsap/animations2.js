gsap.to(".carre", {
    //déplacement de 40% de sa taille sur l'axe des Y
    yPercent :40, 
    //applique l'animation à chaque objet de la classe "carre" à la suite au lieu de tous en même temps
    stagger: {
        //"délai" entre chaque objet
        each: 0.1,
        //l'animation s'execute dans un sens puis dans l'autre effet "yoyo" d'ou le nom de la propriété
        yoyo: true,
        //répétition de l'animation (-1 => à l'infini)
        repeat: -1,
    },
})
//on selectionne les carres
const carres = document.querySelectorAll('.carre')
//mise en place d'un ecouteur d'evenement sur les carre
carres.forEach(i => {
    i.addEventListener("click", disparaitre)
});
function disparaitre(ev){
    gsap.to(".carre", {
        duration:0.5,
        stagger:0.1,
        //opacite passe a 0 => les carres disparaissent
        opacity:0,
        yPercent:-40,
    })
}