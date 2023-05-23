
function CreateCircle(){
    let nvCercle = document.createElement("div")
    const emplacementCercle = document.querySelector('.Objets')
    nvCercle.classList.add("cercle")
    emplacementCercle.appendChild(nvCercle)
}
CreateCircle()

gsap.to(".cercle",{
    delay: 0.2,
    x:-30,
    ease: "bounce",
    onComplete: () => {
        CreateCircle();
        gsap.to(".cercle", {
            delay: 0.2,
            x:-30,
            ease: "bounce",
            onComplete: () => {
            CreateCircle();
            gsap.to(".cercle", {
                delay: 0.2,
                x:-30,
                ease: "bounce",
                onComplete: () => {
                CreateCircle();
                gsap.to(".cercle", {
                    delay: 0.2,
                    x:-30,
                    ease: "bounce",
                })
                }
            })
            }
        })
    }
})