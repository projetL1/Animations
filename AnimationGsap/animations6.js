document.querySelector(".uneBoule_avecFil1").addEventListener("click",boulier);


function boulier(){
        console.log(i)
        gsap.fromTo(".uneBoule_avecFil1",{
            rotate:0,
         },{
            rotate:45,
            duration:1,
            yoyo:true,
            repeat:1,
            onComplete:() => {
                gsap.fromTo(".uneBoule_avecFil2",{
                    rotate:0,
                },{
                    rotate:-45,
                    duration:1,
                    yoyo:true,
                    repeat:1,
                });
            },
        
        });     
}
