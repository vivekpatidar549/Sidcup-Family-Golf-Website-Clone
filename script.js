// gsap.to("#nav" , {
//     backgroundColor :"#000",
//     duration:1,
//     delay:5,
//     height:"110px",
//     scrollTrigger:{
//         trigger:"#nav",
//         scroller:"body",
//         markers:true,
//         start:"top -10%",
//         end: "top-11%",
//         scrub:2  // for repetation  we can give true also ans 1-5 between
//     }
// })
var crsr= document.querySelector("#cursor")
var crsrblur= document.querySelector("#cursor-blur")
document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x+20+"px"
    crsr.style.top = dets.y+"px"
    crsrblur.style.left =dets.x-200+"px"
    crsrblur.style.top=dets.y-180+"px" 

})

var h4all= document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale=2
        crsr.style.border="1px solif white"
        crsr.style.backgroundColor="#95C11E" 
    })
    elem.addEventListener("mouseleave", function(){
        crsr.style.scale=1
        crsr.style.border="0px solif #95C11E"
        crsr.style.backgroundColor="#95C11E" 
    })
    
})




gsap.to("#nav",{
    backgroundColor:"#000",
    height:"120px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10px",
        end:"top -12px,",
        scrub:2,
       // markers:true
    }

})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        //markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})




gsap.from("#about-us img,#about-us-in",{
    y:90,       // dowm position the element by 90px
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        //markers:true,
        start:"top 60%",      // where to trigger it from screen
        end:"top 58%",
        scrub:2              // for repetition
    }
})

gsap.from(".card",{
    scale:0.8,  // zoom effect
    opacity:0,
    duration:2,
    stagger: 0.1,  // ek ek karke stage me aayenge
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        //markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})


gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        //markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})

gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon2",
        scroller:"body",
        //markers:true,
        start:"top 80%",
        end:"top 45%",
        scrub:4
    }
})


gsap.to("#page4 h1" , {
    y:-40,
    scrollTrigger:{
        trigger:"#page4 h1" ,
        scroller:"body",
        //markers:true,
        start:"top 75%",
        end:"top 70%",
        scrub:3
    }
})