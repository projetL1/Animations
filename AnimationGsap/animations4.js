document.querySelector(".cercle").addEventListener("click", animation);
document.querySelector(".cercle").addEventListener("click", tremblement);
function animation() {
    console.log("coucou");
    gsap.to(".cercle", 0.5, {
        backgroundColor:"#FF0000",
    });
}
function tremblement(){
    console.log("coucou")
    gsap.to(".cercle",0.1, {
        repeat: 40,
        scale:1.3,
        yoyo:true,
        onComplete: () => {
            gsap.to(".cercle",{
                scale:10,
                opacity:0,
            })
        }
    })

}