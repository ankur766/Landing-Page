var curs=document.querySelector("#cursor")
var cursblur=document.querySelector("#cursorblur")
document.addEventListener("mousemove", function (dets) {
    curs.style.left = dets.clientX + "px";
    curs.style.top = dets.clientY + "px";
    cursblur.style.left = dets.clientX -200 +"px";
    cursblur.style.top = dets.clientY-200 + "px";

  });
  


gsap.to("#nav",
 {backgroundColor:"#000", duration: 0.5,
 height: "90px", width: "100%",
 delay:1,
scrollTrigger: {
    tigger: "#nav",
    scroller:"body",

    start:"top-10%",
    end:"top -11%",
    srcub:1


}});

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        tigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -70%",
        srcub:2
    }
})
