gsap.registerPlugin(Draggable);
Draggable.create(".carre", { 
    bounds: "body"
});

Draggable.create(".cercle", { 
    inertia: true,
    bounds: "body",
    
});

Draggable.create(".losange", {
    bounds:"body",
    type:"rotation",
    inertia:true,
})