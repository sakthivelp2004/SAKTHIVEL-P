let button=document.querySelector(".but"),
list=document.querySelector(".nav-cont");
button.addEventListener("click",()=>{
    list.classList.toggle("display");
    button.children[0].classList.toggle("l1");
    button.children[1].classList.toggle("l2");
    button.children[2].classList.toggle("l3");
})