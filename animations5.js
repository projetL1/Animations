//on signale a GSAP que on a importé un plugin ici "draggable"
gsap.registerPlugin(Draggable);
//on indique que le carre peut etre deplace
Draggable.create(".carre", { 
    bounds: "body"
});
//on indique que le cercle peut etre deplace et qu'il conserve 
//aussi une inertie qui lui fait continuer
//son mouvement meme apres le drag initiale à la souris
Draggable.create(".carre2", { 
    bounds: "body",
    
    
});
//type rotation => le type de mouvement n'est plus linéaire mais rotatif
Draggable.create(".cercle", {
    bounds:"body",
    type:"rotation",
})
