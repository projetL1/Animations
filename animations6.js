//ecouteur d'evenement sur boulier
document.querySelector(".uneBoule_avecFil1").addEventListener("click",boulier); 
//boulier appel boulier1
function boulier(){
    console.log("itération")
    boulier1()
}
//boulier 1 agit sur la premiere boule du boulier
function boulier1(){
    gsap.fromTo(".uneBoule_avecFil1",{
        rotate:0,
     },{
        rotate:45,
        duration:1,
        yoyo:true,
        repeat:1,
        //fin de l'animation de la premiere boule on appel boulier2
        onComplete:() => {
            boulier2()
        }
    });
}
//boulier2 agit sur la dernière boule du boulier
function boulier2(){
    gsap.fromTo(".uneBoule_avecFil2",{
        rotate:0,
    },{
        rotate:-45,
        duration:1,
        yoyo:true,
        repeat:1,
        //on rappel boulier => boucle infini
        onComplete:() => {
            boulier()
        }
    });
}
//l'animation s'arrete quand on recharge la page
