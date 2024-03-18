let navbar=document.querySelector(".nav-wrapper");
let navlink=document.querySelectorAll(".nav-link");
let navbrand=document.querySelector(".navbar-brand");
let navtoggler=document.querySelector(".navbar-toggler");
let show =document.querySelector(".show");
let navbtn=document.getElementById("nav-btn");

console.log()


window.addEventListener("scroll",()=>{
    navbar.classList.add("fixed-top");

    if(window.scrollY>2 & window.innerWidth>995){
        navbar.style.background="#ffffff9d";
        navbrand.style.transition="font-size 0.4s ease";
        navbrand.style.fontSize="55px";
        navbtn.style.border="2px solid black";
        navbtn.style.setProperty('color', 'black', 'important');
        navlink.forEach((value,index)=>{
            value.classList.add("custom-nav");
        })
        navbrand.classList.add("custom-nav"); 
    }else{
        navbar.style.background="";
        navbrand.style.fontSize="";
        navbrand.classList.remove("custom-nav"); 
        navbtn.style=""
        navlink.forEach((value,index)=>{
            value.classList.remove("custom-nav");
        })
    }
  
})

navtoggler.addEventListener("click",function(){
    console.log(show);
})

