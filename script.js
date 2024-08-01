let Scontainer = document.querySelector(".container");
let nextsbtn = document.getElementById("next");
let backbtn = document.getElementById("back");

Scontainer.addEventListener("wheel", (evt)=>{
    evt.preventDefault();
    Scontainer.scrollLeft += evt.deltaY;
})

nextsbtn.addEventListener("click",()=>{
    Scontainer.style.scrollBehavior = "smooth";
    Scontainer.scrollLeft += 1200;
})

backbtn.addEventListener("click",()=>{
    Scontainer.style.scrollBehavior = "smooth";
    Scontainer.scrollLeft -= 1200;
})