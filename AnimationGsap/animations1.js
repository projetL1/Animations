//déplacement d'un élément (cercle,carre,triangle)
//duration => durée de l'animation
//x => déplacement sur l'axe des x de (200,400,600)pxl
//rotation => rotation qui prend en paramètre x degrés(ici 180)
//background color => change la couleur
//ease => méthode GSAP qui décrit le type de mouvement de l'objet
    //dans ce cas "bounce.out" le triangle rebondit arrivé a la fin de son déplacement
gsap.to(".cercle", {duration: 3, x: 200 })
gsap.to(".carre", {duration: 2, x: 400,rotation:180,backgroundColor: '#8d3dae' })
gsap.to(".triangle", {duration: 1, x: 600,ease: "bounce.out"})
